import { Box } from '@mui/system';
import React from 'react';
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
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;