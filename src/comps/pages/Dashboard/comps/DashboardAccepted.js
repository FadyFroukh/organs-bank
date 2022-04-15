import { Box, Typography } from "@mui/material";
import TwoBoxes from "./TwoBoxes";
import PatientBox from "./PatientBox";
import DonorBox from "./DonorBox"
import OrganChoosen from "./OrganChoosen";
import OrganPending from "./OrganPending";

function DashboardAccepted({user,setError,organName,setOrganName,organ,setOrgan,organs,setOrgans,hla}){

    return(
        <div className="dashboard-accepted">
            <div className="box">
                <div className="welcome-box">
                    <Typography variant="h4">Welcome to the Dashboard</Typography>
                    <Typography variant="h6">Here You Can Search Up Matches</Typography>
                    
                    {
                        user.rule === 0 ? <TwoBoxes id={user._id} setError={setError}/> : null
                    }
                    {
                        user.rule === 1 ? <PatientBox/> : null
                    }
                    {
                        user.rule === 2 ? <DonorBox/> : null
                    }
                </div>
                <div className="personal-data">
                    <Typography paragraph>Account ID : {user._id}</Typography>
                    <Typography paragraph>Name : {user.firstName}</Typography>
                    <Typography paragraph>Age : {user.age}</Typography>
                    <Typography paragraph>Address : {user.address}</Typography>
                </div>
            </div>
            {
                user.rule === 1 ? organ === "" ? <OrganPending organName={organName}  setOrgan={setOrgan}
                setOrganName={setOrganName} setError={setError} rule={user.rule}/> : 
                <OrganChoosen organName={organName} organs={organs} setOrganName={setOrganName} id={user._id} rule={user.rule}
                    hla={hla} organ={organ} setOrgans={setOrgans}
                /> : null
            }
             {
                user.rule === 2 ? organ === "" ? <OrganPending organName={organName}  setOrgan={setOrgan}
                setOrganName={setOrganName} setError={setError} rule={user.rule}/> : 
                <OrganChoosen organName={organName} setOrganName={setOrganName} organs={organs} id={user._id} rule={user.rule}
                    hla={hla} organ={organ} setOrgans={setOrgans}
                /> : null
            }
        </div>
    );
}

export default DashboardAccepted;