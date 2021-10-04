import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import UiData from '../../hooks/uidata';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceDisData from '../ServiceDisData/ServiceDisData';

const Services = () => {

    const [data] = UiData();

    

    return (
        <div>
            <Header></Header>
            <div className="container">
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' , gridGap:'50px' , margin:'50px 0'}}>
                {
                data.map(uidata => <ServiceDisData key={uidata.key} data={uidata}></ServiceDisData>)
                }
                </Box>
                <div style={{textAlign:'center'}}>
                    <Link style={{
                        textDecoration:'none'
                    }} to="/services">
                    <Button sx={{mt:'20px' , mb:'40px' , py:'10px',px:'30px' ,bgcolor:'#F7B213' , color:'#16364D', fontSize:'20px', fontWeight:'600'}} variant="contained">Upcoming Courses</Button>
                </Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;