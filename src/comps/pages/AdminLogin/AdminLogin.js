import {Button, Input, InputLabel, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../../scss/Admin.css";
import AdminError from "../../AdminError";

function AdminLogin({isAdminLogged,setIsAdminLogged}){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");

    useEffect(()=>{
        document.title = "Body Parts System - Admin Login"
        var isLogin = localStorage.getItem("isAdminLogged");
        if(isLogin){
        setIsAdminLogged(true);
         window.location.href = "/admin"
        }else {
            setIsAdminLogged(false);
        }
})

    const handleForm = (e)=>{
        e.preventDefault();
        setError(false);
        axios.post("http://localhost:4000/admin-login",{
            username,
            password
        }).then(res=>{
            if(res.data.length > 0){
                setError(false);
                localStorage.setItem("admin",JSON.stringify(res.data[0]));
                localStorage.setItem("isAdminLogged",true);
                window.location.href = "/admin-login";
            }        
            else {
                setError(true);
                setErrorMsg("Wrong Cridentials or Account Doesn't Exist");
            }
        }).catch(err=>{
            setError(true);
            setErrorMsg("Connection Error");
        })
    }

    return(
        <div className="admin-form">
            <form onSubmit={handleForm} method="POST">
            {error ? <AdminError error={error} setError={setError} errorMsg={errorMsg}/> : null}
            <Typography variant="h5">Admin Panel</Typography>
                <div className="form-part">
                    <section>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input
                            name="username"
                            required
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                    </section>
                </div>
                <div className="form-part">
                    <section>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            name="password"
                            required
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                        />
                    </section>
                </div>
                <div className="form-part submit">
                    <Button variant="contained" size="large" type="submit">Login</Button>
                </div>
            </form>
        </div>
    );
}

export default AdminLogin;