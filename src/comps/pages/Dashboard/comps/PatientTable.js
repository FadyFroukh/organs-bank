import { TableCell, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function PatientTable({hla,searchOrgans}){

    const [patientOrgans,setPatientOrgans] = useState([]);
    const [imgSrc,setImgSrc] = useState("");

    useEffect(()=>{
        setPatientOrgans(searchOrgans?.filter(organ=>organ.rule === 1));
    },[searchOrgans])


    return(
        patientOrgans.length === 0 ? <Typography paragraph className="text-center">No Available Data</Typography> :
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
                {
                    
                }
                <img src="images/kidney.png" alt="Organ Picture"/>
            </TableCell>
            <TableCell>
                {hla.first}
            </TableCell>
            <TableCell>
                {hla.second}
            </TableCell>
            <TableCell>
                
            </TableCell>
        </TableRow>
        ))
    );
}

export default PatientTable;