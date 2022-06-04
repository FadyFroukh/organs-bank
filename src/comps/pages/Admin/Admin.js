import axios from "axios";
import { useEffect,useState } from "react";
import AdminDate from "./AdminDate";
import AdminSelect from "./AdminSelect";
import UsersTable from "./UsersTable";
import AdminError from "../../AdminError";
import HlaTable from "./HlaTable";
import OrgansTable from "./OrgansTable";
import AdminEditUser from "./AdminEdit";
import AdminEditHla from "./AdminEditHla";
import AdminEditOrgan from "./AdminEditOrgan";
import AddUser from "./AddUser";
import AddHla from "./AddHla";
import AddOrgan from "./AddOrgan";
import Loading from "./Loading";
import QuestionsTable from "./QuestionsTable";

function Admin({isAdminLogged,setIsAdminLogged}){

    const [info,setInfo] = useState({});

    const [organsFilter,setOrgansFilter] = useState([]);
    const [usersFilter,setUsersFilter] = useState([]);
    const [hlaFilter,setHlaFilter] = useState();
    const [questionsFilter , setQuestionsFilter] = useState();

    const [admin,setAdmin] = useState({});

    const [hla,setHla] = useState([]);
    const [hlaSort,setHlaSort] = useState("");

    const [users,setUsers] = useState([]);
    const [usersSort,setUsersSort] = useState("");

    const [organs,setOrgans] = useState([]);
    const [organsSort,setOrgansSort] = useState("");

    const [questions,setQuestions] = useState([]);
    const [questionsSort,setQuestionsSort] = useState("");

    const [error,setError] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");

    const [showUserEdit,setShowUserEdit] = useState(false);
    const [showHlaEdit,setShowHlaEdit] = useState(false);
    const [showOrganEdit,setShowOrganEdit] = useState(false);

    const [loading,setLoading] = useState(false);
    const [data,setData] = useState("users");

    
    useEffect(()=>{
        document.title = "Human Organs System - Admin"
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
            setUsersFilter(res.data);
        }).catch(err=>{
            setError(true);
            setErrorMsg("Connection Error");
        })
    },[error,users,usersFilter])

    useEffect(()=>{
        axios.get("http://localhost:4000/hla").then(res=>{
            setError(false);
            setHla(res.data);
            setHlaFilter(res.data)
        }).catch(err=>{
            setError(true);
            setErrorMsg("Connection Error");
        })
        
    },[hla,error,hlaFilter])

    useEffect(()=>{
        axios.get("http://localhost:4000/organs").then(res=>{
            setError(false);
            setOrgans(res.data);
            setOrgansFilter(res.data);
        }).catch(err=>{
            setError(true);
            setErrorMsg("Connection Error");
        })
        
    },[organs,error,organsFilter])

    useEffect(()=>{
        axios.get("http://localhost:4000/question").then(res=>{
            setError(false);
            setQuestions(res.data);
            setQuestionsFilter(res.data);
        }).catch(err=>{
            setError(true);
            setErrorMsg("Connection Error");
        })
    },[error,questions,questionsFilter])
    
    return(
        <div className="admin-dashboard">
            <div className="admin-dashboard-data">
                <AdminDate username={admin.username} setIsAdminLogged={setIsAdminLogged}/>
                <AdminSelect data={data} setData={setData}/>
                {
                error ? <AdminError error={error} setError={setError} errorMsg={errorMsg}/> : 
                    data === "users" ? <UsersTable users={users} usersSort={usersSort}
                    setUsersSort={setUsersSort} setError={setError} setErrorMsg={setErrorMsg}
                    usersFilter={usersFilter} setUsersFilter={setUsersFilter} setShow={setShowUserEdit}
                    setInfo={setInfo} setLoading={setLoading}
                    /> : 
                    data === "hla" ? <HlaTable hla={hla} hlaSort={hlaSort} setHlaSort={setHlaSort}
                        setError={setError} setErrorMsg={setErrorMsg} hlaFilter={hlaFilter} setHlaFilter={setHlaFilter}
                        setShow={setShowHlaEdit} setInfo={setInfo} setLoading={setLoading}
                    /> : 

                    data === "organs" ? <OrgansTable organs={organs} organsSort={organsSort} setOrgansSort={setOrgansSort}
                        setError={setError} setErrorMsg={setErrorMsg} organsFilter={organsFilter} setOrgansFilter={setOrgansFilter}
                        setShow={setShowOrganEdit} setInfo={setInfo} setLoading={setLoading}
                    /> : data === "questions" ? <QuestionsTable questions={questions} questionsSort={questionsSort} 
                    setQuestionsSort={setQuestionsSort} setError={setError} setErrorMsg={setErrorMsg} questionsFilter={questionsFilter}
                    setQuestionsFilter={setQuestionsFilter} setLoading={setLoading}
                    
                    /> 
                    : null
                }

                {
                    error ? <AdminError/> : data === "users" ? <AddUser setLoading={setLoading}/> :
                     data === "hla" ? <AddHla setLoading={setLoading}/> : 
                     data === "organs" ? <AddOrgan setLoading={setLoading}/> : null
                }

            </div>
            {
                showUserEdit ? <AdminEditUser setShow={setShowUserEdit} info={info} setLoading={setLoading} /> : null
            }
            {
                showHlaEdit ? <AdminEditHla setShow={setShowHlaEdit} info={info} setLoading={setLoading}/> : null
            }
            {
                showOrganEdit ? <AdminEditOrgan setShow={setShowOrganEdit} info={info} setLoading={setLoading}/> : null
            }

           {
               loading ? <Loading/> : null
           }
            
        </div>      
    );
}

export default Admin;