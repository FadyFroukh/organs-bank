import { Button, Input, InputLabel, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function DashboardForm({setShow,setError}){

    const [first,setFirst] = useState("");
    const [second,setSecond] = useState("");
    const [file,setFile] = useState([""],"");

    const handleForm = (e)=>{
        e.preventDefault();

        const data = new FormData();
        data.append("file",file);
        
        axios.post("http://localhost:4000/hla",{
            first,
            second,
            file:data.file,
            status:0,
            userId:JSON.parse(localStorage.getItem("user"))._id
        }).then(res=>{
            setShow(false);
        }).catch(err=>{
            setError(true);
        })
    }

    return(
        <div className="dashboard-form">
            <div className="header">
                <Typography variant="h4">Welcome for the First Time</Typography>
                <Typography paragraph>Please Fill the Following Form Concerning your HLA Results</Typography>
            </div>
            <form onSubmit={handleForm}>
                <div className="form-part">
                    <section>
                        <InputLabel htmlFor="first">HLA-B*</InputLabel>
                        <Input
                            name="first"
                            type="text"
                            required
                            placeholder="Example : 07:02"
                            value={first}
                            onChange={(e)=>setFirst(e.target.value)}
                        />
                    </section>
                </div>
                <div className="form-part">
                    <section>
                        <InputLabel htmlFor="second">HLA-B*</InputLabel>
                        <Input
                            name="second"
                            type="text"
                            required
                            placeholder="Example : 07:02"
                            value={second}
                            onChange={(e)=>setSecond(e.target.value)}
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
                            // value={file}
                            // onChange={(e)=>setFile(e.target.files[0])}
                        />
                    </section>
                </div>
                <div className="form-part">
                    <section>
                        <Button type="submit" variant="contained" size="large">Submit Data</Button>
                    </section>
                </div>
            </form>
        </div>
    );
}

export default DashboardForm;