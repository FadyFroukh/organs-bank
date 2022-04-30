import { useEffect } from "react";
import DeleteCell from "./DeleteCell";
import EditCell from "./EditCell";
const { TableContainer, Table, TableHead, TableRow, 
    TableCell, TableBody, Paper, FormControl, InputLabel, Select, MenuItem ,
} = require("@mui/material");


function OrgansTable({organs,organsSort,setOrgansSort,setError,setErrorMsg,organsFilter,setOrgansFilter,setShow,setInfo,setLoading}){


    useEffect(()=>{
        if(organsSort === 0){
            setOrgansFilter(organs.filter(organ=>organ.rule === 0));
        }else if (organsSort === 1){
            setOrgansFilter(organs.filter(organ=>organ.rule === 1));
        }else if (organsSort === 2){
            setOrgansFilter(organs.filter(organ=>organ.rule === 2));
        }
        else if (organsSort === 3){
            setOrgansFilter(organs.filter(organ=>organ.organName === "kidney"));
        }
        else if (organsSort === 4){
            setOrgansFilter(organs.filter(organ=>organ.organName === "lung"));
        }
        else if (organsSort === 5){
            setOrgansFilter(organs.filter(organ=>organ.organName === "intestine"));
        }
        else if (organsSort === 6){
            setOrgansFilter(organs.filter(organ=>organ.organName === "liver"));
        }
        else if (organsSort === 7){
            setOrgansFilter(organs.filter(organ=>organ.organName === "pancreas"));
        }
        else{
            setOrgansFilter(organs);
        }
    },[organsSort,organs])

    return(
        <>
        <div className="admin-filter">
            <FormControl sx={{m:1,minWidth:200}}>
                <InputLabel variant="outlined">Filter By</InputLabel>
                <Select className="sort-data" value={organsSort} onChange={(e)=>setOrgansSort(e.target.value)}>
                    <MenuItem value={0}>Rule : Not Known Yet</MenuItem>
                    <MenuItem value={1}>Rule : Patient</MenuItem>
                    <MenuItem value={2}>Status : Donor</MenuItem>
                    <MenuItem value={3}>Organ Name : Kidney</MenuItem>
                    <MenuItem value={4}>Organ Name : Lung</MenuItem>
                    <MenuItem value={5}>Organ Name : Intestine</MenuItem>
                    <MenuItem value={6}>Organ Name : Liver</MenuItem>
                    <MenuItem value={7}>Organ Name : Pancreas</MenuItem>
                </Select>
            </FormControl>
            <div className="admin-reset">
                <span onClick={()=>setOrgansSort("")}>Reset Filter</span>
            </div>
       </div>
       <div className="organs-table table">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Organ ID</TableCell>
                        <TableCell>User ID</TableCell>
                        <TableCell>Organ Name</TableCell>
                        <TableCell>User Rule</TableCell>
                        <TableCell>Delete</TableCell>
                        <TableCell>Edit</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                organs.length > 0? organsFilter.length > 0 ? 
                                organsFilter?.map(organ=>(
                                    <TableRow key={organ._id}>
                                        <TableCell>{organ._id}</TableCell>
                                        <TableCell>{organ.userId}</TableCell>
                                        <TableCell>{organ.organName}</TableCell>
                                        <TableCell>
                                            {organ.rule === 0 ? "Not Known Yet" : organ.rule === 1 ? "Patient" : organ.rule === 2 ? "Donor" : null} 
                                        </TableCell>
                                        <DeleteCell endPoint="organs" id={organ._id} setError={setError} 
                                        setErrorMsg={setErrorMsg} setItemsFilter={setOrgansFilter} items={organs}
                                        setLoading={setLoading}
                                        />
                                        <EditCell item={organ} setShow={setShow} setInfo={setInfo}/>
                                    </TableRow>
                                )) : <TableRow><TableCell>No Data</TableCell></TableRow> : 
                                <TableRow><TableCell>No Data</TableCell></TableRow> 
                            }
                        </TableBody>
                    </Table>
                </TableContainer>    
            </div>    
       </>
    );
}

export default OrgansTable;