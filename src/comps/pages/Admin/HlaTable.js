import { Delete, Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
const { TableContainer, Table, TableHead, TableRow, 
    TableCell, TableBody, Paper, FormControl, InputLabel, Select, MenuItem 
} = require("@mui/material");

function HlaTable({hla,hlaSort,setHlaSort}){

    const [hlaFilter,setHlaFilter] = useState(hla);

    useEffect(()=>{
        if(hlaSort === 0){
            setHlaFilter(hla.filter(item=>item.status === 0));
        }else if (hlaSort === 1){
            setHlaFilter(hla.filter(item=>item.status === 1));
        }else if(hlaSort){
            setHlaFilter(hla.filter(item=>item.status === 2));
        }else{
            setHlaFilter(hla);
        }
    },[hlaSort])


    return(
        <>
         <div className="admin-filter">
        <FormControl sx={{m:1,minWidth:200}}>
            <InputLabel variant="outlined">Filter By</InputLabel>
            <Select className="sort-data" value={hlaSort} onChange={(e)=>setHlaSort(e.target.value)}>
                <MenuItem value={0}>Status : Pending</MenuItem>
                <MenuItem value={1}>Status : Denied</MenuItem>
                <MenuItem value={2}>Status : Accepted</MenuItem>
            </Select>
        </FormControl>
        <div className="admin-reset">
            <span onClick={()=>setHlaSort("")}>Reset Filter</span>
        </div>
        </div>
        <div className="hla-table table">
             <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                           <TableCell>HLA ID</TableCell>
                           <TableCell>User ID</TableCell>
                           <TableCell>HLA-B*</TableCell>
                           <TableCell>HLA-B*</TableCell>
                           <TableCell>Status</TableCell>
                           <TableCell>Delete</TableCell>
                           <TableCell>Edit</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            hla.length > 0 ? hlaFilter.length > 0 ? hlaFilter?.map(item=>(
                                <TableRow key={item._id}>
                                    <TableCell>{item._id}</TableCell>
                                    <TableCell>{item.userId}</TableCell>
                                    <TableCell>{item.first}</TableCell>
                                    <TableCell>{item.second}</TableCell>
                                    <TableCell>
                                        {item.status === 0 ? "Pending" : item.status === 1 ? "Denied" : item.status === 2 ? "Accepted" : null} 
                                    </TableCell>
                                    <TableCell><Delete sx={{color:"#EA2027",cursor:"pointer"}}/></TableCell>
                                    <TableCell><Edit sx={{color:"#05c46b",cursor:"pointer"}}/></TableCell>
                                </TableRow>
                            )) : <TableRow><TableCell>No Data</TableCell></TableRow> : 
                            <TableRow><TableCell>Loading Table</TableCell></TableRow> 
                        }
                        </TableBody>
                    </Table>
            </TableContainer>  
        </div>
        </>
    );
}

export default HlaTable;