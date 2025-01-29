import { Grid2, useScrollTrigger } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useFetch from "./customHooks/fetchCustomHook";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";


const LoginPage = () => {
    const [resp,error, doLogin]  = useFetch('https://automationexercise.com/api/productsList');
    const [isLoading, setLoading] = useState(false);
    
    const enableLogin = () => {
        console.log("Inside fetchAPI");
        setLoading(true);
        doLogin();
    }

    useEffect(() => {
        if (resp || error) {
            setLoading(false);
        }
    }, [resp, error]);

    return (
        <Grid2 height="100vh" container alignItems="center" justifyContent="center">
            <Grid2 flexDirection="column" > 
                <Grid2><TextField id="outlined-basic" label="Username" variant="outlined" sx={{m: 1}}/></Grid2>
                <Grid2><TextField id="outlined-basic" label="Password" variant="outlined" sx={{m: 1}}/></Grid2>
                <Grid2><Button variant="contained" onClick={enableLogin}>Login</Button>
                 {isLoading ? ( <Box display="flex" justifyContent="center" alignItems="center"> <CircularProgress /> </Box> ) : <></>}
                </Grid2>
                <Grid2>{error}</Grid2>
            </Grid2>
        </Grid2>
    );
}

export default LoginPage;