import { useEffect, useState } from "react";

const { TableRow, TableCell } = require("@mui/material");

function DonorTable({hla,searchOrgans}){

    const [donorOrgans,setDonorOrgans] = useState([]);

    useEffect(()=>{
        setDonorOrgans(searchOrgans?.filter(organ=>organ.rule === 2));
    },[searchOrgans])

    return(
       donorOrgans.length === 0 ? <TableRow><TableCell>No Data</TableCell></TableRow> : 
        donorOrgans?.map((organ)=>(
            <TableRow key={organ._id}>
            <TableCell>{organ._id}</TableCell>
            <TableCell>
                {organ.organName === "kidney" ? "One Kidney" : 
                organ.organName === "lung" ?   "One Lung" : 
                organ.organName === "liver" ? "Part of the Liver" : 
                organ.organName === "pancreas" ? "Part of The Pancreas":
                organ.organName === "intestine" ? "Part of The Intestine" : null
                }
            </TableCell>
            <TableCell>
                Donor
            </TableCell>
            <TableCell>
                {hla.first}
            </TableCell>
            <TableCell>
                {hla.second}
            </TableCell>
            <TableCell>
                {hla.third}
            </TableCell>
            <TableCell>
                {hla.fourth}
            </TableCell>
            <TableCell>
                {hla.fifth}
            </TableCell>
            <TableCell>
                {hla.sixth}
            </TableCell>
        </TableRow>
        ))
    );
}

export default DonorTable;

