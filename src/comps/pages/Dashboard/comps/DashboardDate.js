import {useState } from "react";
import DropDownMenu from './DropDownMenu';
const { Typography } = require("@mui/material");

function DashboardDate({username,setIsLogged,setShowProfile}){

    const [date] = useState(new Date());

    return(
        <div className="date-name">
            <div className="date">
            <Typography paragraph>Today , {date.toDateString()}</Typography>
            </div>
            <div className="name">
            <Typography>Welcome , {username}</Typography>
            <DropDownMenu setIsLogged={setIsLogged} setShowProfile={setShowProfile}/>
            </div>
            
        </div>
    );
}

export default DashboardDate;