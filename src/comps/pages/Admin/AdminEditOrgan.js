import { Input, InputLabel, Typography,Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import SelectOrgan from "../Dashboard/comps/SelectOrgan";

const { default: EditHeader } = require("./EditHeader");

function AdminEditOrgan({setShow,info,setLoading}){
    const [_id] = useState(info._id);
    const [organName,setOrganName] = useState(info.organName);
    const [rule,setRule] = useState(info.rule);

    const handleForm = (e)=>{
        e.preventDefault();
        setLoading(true);
        axios.put("http://localhost:4000/organs",{
            _id,
            organName,
            rule
        }).then(res=>{
            setLoading(false);
            setShow(false);
        }).catch(err=>{
            setLoading(false);
            setShow(false);

        })
    }

    return(
        <div className="admin-edit-organ menu">
            <EditHeader setShow={setShow}/>
            <Typography variant="h5">Changing Data for <b>{info._id}</b></Typography>
            <div className="admin-edit-menu item">
                <form className="edit-organ-form" onSubmit={handleForm}>
                    <div className="form-part">
                        <section>
                            <InputLabel htmlFor="choose-organ">Organ Name</InputLabel>
                            <SelectOrgan organName={organName} setOrganName={setOrganName}/>
                        </section>
                    </div>
                    <div className="form-part">
                        <section>
                            <InputLabel htmlFor="rule">User Rule</InputLabel>
                            <Input
                                name="rule"
                                type="number"
                                inputProps={{min:0,max:2}}
                                value={rule}
                                onChange={(e)=>setRule(e.target.valueAsNumber)}
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

export default AdminEditOrgan;