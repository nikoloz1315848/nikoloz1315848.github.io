import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import TrainingPic from './data/TrainingPic.jpg';
class Training extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100 '>
                <Header/>
                {/*
                <img src={Picture3} alt="Picture3" className='w-100'/>*/}
                <div className='pb-2 flex-grow-1'>
                    {/*
                    <div className='h2 px-5 mt-4'>
                        Training programs
                    </div>
                    <div className='px-5 mt-4'>
                    We provide Training and awareness programs to financial institutions, covering non-financial risk
                    management programs, focusing on 1st and 2nd line business roles.
                    </div>
                    <div className='px-5 mt-4'>
                        <ul className='row' style={{listStyle: 'square'}}>
                            <li className='col-12 m-2 col-sm-6'>Programs are developed and delivered based on International best practices and meet
                            regulatory expectations.</li>
                            <li className='col-12 m-2 col-sm-5'>We practice online and in-person training sessions</li>
                            <li className='col-12 m-2 col-sm-6'>We offer Interactive, Engaging and Motivating sessions for participants</li>
                            
                            
                        </ul>
                    </div>*/}
                    <div className='row w-100 p-0 m-0'>
                            <div className='col-12 col-md-5 m-0 p-4 p-lg-5'>
                                <div className='px-xl-5' >
                                    <img src={TrainingPic} alt="training_pic" style={{maxWidth: '100%'}}/>
                                </div>
                                    
                            </div>
                            <div className='col-12 col-md-7 py-2 pe-md-5' style={{backgroundColor: '#F0F0F0', lineHeight: '2'}}>
                                <div className='custom-font-size-heading px-4 px-sm-5 mt-sm-4' ><b>Training programs</b></div>
                                <div className='custom-font-size-text px-4 px-sm-5 mt-2' style={{ textAlign: 'justify', textJustify: 'inter-word'}}>
                                    <div>
                                        We provide training and awareness programs covering various risk management frameworks. 
                                        <br />
                                        Training programs are developed and delivered based on best practices.                                    
                                    </div>
                                    <ul style={{listStyle: 'square'}}>
                                        <li>
                                            We offer Interactive, Engaging, and Motivating sessions for participants
                                        </li>
                                        <li> 
                                            We practice online and in-person training sessions
                                        </li>
                                    </ul>
                                    <br />
                                    <div>
                                        Get ready to level up! Our training calendar is coming soon! 🎉 
                                        <br />
                                        Follow us on <a href="https://www.linkedin.com/company/riskadvisor-ge/">LinkedIn</a> to be the first to know!
                                    </div>
                                    

                                </div>
                            </div>

                        </div>
                </div>

                <Footer/>
            </div>
        );
    }
}
 
export default Training;
