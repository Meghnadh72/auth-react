import { Grid2 } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = () => {
    
    return (
        <Grid2 height="100vh" container alignItems="center" justifyContent="center">
            <Grid2 flexDirection="column" > 
                <Grid2><TextField id="outlined-basic" label="Username" variant="outlined" sx={{m: 1}}/></Grid2>
                <Grid2><TextField id="outlined-basic" label="Password" variant="outlined" sx={{m: 1}}/></Grid2>
                <Grid2><Button variant="contained">Login</Button></Grid2>
            </Grid2>
        </Grid2>
    );
}

export default LoginPage;