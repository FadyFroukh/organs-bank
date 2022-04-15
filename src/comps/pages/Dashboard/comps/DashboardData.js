import axios from "axios";
import { useEffect, useState } from "react";
import DashboardDate from "../comps/DashboardDate"
import DashboardAccepted from "./DashboardAccepted";
import DashboardDenied from "./DashboardDenied";
import DashboardError from "./DashboardError";
import DashboardForm from "./DashboardForm";
import DashboardPending from "./DashboardPending";
function DashboardData({
    setIsLogged,setShowProfile,error,setError,user,setUser,show,setShow,hla,setHla,status,setStatus,
    pendingError,setPendingError,deniedError,setDeniedError,organName,setOrganName,organ,setOrgan
}){

    const [organs,setOrgans] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:4000/organs").then(res=>{
            setOrgans(res.data);
        }).catch(err=>{
            setError(true);
        })
    
    },[])

    return(
       <div className="dashboard-data">
           <DashboardDate username={user.firstName} setIsLogged={setIsLogged} setShowProfile={setShowProfile}/>
            {
                error ? <DashboardError error={error} setError={setError}/> : show ? 
                <DashboardForm setShow={setShow} setError={setError}/> : 
                status === 0 ? <DashboardPending pendingError={pendingError} setPendingError={setPendingError}/> :
                status === 1 ? <DashboardDenied deniedError={deniedError} setDeniedError={setDeniedError}/> : 
                status === 2 ? <DashboardAccepted user={user} setError={setError} 
                organName={organName} setOrganName={setOrganName} organ={organ} setOrgan={setOrgan} 
                organs={organs} setOrgans={setOrgans} hla={hla}
                /> : null
            }
       </div>
    );
}

export default DashboardData;