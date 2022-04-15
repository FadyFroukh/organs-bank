import { useEffect } from "react";
import Header from "../Header";

function Contact({click,setClick}){

    useEffect(()=>{
        document.title = "Body Parts System - Contact Us"
    },[])

    return(
        <>
            <Header click={click} setClick={setClick}/>
            <div>Contact</div>
        </>
    );
}

export default Contact