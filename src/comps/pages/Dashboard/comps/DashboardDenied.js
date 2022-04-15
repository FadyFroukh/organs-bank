import { Alert, AlertTitle, Collapse } from "@mui/material";


function DashboardDenied({deniedError,setDeniedError}){
    return(
        <div className="denied-box">
            <Collapse in={deniedError}>
                <Alert severity="error" onClose={()=>setDeniedError(!deniedError)}>
                    <AlertTitle>Account Status</AlertTitle>
                    Account Was Blocked
                </Alert> 
            </Collapse>
        </div>
    );
}

export default DashboardDenied;