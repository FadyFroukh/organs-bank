import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

function AdminSelect({data,setData}){
    return(
        <div className="admin-select">
            <Typography variant="h5">Choose What Data to Manage</Typography>
            <FormControl sx={{m:1,minWidth:200}}>
                <InputLabel variant="outlined">Choose Data</InputLabel>
                <Select className="choose-data" value={data} onChange={(e)=>setData(e.target.value)}>
                    <MenuItem value="users">Users Data</MenuItem>
                    <MenuItem value="hla">HLA Data</MenuItem>
                    <MenuItem value="organs">Organs Data</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default AdminSelect;