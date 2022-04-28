import { useEffect,useState } from "react";
import Header from "../Header";

function Faq({click,setClick}){

    useEffect(()=>{
        document.title = "Human Organs System - FAQ"
    },[])

    return(
        <>
            <Header click={click} setClick={setClick}/>
            <div>Faq</div>
        </>
    );
}

export default Faq