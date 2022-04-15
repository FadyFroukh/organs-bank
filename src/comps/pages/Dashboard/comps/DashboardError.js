import { Alert, AlertTitle, Collapse } from "@mui/material";


function DashboardError({error,setError}){
    return(
        <div className="connection-box">
            <Collapse in={error}>
                <Alert severity="error" onClose={()=>setError(!error)}>
                    <AlertTitle>Connection Status</AlertTitle>
                    An Error Ocurred While Trying to Fetch Data
                </Alert> 
            </Collapse>
        </div>
    );
}

export default DashboardError;