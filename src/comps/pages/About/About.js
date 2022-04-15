import { useEffect } from "react";
import Header from "../Header";

function About({click,setClick}){
    useEffect(()=>{
        document.title = "Body Parts System - About Us"
    },[])
    return(
        <>
            <Header click={click} setClick={setClick}/>
            <div>About</div>
        </>
    );
}

export default About;