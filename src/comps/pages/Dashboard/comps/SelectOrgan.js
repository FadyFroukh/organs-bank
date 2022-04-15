import {Select, InputLabel,FormControl,MenuItem} from "@mui/material"

function SelectOrgan({setOrganName,organName}){

    return(
        <FormControl sx={{m:1,minWidth:200}}>
            <InputLabel variant="outlined">Choose Organ</InputLabel>
            <Select className="choose-organ" value={organName} onChange={(e)=>setOrganName(e.target.value)}>
                <MenuItem value="kidney">One Kidney</MenuItem>
                <MenuItem value="lung">One Lung</MenuItem>
                <MenuItem value="liver">Part of The Liver</MenuItem>
                <MenuItem value="pancreas">Part of The Pancreas</MenuItem>
                <MenuItem value="intestine">Part of The Intestine</MenuItem>
            </Select>
        </FormControl>
    );
}

export default SelectOrgan;