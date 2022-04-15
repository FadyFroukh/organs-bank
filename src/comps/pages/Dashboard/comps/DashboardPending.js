import { Alert, AlertTitle, Collapse, Typography } from "@mui/material";

function DashboardPending({pendingError,setPendingError}){
    return(
        <div className="pending-box">
            <Collapse in={pendingError}>
                <Alert severity="warning" onClose={()=>setPendingError(!pendingError)}>
                    <AlertTitle>Account Status</AlertTitle>
                    <Typography paragraph>Thanks for Providing the Required Data</Typography>
                    <Typography paragraph><b>Account Pending Approval</b></Typography>
                </Alert> 
            </Collapse>

        </div>
    );
}

export default DashboardPending;