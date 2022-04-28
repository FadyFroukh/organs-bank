import { Input, InputLabel, Typography,Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import SelectOrgan from "../Dashboard/comps/SelectOrgan";
import AdminError from "../../AdminError";
import AdminSuccess from "../../AdminSuccess";


function AddOrgan({setLoading}){
    const [organName,setOrganName] = useState();
    const [rule,setRule] = useState();
    const [userId,setUserId] = useState();

    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");


    const handleForm = (e)=>{
        e.preventDefault();
        setLoading(true);
        axios.post("http://localhost:4000/organs",{
            userId,
            organName,
            rule
        }).then(res=>{
            setSuccess(true);
            setLoading(false);
        }).catch(err=>{
            setError(true);
            setErrorMsg("Connection Error");
        })
    }

    return(
        <div className="add-organ add">
            <div className="admin-edit-menu item">
            {
                error ? <AdminError error={error} setError={setError} errorMsg={errorMsg}/> : null
            }
            {
                success ? <AdminSuccess success={success}/> : null
            }
            <Typography variant="h5">Add an Organ</Typography>
                <form className="edit-organ-form" onSubmit={handleForm}>
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
                        <Button variant="contained" size="large" type="submit">Add Data</Button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default AddOrgan;