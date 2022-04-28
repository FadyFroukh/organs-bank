import { Input, InputLabel, Typography,Button } from "@mui/material";
import axios from "axios";
import {useEffect, useState} from 'react';
import AdminError from "../../AdminError";
import AdminSuccess from "../../AdminSuccess";


function AddHla({setLoading}){
    const [userId,setUserId] = useState();
    const [first,setFirst] = useState();
    const [second,setSecond] = useState();
    const [status,setStatus] = useState();
    const [file,setFile] = useState(null);

    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");

    useEffect(()=>{

    },[error,success])


    const onFileChange = (e)=>{
        setFile(e.target.files[0]);
    }


    const onFileUpload = (e)=>{
        e.preventDefault();
        setLoading(true)
        const formData = new FormData();
        formData.append("file",file);
        console.log(file);
        
        axios.post("http://localhost:4000/hla",{
            first,
            second,
            file:formData,
            status,
            userId,
        }).then(res=>{
            setSuccess(true);
            setLoading(false);
        }).catch(err=>{
            setError(true);
            setErrorMsg("Connection Error");
        })           

    }

    return(
        <div className="add-hla add">
            {
                error ? <AdminError error={error} setError={setError} errorMsg={errorMsg}/> : null
            }
            {
                success ? <AdminSuccess success={success}/> : null
            }
                <form className="edit-hla-form">
                <Typography variant="h4" className="text-center">Add a Hla</Typography>
                <div className="form-part">
                        <section>
                            <InputLabel htmlFor="second">Enter UserId</InputLabel>
                            <Input
                                required
                                type="text"
                                name="second"
                                value={userId}
                                onChange={(e)=>setUserId(e.target.value)}
                            />
                        </section>
                    </div>
                    <div className="form-part">
                        <section>
                            <InputLabel htmlFor="first">Enter HLA-B*</InputLabel>
                            <Input
                                required
                                type="text"
                                name="first"
                                value={first}
                                onChange={(e)=>setFirst(e.target.value)}
                            />
                        </section>
                    </div>
                    <div className="form-part">
                        <section>
                            <InputLabel htmlFor="second">Enter HLA-B*</InputLabel>
                            <Input
                                required
                                type="text"
                                name="second"
                                value={second}
                                onChange={(e)=>setSecond(e.target.value)}
                            />
                        </section>
                    </div>
                    <div className="form-part">
                        <section>
                            <InputLabel htmlFor="status">Enter Status</InputLabel>
                            <Input
                                required
                                type="number"
                                name="second"
                                value={status}
                                onChange={(e)=>setStatus(e.target.value)}
                            />
                        </section>
                    </div>
                    <div className="form-part">
                    <section>
                        <InputLabel htmlFor="file">Provide a PDF File</InputLabel>
                        <input 
                            name="file"
                            type="file"
                            required
                            accept="application/pdf"
                            onChange={onFileChange}
                        />
                    </section>
                </div>
                    <div className="form-part button-part">
                        <Button variant="contained" size="large" type="submit" onClick={onFileUpload}>Add HLA</Button>
                    </div>
                </form>
            
        </div>
    );
}

export default AddHla;