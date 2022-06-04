import { Button, Container, Input, InputLabel,Alert, AlertTitle, Collapse } from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";
import "../../../scss/SignUp.css";
import Footer from "../../Footer";
import Header from "../Header";
import md5 from "md5";

function SignUp({click,setClick}){

    useEffect(()=>{
        document.title = "Human Organs System - Sign Up"
    },[])


    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phone,setPhone] = useState(0);
    const [address,setAddress] = useState("");
    const [email,setEmail] = useState("");
    const [sex,setSex] = useState("m");
    const [age,setAge] = useState(18);
    const [password,setPassword] = useState("");
    const [confPassword,setConfPassword] = useState("");
    const [id,setId] = useState();
    const [status] = useState(0);
    const [rule] = useState(0);

    const [error,setError] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");
    const [success,setSuccess] = useState(false);


    const handleForm = (e)=>{
        e.preventDefault();

        if (password !== confPassword){
            setError(!error);
            setErrorMsg("Passwords Don't Match")
        }
        else {
            
            axios.get("http://localhost:4000/users").then((res)=>{
                res.data.forEach(user=>{
                    if (email === user.email || id === user.id){
                        setError(!error);
                        setErrorMsg(`Account Already Exists With Email : ${user.email}`);
                    }
                })

            }).catch(err=>{
                setError(!error);
                setErrorMsg("Connection Error");
            })


            axios.post("http://localhost:4000/users",{
                firstName,
                lastName,
                password:md5(password),
                phone,
                address,
                email,
                age,
                id,
                sex,
                status,
                rule
            }).then(res=>{
                setSuccess(true);
            }).catch(err=>{
                setError(!error);
                setErrorMsg("Connection Error");
            })

          
        }
    
    }

    return( 
        <div className="sign-up-page">
        <Header click={click} setClick={setClick}/>
        <Container>
            <div className="sign-up">
                <h2 className="text-center">Register to the Parts Dontation System</h2>
                <form className="sign-up-form" onSubmit={handleForm}>
                    {
                        error ? 
                            <div className="error-box">
                                <Collapse in={error}>
                                <Alert severity="error" onClose={()=>setError(!error)}>
                                    <AlertTitle>Something Went Wrong</AlertTitle>
                                    {errorMsg}
                                </Alert> 
                                </Collapse>
                            </div> : null
                    }
                    {
                        success ? 
                        <div className="success-box">
                            <Collapse in={success}>
                            <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                Successfully Registered Go to — <strong><a href="/sign-in">Sign In Page</a></strong>
                            </Alert>
                            </Collapse>
                        </div> : null
                    }
                    <div className="form-part">
                        <section>
                            <InputLabel htmlFor="firstName">Your First Name</InputLabel>
                            <Input
                            required
                            name="firstName" 
                            placeholder="Enter First Name" 
                            type="text"
                            maxLength="20"
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                            />
                        </section>
                        <section>
                            <InputLabel htmlFor="lastName">Your Last Name</InputLabel>
                            <Input 
                            required
                            name="lastName" 
                            placeholder="Enter Last Name"
                            type="text"
                            maxLength="20"
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                            />
                        </section>
                    </div>
                    <div className="form-part">
                        <section>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input 
                            required
                            name="password"
                            type="password"
                            placeholder="Choose a Strong Password"
                            maxLength="30"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </section>
                        <section>
                            <InputLabel htmlFor="confPassword">Confirm Password</InputLabel>
                            <Input 
                            required
                            name="confPassword"
                            type="password"
                            placeholder="Confirm The Strong Password"
                            maxLength="30"
                            value={confPassword}
                            onChange={(e)=>setConfPassword(e.target.value)}
                            />
                        </section>
                    </div>
                    <div className="form-part">
                        <section>
                            <InputLabel htmlFor="phone">Phone Number</InputLabel>
                            <Input 
                            required
                            name="phone" 
                            placeholder="Enter Cellular Phone Number"
                            type="number"
                            maxLength="10"
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            />
                        </section>
                        <section>
                            <InputLabel htmlFor="address">Address</InputLabel>
                            <Input 
                            required
                            name="address" 
                            placeholder="Enter Full Address"
                            type="text"
                            maxLength="50"
                            value={address}
                            onChange={(e)=>setAddress(e.target.value)}
                            />
                        </section>
                    </div>
                    <div className="form-part">
                        <section>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input
                                required
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                maxLength="50"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </section>
                        <section>
                            <InputLabel htmlFor="age">Your Age</InputLabel>
                            <Input
                                required
                                name="age"
                                type="number"
                                placeholder="Enter Your Age"
                                max="100"
                                min="18"
                                value={age}
                                onChange={(e)=>setAge(e.target.value)}
                            />
                        </section>
                    </div>

                    <div className="form-part">
                        <section>
                                <InputLabel htmlFor="sex">Sex</InputLabel>
                                <select name="sex" value={sex} onChange={(e)=>setSex(e.target.value)} required>
                                    <option value="m">Male</option>
                                    <option value="f">Female</option>
                                </select>
                        </section>
                        <section>
                            <InputLabel htmlFor="idNum">ID Number</InputLabel>
                            <Input
                                required
                                name="idNum"
                                placeholder="Enter Personal ID Number"
                                type="number"
                                value={id}
                                onChange={(e)=>setId(e.target.value)}
                            />
                        </section>
                    </div>
                    <div className="form-part">
                        <Button variant="contained" size="large" type="submit">Sign Up</Button>
                    </div>
                </form>
                <p className="text-center tail">Already Registered ? <a href="/sign-in">Sign In</a> </p>
            </div>
        </Container>
        <Footer/>
        </div>
    );
}

export default SignUp