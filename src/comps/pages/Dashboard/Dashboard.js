import { useEffect,useState } from "react";
import "../../../scss/Dashboard.css";
import SettingMenu from "./comps/SettingsMenu";
import DashboardData from "./comps/DashboardData";
import DashboardProfile from "./comps/DashboradProfile";
import axios from "axios";

function Dashboard({isLogged,setIsLogged}){

    const [showProfile,setShowProfile] = useState(false);
    const [user,setUser] = useState({});
    const [error,setError] = useState(false);

    const [hla,setHla] = useState({});
    const [status,setStatus] = useState(null); 
    const [pendingError,setPendingError] = useState(false);
    const [deniedError,setDeniedError] = useState(false);
    const [show,setShow] = useState(false);

    const [organ,setOrgan] = useState("");
    const [organName,setOrganName] = useState("");



    useEffect(()=>{
        document.title = "Human Organs System - Dashboard"
        var isLogin = localStorage.getItem("isLogged");
        if(isLogin){
            setIsLogged(true);
        }else {
            setIsLogged(false);
            window.location.href = "/";
        }
    },[isLogged])

    useEffect(()=>{
        axios.get("http://localhost:4000/users/" + JSON.parse(localStorage.getItem("user"))._id).then(res=>{
            setUser(res.data);
        }).catch(err=>{
            setError(true);
        })
    },[user])

    useEffect(()=>{
        
        axios.get("http://localhost:4000/hla/" + JSON.parse(localStorage.getItem("user"))._id).then(res=>{
            if(res.data === ""){
                setShow(true);
            }else {
            setHla(res.data);
            setStatus(res.data.status);
            if(res.data.status === 0){
                setPendingError(true);
            }else if (res.data.status === 1){
                setDeniedError(true);
            }
        }
        }).catch(err=>{
            setError(true);
        })
    },[status,show])

    
    useEffect(()=>{
        axios.get("http://localhost:4000/organs/" + JSON.parse(localStorage.getItem("user"))._id).then(res=>{
            if(res.data === ""){
                setOrganName("kidney");
            }else {
                setOrgan(res.data);
                setOrganName(res.data.organName);
            }
        }).catch(err=>{
            setError(true);
        })
    },[])


    return(
        <div className="dashboard">
            {/* <SettingMenu/> */}
            {
                showProfile ? <DashboardProfile setShowProfile={setShowProfile} user={user}/> : null
            }
            <DashboardData setIsLogged={setIsLogged} setShowProfile={setShowProfile}
                error={error} setError={setError} user={user} setUser={setUser}
                show={show} setShow={setShow} hla={hla} setHla={setHla} status={status} setStatus={setStatus}
                pendingError={pendingError} setPendingError={setPendingError} deniedError={deniedError} setDeniedError={setDeniedError}
                organName={organName} setOrganName={setOrganName} organ={organ} setOrgan={setOrgan}
            />
        </div>
    );
}

export default Dashboard;