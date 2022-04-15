import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import axios from "axios";
import SelectOrgan from "./SelectOrgan";

function OrganPending({organName,setOrganName,setError,setOrgan,rule}){

    const handleForm = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/organs",{
            userId:JSON.parse(localStorage.getItem("user"))._id,
            organName,
            rule
        }).then(res=>{
            setOrgan(res.data);
        }).catch(err=>{
            setError(true);
        })
        
    }

    return(
        <div className="organ-pending">
            <Typography variant="h5">Please Specify The Organ You Want to {rule === 1 ? "Receive" : "Give"}</Typography>
            <div className="select-organ">
                <form onSubmit={handleForm}>
                <SelectOrgan organName={organName} setOrganName={setOrganName}/>
                <Button variant="contained" size="large" type="submit">Send Data</Button>
                </form>
            </div>
        </div>
    );
}

export default OrganPending;