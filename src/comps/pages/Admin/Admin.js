import axios from "axios";
import { useEffect,useState } from "react";
import AdminDate from "./AdminDate";
import AdminSelect from "./AdminSelect";
import UsersTable from "./UsersTable";
import AdminError from "../../AdminError";
import HlaTable from "./HlaTable";
import OrgansTable from "./OrgansTable";

function Admin({isAdminLogged,setIsAdminLogged}){

    const [admin,setAdmin] = useState({});
    const [data,setData] = useState("users");
    const [hla,setHla] = useState([]);
    const [hlaSort,setHlaSort] = useState("");
    const [users,setUsers] = useState([]);
    const [usersSort,setUsersSort] = useState("");
    const [organs,setOrgans] = useState([]);
    const [organsSort,setOrgansSort] = useState("");
    const [error,setError] = useState(false);
    const [errorMsg,setErrorMsg] = useState(false);

    
    useEffect(()=>{
        document.title = "Body Parts System - Admin"
        var isLogin = localStorage.getItem("isAdminLogged");
        setAdmin(JSON.parse(localStorage.getItem("admin")));
        if(isLogin){
            setIsAdminLogged(true);
        }else {
            setIsAdminLogged(false);
            window.location.href = "/admin-login";
        }

    },[isAdminLogged])

    useEffect(()=>{
        axios.get("http://localhost:4000/users").then(res=>{
            setError(false)
            setUsers(res.data);
        }).catch(err=>{
            setError(true);
            setErrorMsg("Connection Error");
        })
    },[error,users])

    useEffect(()=>{
        axios.get("http://localhost:4000/hla").then(res=>{
            setError(false);
            setHla(res.data);
        }).catch(err=>{
            setError(true);
            setErrorMsg("Connection Error");
        })
        
    },[hla,error])

    useEffect(()=>{
        axios.get("http://localhost:4000/organs").then(res=>{
            setError(false);
            setOrgans(res.data);
        }).catch(err=>{
            setError(true);
            setErrorMsg("Connection Error");
        })
        
    },[organs,error])
    
    

    return(
        <div className="admin-dashboard">
            <div className="admin-dashboard-data">
                <AdminDate username={admin.username} setIsAdminLogged={setIsAdminLogged}/>
                <AdminSelect data={data} setData={setData}/>
                {
                error ? <AdminError error={error} setError={setError} errorMsg={errorMsg}/> : 
                    data === "users" ? <UsersTable users={users} usersSort={usersSort}
                    setUsersSort={setUsersSort}
                    /> : 
                    data === "hla" ? <HlaTable hla={hla} hlaSort={hlaSort} setHlaSort={setHlaSort}/> : 
                    data === "organs" ? <OrgansTable organs={organs} organsSort={organsSort} setOrgansSort={setOrgansSort}/> : null

                }
            </div>
        </div>      
    );
}

export default Admin;