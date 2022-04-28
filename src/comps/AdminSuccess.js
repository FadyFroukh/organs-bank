import { Alert, AlertTitle, Collapse } from "@mui/material";

function AdminSuccess({success}){
    return(
        <div className="success-box">
            <Collapse in={success}>
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Successfully Added Data
            </Alert>
            </Collapse>
        </div> 
    );
}

export default AdminSuccess;