import { Button } from '@mui/material';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <h1 style={{ textAlign:'center',color:'#0D2E51' , fontSize:'50px'}}>Get in Touch</h1>
            <div className="contact_field">
            <input type="text" name="text" placeholder="Enter your Name" />
            <input type="email" placeholder="Enter your email" />
                <textarea name="messege" placeholder="Write your messege" cols="15" rows="5"></textarea>
                <Button sx={{mt:'20px' , mb:'40px' , py:'8px',px:'20px' ,bgcolor:'#F7B213' , color:'#16364D', fontSize:'17px', fontWeight:'600'}} variant="contained">Send Messege</Button>
            </div>
            <div className="container">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977781974!2d90.34928576871451!3d23.780777744581084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1633348507755!5m2!1sen!2sbd" width="100%" height="450" style={{border:0, marginBottom:'50px'}}></iframe>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;