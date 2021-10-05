import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import UiData from '../../hooks/uidata';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeData from '../HomeData/HomeData';

const Home = () => {

    const [data] = UiData();
    const newData = data.slice(0, 3);
    return (
        
        <div>
            <Header></Header>

            <h1 style={{ textAlign:'center',color:'#0D2E51' , fontSize:'40px'}}>Welcome to our Education Platform</h1>

            <div className="container">
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' , gridGap:'50px' , margin:'50px 0'}}>
                {
                newData.map(uidata => <HomeData key={uidata.key} data={uidata}></HomeData>)
                }
                </Box>
                <div style={{textAlign:'center'}}>
                    <Link style={{
                        textDecoration:'none'
                    }} to="/services">
                    <Button sx={{mt:'20px' , mb:'40px' , py:'10px',px:'30px' ,bgcolor:'crimson' , color:'#ffffff', fontSize:'20px', fontWeight:'600'}} variant="contained">See more Service</Button>
                </Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;