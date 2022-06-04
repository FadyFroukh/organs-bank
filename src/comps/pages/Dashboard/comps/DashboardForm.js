import { Button, Input, InputLabel, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function DashboardForm({setShow,setError,userId}){

    const [first,setFirst] = useState("");
    const [second,setSecond] = useState("");
    const [third,setThird] = useState("");
    const [fourth,setFourth] = useState("");
    const [fifth,setFifth] = useState("");
    const [sixth,setSixth] = useState("");
    const [file,setFile] = useState(null);

    const onFileChange = (e)=>{
        setFile(e.target.files[0]);
        console.log(file);
    }


    const onFileUpload = (e)=>{
        if (first === "" || second === "" || file === null || third=="" || fourth==""){
            alert("You Got Empty Fields!")
        }else {
            e.preventDefault();
            const formData = new FormData();
            formData.append("file",file);
            formData.append("userId",userId);
            formData.append("fileName",file.name)
            axios.post("http://localhost:4000/upload", formData, {userId,fileName:file.name}).then(res => {
            console.log(res.statusText)
        })

        axios.post("http://localhost:4000/hla",{
                first,
                second,
                third,
                fourth,
                fifth,
                sixth,
                status:0,
                userId:JSON.parse(localStorage.getItem("user"))._id,
                fileName:file.name
            }).then(res=>{
                setShow(false);
            }).catch(err=>{
                setError(true);
            })
        }
    }

    return(
        <div className="dashboard-form">
            <div className="header">
                <Typography variant="h4">Welcome for the First Time</Typography>
                <Typography paragraph>Please Fill the Following Form Concerning your HLA Results</Typography>
            </div>
            <form method="POST" encType="multipart/form-data">
            <div className="form-part">
                    <section>
                        <InputLabel htmlFor="first">HLA-A*</InputLabel>
                        <Input
                            name="first"
                            type="text"
                            required
                            placeholder="Example : 07:02"
                            value={first}
                            onChange={(e)=>setFirst(e.target.value)}
                        />
                    </section>
                    <section>
                        <InputLabel htmlFor="second">HLA-A*</InputLabel>
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
                        <InputLabel htmlFor="first">HLA-B*</InputLabel>
                        <Input
                            name="first"
                            type="text"
                            required
                            placeholder="Example : 07:02"
                            value={third}
                            onChange={(e)=>setThird(e.target.value)}
                        />
                    </section>
                    <section>
                        <InputLabel htmlFor="second">HLA-B*</InputLabel>
                        <Input
                            name="second"
                            type="text"
                            required
                            placeholder="Example : 07:02"
                            value={fourth}
                            onChange={(e)=>setFourth(e.target.value)}
                        />
                    </section>
                </div>
                <div className="form-part">
                    <section>
                        <InputLabel htmlFor="second">HLA-DRB1*</InputLabel>
                        <Input
                            name="second"
                            type="text"
                            required
                            placeholder="Example : 07:02"
                            value={fifth}
                            onChange={(e)=>setFifth(e.target.value)}
                        />
                    </section>
                    <section>
                        <InputLabel htmlFor="second">HLA-DRB1*</InputLabel>
                        <Input
                            name="second"
                            type="text"
                            required
                            placeholder="Example : 07:02"
                            value={sixth}
                            onChange={(e)=>setSixth(e.target.value)}
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
                <div className="form-part">
                    <section>
                        <Button type="submit" variant="contained" size="large" onClick={onFileUpload}>Submit Data</Button>
                    </section>
                </div>
            </form>
        </div>
    );
}

export default DashboardForm;
