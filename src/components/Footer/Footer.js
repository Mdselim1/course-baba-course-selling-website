import { Box } from '@mui/system';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="cmn_bg">
            <div className="container">
                <Box sx={{ display: 'flex',justifyContent:'space-between', alignItems: 'center' }}>
                <div className="footer_logo">
                    <h3>CourseBaba</h3>
                </div>
            <div className="copyright_text">
                <p>&copy; All right reserved by Selim</p>
                    </div>
                    
            </Box>
            </div>
        </div>
        </footer>
    );
};

export default Footer;