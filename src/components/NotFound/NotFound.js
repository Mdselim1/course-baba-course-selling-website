import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Notfound.css';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className="not_found_page">
            <h1>4<span>0</span>4</h1>
            <h2>Page not Found</h2>
            <Link style={{textDecoration:'none'}} to="/home">
            <Button sx={{my:'10px' , bgcolor:'crimson'}} variant="contained">Back to home page</Button>
            </Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;