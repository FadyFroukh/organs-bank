import Container from "../../Container";
import Header from "../Header";
import "../../../scss/SignIn.css";
import { InputLabel,Input, Button,Collapse,Alert,AlertTitle } from "@mui/material";
import { useState,useEffect } from "react";
import axios from "axios";
import Footer from "../../Footer";
import md5 from "md5";
function SignIn({click,setClick,isLogged,setIsLogged}){


    useEffect(()=>{
        document.title = "Human Organs System - Sign In"
        var isLogin = localStorage.getItem("isLogged");
        if(isLogin){
         setIsLogged(true);
         window.location.href = "/dashboard"
        }else {
         setIsLogged(false);
        }
})
    const [email,setEmail] = useState("");
    const [id,setId] = useState(0);
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");
    const [status,setStatus] = useState(0);
    const [pendingError,setPendingError] = useState(false);
    const [statusMsg,setStatusMsg] = useState("");
    const [deniedError,setDeniedError] = useState(false);


    const handleForm = (e)=>{
        e.preventDefault();
        axios.get("http://localhost:4000/login",{
            params:{
                email
            }
        }).then(res=>{
            if(res.data.length > 0){
                setError(false);
                setStatus(res.data[0].status);
                
                if (md5(password) == res.data[0].password){
                    if(res.data[0].status === 0){
                        setPendingError(true);
                        setStatusMsg("Account Pending Approval");
                    }
                    else if(res.data[0].status === 1) {
                        setDeniedError(true);
                        setErrorMsg("Account Denied");
                    }
                    else {
                        localStorage.setItem("user", JSON.stringify(res.data[0]));
                    }
                }
                else {
                    setError(true);
                    setPendingError(false);
                    setDeniedError(false);
                    setErrorMsg("Wrong Cridentials or Account Doesn't Exist");
                }
               
            }else {
                setError(true);
                setPendingError(false);
                setDeniedError(false);
                setErrorMsg("Wrong Cridentials or Account Doesn't Exist");
            }
        }).catch(err=>{
            setError(true);
            setErrorMsg("Connection Error!");
        })
        
    }

    return(
        <>
        <div className="sign-in-page">
            <Header click={click} setClick={setClick}/>
            <Container>
                <div className="sign-in">
                    <h2 className="text-center">Sign In to the Parts-Bank System</h2>
                    <form className="sign-in-form" onSubmit={handleForm} method="POST">
                    {
                        error ? <div className="error-box">
                                <Collapse in={error}>
                                    <Alert severity="error" onClose={()=>setError(!error)}>
                                        <AlertTitle>Something Went Wrong</AlertTitle>
                                        {errorMsg}
                                    </Alert> 
                                </Collapse>
                                </div>
                            : null
                    }
                    {
                        status === 2 ? localStorage.getItem("user") ? localStorage.setItem("isLogged",true)  : null : null
                    }
                    {
                        status === 1 ? <div className="error-box">
                                        <Collapse in={deniedError}>
                                            <Alert severity="error" onClose={()=>setDeniedError(!deniedError)}>
                                                <AlertTitle>Something Went Wrong</AlertTitle>
                                                {errorMsg}
                                            </Alert> 
                                        </Collapse>
                                        </div> : null
                    }
                    {
                        status === 0 ? <div className="status-box">
                            <Collapse in={pendingError}>
                            <Alert severity="warning" onClose={()=>setPendingError(!pendingError)}>
                                <AlertTitle>Account Status</AlertTitle>
                                {statusMsg}
                            </Alert> 
                            </Collapse>
                        </div> :null
                    }
                        <div className="form-part">
                            <section>
                                <InputLabel htmlFor="email">Your Email Address</InputLabel>
                                <Input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="Type Email Here"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </section>
                        </div>
                        <div className="form-part">
                            <section>
                                <InputLabel htmlFor="password">Your Account Password</InputLabel>
                                <Input
                                    required
                                    name="password"
                                    type="password"
                                    placeholder="Type Password Here"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </section>
                        </div>
                        <div className="form-part">
                            <section>
                                <InputLabel htmlFor="id">Your Personal ID</InputLabel>
                                <Input
                                    required
                                    name="id"
                                    type="number"
                                    placeholder="Type ID Here"
                                    value={id}
                                    onChange={(e)=>setId(e.target.value)}
                                />
                            </section>
                        </div>
                        <div className="form-part">
                            <Button variant="contained" size="large" type="submit">Sign In</Button>
                        </div>
                    </form>
                    <div className="tail text-center">
                        <p>Having a problem ? <a href="#">Recover Account</a></p>
                        <p>Not Registered ?  <a href="/sign-up">Sign Up</a></p>
                    </div>
                </div>
            </Container>
        </div>
        <Footer/>

        </>
    );
}

export default SignIn