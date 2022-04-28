import { Edit } from "@mui/icons-material";
import { TableCell } from "@mui/material";

function EditCell({setShow,setInfo,item}){

    const handleEdit = ()=>{
        setShow(true);
        setInfo(item);
    }

    return(
        <TableCell>
            <Edit sx={{color:"#05c46b",cursor:"pointer"}} onClick={handleEdit}/>
        </TableCell>
    );
}

export default EditCell;