import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <h1 style={{ textAlign:'center',color:'#0D2E51' , fontSize:'50px'}}>About Us</h1>
                <ol className="about__text">
                    <li>More than 5 years experienced teacher</li>
                    <li>Daily Note</li>
                    <li>Daily Lecter Sheet</li>
                    <li>Problem Solving Class Every Week</li>
                    <li>Unbeleivable Support</li>
                    <li>Weekly Exam</li>
                    <li>Student Lovely</li>
                </ol>
                <h1 style={{ textAlign: 'center',color:'#0D2E51', fontSize: '50px' }}>About Our Community</h1>
                <p className="about_community">We are students and in our student life, we met a huge number of teachers. Among them, some are really special and that why everyone has a favorite teacher in their life. Here are the top four paragraphs on ‘My Favorite Teacher’ and ‘Your Favorite Teacher’.  Ramesh sir is my favorite teacher. He teaches us Physics and he is our class teacher. The most important thing about Ramesh sir is he is the most talented and knowledgeable science man in the whole school. I am a science lover and maybe that’s why he has become my favorite teacher.

                He is very punctual and he never misses his classes. Even sometimes he gives us extra time after regular class time. We love him for his dedicating mind and good teaching skill. I can understand hard physics things when he explained. His explanation skill is amazing. I have a favorite teacher and his name is Nizam Uddin. I am a student of class nine and Nizam Uddin sir is our class teacher. He used to teach physics and Math. As a science student, I love physics. Nizam sir is a really amazing and well-educated person. He is one of the best teachers in the school right now. </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;