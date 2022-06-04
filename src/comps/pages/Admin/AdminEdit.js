import { InputLabel, Input, Typography, Button} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"; 
import EditHeader from "./EditHeader";

function AdminEditUser({setShow,info,setLoading}){
    const [_id,setID] = useState(info._id);
    const [firstName,setFirstName] = useState(info.firstName);
    const [lastName,setLastName] = useState(info.lastName);
    const [phone,setPhone] = useState(info.phone);
    const [address,setAddress] = useState(info.address);
    const [email,setEmail] = useState(info.email);
    const [sex,setSex] = useState(info.sex);
    const [age,setAge] = useState(info.age);
    const [id,setId] = useState(info.id);
    const [status,setStatus] = useState(info.status);
    const [rule,setRule] = useState(info.rule);

    useEffect(()=>{

    },[])

    const handleForm = (e)=>{
        e.preventDefault();
        setLoading(true);
        axios.put("http://localhost:4000/users-data",{
            _id,
            firstName,
            lastName,
            phone,
            address,
            email,
            sex,
            age,
            id,
            status:Number(status),
            rule:Number(rule),
        }).then(res=>{
            setLoading(false);
            setShow(false);
        }).catch(err=>{
            setLoading(false);
            setShow(false);

        })
        
    }

    return(
        <div className="admin-edit-user menu">
            <EditHeader setShow={setShow}/>
            <div className="admin-edit-menu item">
            <form className="user-edit-form" onSubmit={handleForm}>
                <Typography variant="h5">Changing Data for <b>{info.firstName} {info.lastName}</b></Typography>
                
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
                        <Button variant="contained" size="large" type="submit">Change Data</Button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default AdminEditUser;