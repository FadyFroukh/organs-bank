import { TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";

function PatientTable({hla,searchOrgans}){

    const [patientOrgans,setPatientOrgans] = useState([]);
    const [imgSrc,setImgSrc] = useState("");

    useEffect(()=>{
        setPatientOrgans(searchOrgans?.filter(organ=>organ.rule === 1));
    },[searchOrgans])


    return(
        patientOrgans.length === 0 ? <TableRow><TableCell>No Data</TableCell></TableRow> :
        patientOrgans?.map((organ)=>(
            <TableRow key={organ._id}>
            <TableCell>{organ._id}</TableCell>
            <TableCell>
                {
                 organ.organName === "kidney" ? "One Kidney" : 
                 organ.organName === "lung" ?   "One Lung" : 
                 organ.organName === "liver" ? "Part of the Liver" : 
                 organ.organName === "pancreas" ? "Part of The Pancreas":
                 organ.organName === "intestine" ? "Part of The Intestine" : null
                }
            </TableCell>
            <TableCell>
                Patient
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
            <TableCell>
                
            </TableCell>
        </TableRow>
        ))
    );
}

export default PatientTable;