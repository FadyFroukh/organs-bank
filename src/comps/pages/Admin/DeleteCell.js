import { Delete } from "@mui/icons-material";
import { TableCell } from "@mui/material";
import axios from "axios";

function DeleteCell({endPoint,id,setError,setErrorMsg,setItemsFilter,items,setLoading}){


    const handleDelete = ()=>{
        setLoading(true);
        axios.delete(`http://localhost:4000/${endPoint}/` + id).then(res=>{
            setItemsFilter(items);
            setLoading(false);
        }).catch(err=>{
            setError(true);
            setErrorMsg("Connection Error");
        })
    }


    return(
        <TableCell>
            <Delete sx={{color:"#EA2027",cursor:"pointer"}} onClick={handleDelete}/>
        </TableCell>
    );
}

export default DeleteCell;