import { InputLabel,Input,Button, Typography } from "@mui/material";
import axios from "axios";
import md5 from "md5";
import {useEffect, useState} from 'react';
import AdminError from "../../AdminError";
import AdminSuccess from "../../AdminSuccess";

function AddUser({setLoading}){
    
    
    const [_id,setID] = useState();
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [phone,setPhone] = useState();
    const [address,setAddress] = useState();
    const [email,setEmail] = useState();
    const [sex,setSex] = useState();
    const [age,setAge] = useState();
    const [password,setPassword] = useState();
    const [confPassword,setConfPassword] = useState();
    const [id,setId] = useState();
    const [status,setStatus] = useState();
    const [rule,setRule] = useState();
    const [error,setError] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");
    const [success,setSuccess] = useState(false);


    useEffect(()=>{

    },[error,success])
    
    const handleForm = (e)=>{
        e.preventDefault();

        if (password !== confPassword){
            setError(true);
            setErrorMsg("Passwords Don't Match")
        }
        else {
            setLoading(true);

            axios.get("http://localhost:4000/users").then((res)=>{
                res.data.forEach(user=>{
                    if (email === user.email || id === user.id){
                        setError(true);
                        setErrorMsg(`Account Already Exists With Email : ${user.email}`);
                    }  
                })

                if(error === false){

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
                        setLoading(false);
                    }).catch(err=>{
                        setError(true);
                        setErrorMsg("Connection Error");
                    })
        
                }

            }).catch(err=>{
                setError(true);
                setErrorMsg("Connection Error");
            })
            
        }
    
    }
    

    return(
        <div className="add-user add">
            {
                error ? <AdminError error={error} setError={setError} errorMsg={errorMsg}/> : null
            }
            {
                success ? <AdminSuccess success={success}/> : null
            }
            <form className="add-user-form" onSubmit={handleForm}>
                <Typography variant="h4" className="text-center">Add a User</Typography>
                    <div className="form-part">
                        <section>
                            <InputLabel htmlFor="firstName">Enter First Name</InputLabel>
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
                            <InputLabel htmlFor="lastName">Enter Last Name</InputLabel>
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
                            <InputLabel htmlFor="age">Enter Age</InputLabel>
                            <Input
                                required
                                name="age"
                                type="number"
                                placeholder="Enter Age"
                                max="100"
                                min="18"
                                value={age}
                                onChange={(e)=>setAge(e.target.value)}
                            />
                        </section>
                    </div>
                    <div className="form-part">
                        <section>
                            <InputLabel htmlFor="status">Enter Status</InputLabel>
                            <Input
                                required
                                name="status"
                                type="number"
                                placeholder="Enter User Status"
                                maxLength="1"
                                value={status}
                                onChange={(e)=>setStatus(e.target.value)}
                            />
                        </section>
                        <section>
                            <InputLabel htmlFor="rule">Enter Rule</InputLabel>
                            <Input
                                required
                                name="rule"
                                type="number"
                                placeholder="Enter Age"
                                maxLength="1"
                                value={rule}
                                onChange={(e)=>setRule(e.target.value)}
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
                    <div className="form-part button-part">
                        <Button variant="contained" size="large" type="submit">Add User</Button>
                    </div>
                </form>
             </div>
    );
}

export default AddUser;