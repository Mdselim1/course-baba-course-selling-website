import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="cmn_bg">
            <div className="container">
            <Box sx={{ display: 'flex',alignItems: 'center' , justifyContent:'space-between' }}>
                <div className="header_logo">
                    <h3>CourseBaba</h3>
                </div>
                <nav className="header_menu">
                    <Link className="nav_link" to="/home">Home</Link>
                    <Link className="nav_link" to="/courses">Courses</Link>
                    <Link className="nav_link" to="/services">Services</Link>
                    <Link className="nav_link" to="/about">About</Link>
                </nav>
            </Box>
        </div>
        </div>
    );
};

export default Header;