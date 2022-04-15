const { Collapse, Alert, AlertTitle } = require("@mui/material");

function AdminError({error,setError,errorMsg}){
    return(
        <div className="error-box">
            <Collapse in={error}>
                <Alert severity="error" onClose={()=>setError(!error)}>
                    <AlertTitle>Something Went Wrong</AlertTitle>
                    {errorMsg}
                </Alert> 
            </Collapse>
        </div>
    );
}

export default AdminError;