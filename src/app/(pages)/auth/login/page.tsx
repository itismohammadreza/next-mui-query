'use client';
import { Page } from "@components/Page";
import { Container, Grid, Typography } from "@mui/material";
import { FormElements } from "@components/forms/FormElements";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { dataService } from "@services/api/dataService";
import { useMutation } from "@tanstack/react-query";
import { cookieService } from "@utils/coockieService";
import { globalStateService } from "@services/globalStateService";
import { useRouter } from "next/navigation";
import { User } from "@models/business";

const Login = () => {
  const router = useRouter();

  const {isPending, mutateAsync: login} = useMutation({
    mutationFn: async (value: User) => {
      try {
        const {data} = await dataService.login(value);
        cookieService.set('token', data.access_token, {maxAge: 36000});
        const {data: user} = await dataService.getProfile();
        globalStateService.set(prev => ({...prev, user}));
        return user;
      } catch {
      }
    }
  });

  const onSubmit = async (value: User) => {
    const user = await login(value);
    if (user) {
      router.push('/');
    }
  }

  return (
      <Page>
        <FormElements.Container onSuccess={onSubmit}>
          <Container component="main" maxWidth="xs" sx={{marginTop: 8}}>
            <Typography component="h1" marginBottom={2} variant="h5" textAlign="center"> Sign in </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormElements.TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    rules={{required: 'Required'}}/>
              </Grid>
              <Grid item xs={12}>
                <FormElements.TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    rules={{required: 'Required'}}/>
                <FormElements.Checkbox name="rememberMe" label="Remember me"/>
              </Grid>
            </Grid>
            <LoadingButton loading={isPending} fullWidth sx={{mt: 3, mb: 2}} type="submit" variant="contained">
              Sign In
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Link href="/auth/forget-password"> Forgot password? </Link>
              </Grid>
              <Grid item>
                <Link href="/auth/register"> Don't have an account? Sign Up </Link>
              </Grid>
            </Grid>
          </Container>
        </FormElements.Container>
      </Page>
  )
}

export default Login;
