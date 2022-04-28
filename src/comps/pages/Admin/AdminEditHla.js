import { Input, InputLabel, Typography,Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
const { default: EditHeader } = require("./EditHeader");

function AdminEditHla({setShow,info,setLoading}){
    const [_id,setID] = useState(info._id);
    const [first,setFirst] = useState(info.first);
    const [second,setSecond] = useState(info.second);
    const [status,setStatus] = useState(info.status);

    useEffect(()=>{
        
    },[])

    const handleForm = (e)=>{
        e.preventDefault();
        setLoading(true);
        axios.put("http://localhost:4000/hla",{
            _id,
            first,
            second,
            status:Number(status)
        }).then(res=>{
            setLoading(false);
            setShow(false);
        }).catch(err=>{

        })
    }

    return(
        <div className="admin-edit-hla menu">
            <EditHeader setShow={setShow}/>
            <div className="admin-edit-menu item">
                <form className="edit-hla-form" onSubmit={handleForm}>
                    <Typography variant="h5">Changing Data for <b>{info._id}</b></Typography>
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
                    <div className="form-part button-part">
                        <Button variant="contained" size="large" type="submit">Change Data</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminEditHla;