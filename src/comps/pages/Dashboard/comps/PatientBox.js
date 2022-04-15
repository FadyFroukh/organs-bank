import { Box } from "@mui/system";
const { Typography } = require("@mui/material");

function PatientBox(){
    return(
        <>
            <Typography paragraph>Great!, You Have Chose Your Role</Typography>
            <div className="patient">
                <Box
                    sx={{backgroundColor:"#0984e3",width:"200px",height:"200px",borderRadius:"20px",cursor:"pointer",
                    "&:hover":{backgroundColor:"#00cec9",transition:"all .4s ease"}
                    }}
                >
                    YOU ARE A PATIENT
                </Box>
            </div>
        </>
    )
}

export default PatientBox;