import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Typography } from '@mui/material';

function EditHeader({setShow}){
    return(
        <div className="edit-header">
            <Typography paragraph>Editing Data</Typography>
            <div className="go-back" onClick={()=>setShow(false)}>
                <Typography>Go Back</Typography>
                <ArrowRightAltIcon sx={{marginLeft:1,cursor:"pointer"}}/>
            </div>
        </div>
    );
}

export default EditHeader;