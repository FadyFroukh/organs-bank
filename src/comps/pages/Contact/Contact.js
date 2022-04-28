import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../../Footer";
import { Input, InputLabel, Typography , TextField, Button } from "@mui/material";
import "../../../scss/Contact.css";
import { Link } from "react-router-dom";
import "../../../scss/utils.css";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import axios from "axios";
import Loading from "./Loading";
function Contact({click,setClick}){

    const [error,setError] = useState(false);
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [messageTopic,setMessageTopic] = useState("");
    const [messageBody,setMessageBody] = useState("");
    const [loading,setLoading] = useState(false);
    const [show,setShow] = useState(false);

    useEffect(()=>{
        document.title = "Human Organs System - Contact Us"
    },[])

    const handleForm = (e)=>{
        e.preventDefault();
        setLoading(true);
        setShow(false);
        setError(false);
        axios.post("http://localhost:4000/question",{
            firstName,
            lastName,
            email,
            phone,
            messageTopic,
            messageBody
        }).then(res=>{
            setLoading(false);
            setShow(true);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setMessageTopic("");
            setMessageBody("");
        }).catch(err=>{
            setError(true);
            setLoading(false);
        })
    }

    return(
        <>
        <div className="contact">
            <div className="contact-us">
                <Header click={click} setClick={setClick}/>
                <div className="contact-body container">
                    <div className="contact-header">
                        <Typography variant="h3">Contact Us</Typography>
                        <Typography paragraph>
                            You can contact us everyday but Friday with a 24/7 service , we have a professional team
                            to provide you answers to all questions that pop-up on your mind, you can also check our
                            <Link to="/faq">FAQ</Link> page that has the most frequently asked questions.
                        </Typography>
                    </div>
                    <div className="contact-methods">
                        <Typography paragraph><b>Email : </b>info@partsdonation.org</Typography>
                        <Typography paragraph><b>Phone : </b>0599101010</Typography>
                        <Typography paragraph><b>Office : </b>Palestine - Bethlehem - Alzahara Building - Fourth Floor</Typography>
                        <div className="socials">
                            <Typography paragraph><b>Social Media : </b></Typography>
                            <div className="icons">
                                <a href="#"><Facebook/></a>
                                <a href="#"><Twitter/></a>
                                <a href="#"><LinkedIn/></a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-question">
                        <Typography variant="h4">You can also ask a question</Typography>
                        <div className="contact-form">
                            <form method="POST" onSubmit={handleForm}>
                                {
                                    show ? 
                                    <Typography paragraph className="text-center">
                                        <b>Question submitted , we will answer ASAP!</b>
                                    </Typography> :
                                    null
                                }
                                {
                                    error ? 
                                    <Typography paragraph className="text-center">
                                        <b style={{color:"#d63031"}}>An error occured , please try again later :(</b>
                                        </Typography> :
                                    null
                                }
                                <div className="form-part">
                                    <section>
                                        <InputLabel htmlFor="firstName" variant="filled">FirstName</InputLabel>
                                        <Input
                                            required
                                            label="First Name"
                                            name="firstName"
                                            type="text"
                                            value={firstName}
                                            onChange={(e)=>setFirstName(e.target.value)}
                                        />
                                    </section>
                                    <section>
                                        <InputLabel htmlFor="lastName" variant="filled">LastName</InputLabel>
                                        <Input
                                            required
                                            name="lastName"
                                            type="text"
                                            value={lastName}
                                            onChange={(e)=>setLastName(e.target.value)}
                                        />
                                    </section>
                                </div>
                                <div className="form-part">
                                    <section>
                                        <InputLabel htmlFor="email" variant="filled">E-mail Address</InputLabel>
                                        <Input
                                            required
                                            name="email"
                                            type="email"
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    </section>
                                    <section>
                                        <InputLabel htmlFor="phone" variant="filled">Phone Number</InputLabel>
                                        <Input
                                            required
                                            name="phone"
                                            type="text"
                                            value={phone}
                                            onChange={(e)=>setPhone(e.target.value)}
                                        />
                                    </section>
                                </div>
                                <div className="form-part">
                                    <section>
                                        <InputLabel htmlFor="messageTopic" variant="filled">What is your message topic?</InputLabel>
                                        <Input
                                            required
                                            name="messageTopic"
                                            type="text"
                                            value={messageTopic}
                                            onChange={(e)=>setMessageTopic(e.target.value)}
                                        />
                                    </section>
                                </div>
                                <div className="form-part">
                                    <section>
                                        <TextField
                                            required
                                            label="Message Body"
                                            multiline
                                            rows={6}
                                            value={messageBody}
                                            onChange={(e)=>setMessageBody(e.target.value)}
                                        />
                                    </section>
                                </div>
                                <div className="form-part button-part">
                                    <Button variant="contained" size="large" type="submit">Send Question</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            {
                loading ? <Loading/> : null
            }
        </div>
        </>
    );
}

export default Contact