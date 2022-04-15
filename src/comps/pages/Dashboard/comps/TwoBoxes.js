import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

function TwoBoxes({id,setError}){
    
    const handleRule = (e)=>{
       axios.put("http://localhost:4000/users",{
            id,
            rule:e.target.textContent.endsWith("T") ? Number(1) : Number(2)
       }).then(res=>{
            console.log(res.data);
       }).catch(err=>{
            setError(true);
       })
    }
    

    return(
        <>        
        <Typography paragraph>You Haven't Chose Your Role Yet!</Typography>
        <div className="boxes">
            <div className="donor" onClick={handleRule}>
                <Box
                    sx={{backgroundColor:"#d63031",width:"200px",height:"200px",borderRadius:"20px",cursor:"pointer",
                    "&:hover":{backgroundColor:"#e17055",transition:"all .4s ease"}
                    }}
                >
                    I AM A DONOR
                </Box>
            </div>
            <div className="patient" onClick={handleRule}>
                <Box
                    sx={{backgroundColor:"#0984e3",width:"200px",height:"200px",borderRadius:"20px",cursor:"pointer",
                    "&:hover":{backgroundColor:"#00cec9",transition:"all .4s ease"}
                    }}
                >
                    I AM A PATIENT
                </Box>
            </div>
        </div>
        </>
    )
}

export default TwoBoxes;