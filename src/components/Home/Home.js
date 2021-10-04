import { Box } from '@mui/system';
import React from 'react';
import UiData from '../../hooks/uidata';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderData from '../HeaderData/HeaderData';

const Home = () => {

    const [data] = UiData();

    return (
        
        <div>
            <Header></Header>
            <div className="container">
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' , gridGap:'25px' , margin:'50px 0'}}>
                {
                data.map(uidata => <HeaderData key={uidata.key} data={uidata}></HeaderData>)
                }
                </Box>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;