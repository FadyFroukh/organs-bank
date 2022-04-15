import { useState } from "react";
import AdminDropDown from "./AdminDropDown";


function AdminDate({username,setIsAdminLogged}){
    const [date] = useState(new Date());

    return(
        <div className="admin-date">
            <div className="date">
                Today , {date.toDateString()}
            </div>
            <div className="admin-name">
                Welcome , {username}
                <AdminDropDown setIsAdminLogged={setIsAdminLogged}/>
            </div>
        </div>
    );
}

export default AdminDate;