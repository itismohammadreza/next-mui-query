"use client"
import { Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { dataService } from "@services/api/dataService";
import { LoadingButton } from "@mui/lab";
import { Page } from "@components/Page";
import { useUser } from "@hooks/useUser";

const Home = () => {
  const user = useUser();
  const {isFetching, refetch} = useQuery({
    queryKey: ["data"],
    queryFn: dataService.getProducts,
    enabled: false
  });

  return (
      <Page title="Home">
        <Typography variant="h6" component="span"> Request: </Typography>
        <LoadingButton loading={isFetching} onClick={() => refetch()}>
          Call
        </LoadingButton>
        <br/>
        {
            user && (
                <>
                  <Typography variant="h6" component="span"> Logged In User: </Typography>
                  {user.name} - {user.email}
                  <Button color="error" onClick={() => dataService.logout()}> Logout </Button>
                </>
            )
        }
      </Page>
  )
}

export default Home;
