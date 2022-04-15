import { Box } from "@mui/system";
const { Typography } = require("@mui/material");

function DonorBox(){
    return(
        <>
            <Typography paragraph>Great!, You Have Chose Your Role</Typography>
            <div className="donor">
                <Box
                    sx={{backgroundColor:"#d63031",width:"200px",height:"200px",borderRadius:"20px",cursor:"pointer",
                    "&:hover":{backgroundColor:"#e17055",transition:"all .4s ease"}
                    }}
                >
                    YOU ARE A DONOR
                </Box>
            </div>
        </>
    )
}

export default DonorBox;