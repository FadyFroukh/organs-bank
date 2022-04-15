import { Button } from "@mui/material";
import { useEffect } from "react";
import "../../../scss/Home.css";
import Header from "../Header";
function Home({click,setClick}){

    useEffect(()=>{
        document.title = "Body Parts System - Main Page"
    },[])


    return(
        <>
        <Header click={click} setClick={setClick}/>
        <main>
            <div className="home-page">
                <div className="home-page-overlay">
                    <div className="text">Welcome to the Biggest Body Parts Dontation System!</div>
                    <Button variant="contained" href="/sign-up">Get Started</Button>
                </div>
            </div>
        </main>
        </>
    );
}

export default Home;