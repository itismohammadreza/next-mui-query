"use client"
import { LoadingButton } from "@mui/lab";
import TextFieldElement from "@components/forms/TextFieldElement";
import { FormContainer } from "@components/forms/FormContainer";
import CheckboxElement from "@components/forms/CheckboxElement";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@services/authService";
import { redirect } from "next/navigation";

const Login = () => {
  const {isPending, mutate: login} = useMutation({
    mutationFn: (value) => authService.login(value)
  });

  const onSubmit = async (value: any) => {
    const res = login(value);
    localStorage.setItem('token', res.token);
    redirect('/');
  }

  const onError = (error: any) => {
    console.log(error)
  }

  return (
      <div>
        Login
        <FormContainer>
          <TextFieldElement
              label="Error"
              name="ali"
              onChange={v => console.log(v)}/>
        </FormContainer>
        <FormContainer defaultValues={{firstName: 'sss'}} onError={onError} onSuccess={onSubmit}>
          <>
            <TextFieldElement
                label="Error"
                name="firstName"
                parseError={(x) => <span>{x.message + '2'}</span>}
                rules={{required: 'is required', minLength: {value: 3, message: 'min length'}}}/>
            <CheckboxElement
                label="Error"
                name="lastName"
                rules={{required: 'is required'}}/>
            <LoadingButton loading={isPending} type="submit" variant="outlined">
              Submit
            </LoadingButton>
          </>
        </FormContainer>
      </div>
  )
}

export default Login;
