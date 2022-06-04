import { TableContainer, Paper, Typography, TableHead, 
TableCell,Table,TableRow, TableBody, Button

} from "@mui/material";
import { useState } from "react";
import DonorTable from "./DonorTable";
import PatientTable from "./PatientTable";
import SelectOrgan from "./SelectOrgan";

function OrganChoosen({organName,setOrganName,organs,rule,hla,organ,setOrgans}){

   const [search,setSearch] = useState(false);
   const [searchOrgans,setSearchOrgans] = useState(organs);

   const handleSearch = ()=>{
       setSearch(true);
       setSearchOrgans(organs.filter(organ=>organ.organName === organName));
   }

    return(
        <div className="organ-choosen">
                <Typography variant="h5">
                    {
                        rule === 1 ? "The Organ You Want to Receive is : " + organ?.organName?.toUpperCase() :
                         "The Organ You Want to Give is : " + organ?.organName?.toUpperCase()
                    }
                </Typography>
            <div className="organs-search">
                <Typography paragraph>
                   {
                       rule === 1 ? "This Table Describes a List of Registerd Donors" : 
                       "This Table Describes a List of Registerd Patients"
                   }
                </Typography>
                <div>
                    <SelectOrgan organName={organName} setOrganName={setOrganName}/>
                </div>
                <Button variant="contained" size="large" type="submit" onClick={handleSearch}>Advanced Search</Button>
            </div>
            <div className="organs-table">
                <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                           <TableCell>Organ ID</TableCell>
                           <TableCell>Organ Name</TableCell>
                           <TableCell>User Type</TableCell>
                           <TableCell>HLA-A*</TableCell>
                           <TableCell>HLA-A*</TableCell>
                           <TableCell>HLA-B*</TableCell>
                           <TableCell>HLA-B*</TableCell>
                           <TableCell>HLA-DRB1*</TableCell>
                           <TableCell>HLA-DRB1*</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                               search ?  rule === 2 ? <DonorTable searchOrgans={searchOrgans} hla={hla}/> :
                               <PatientTable searchOrgans={searchOrgans} hla={hla}/> :  
                               rule === 1  ? <DonorTable searchOrgans={searchOrgans} hla={hla}/> :
                               <PatientTable searchOrgans={searchOrgans} hla={hla}/>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
}

export default OrganChoosen;