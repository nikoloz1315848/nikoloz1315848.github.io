import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import Picture3 from './data/Picture3.jpg';

class Training extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100 '>
                <Header/>
                
                <img src={Picture3} alt="Picture3" className='w-100'/>
                <div className='pb-2 flex-grow-1'>
                    <div className='h2 px-5 mt-4' style={{fontFamily: 'gillsansmt' ,color: '#003968'}}>
                        Training programs
                    </div>
                    <div className='px-5 mt-4' style={{fontFamily: 'gillsansmt' ,color: '#003968'}}>
                    We provide Training and awareness programs to financial institutions, covering non-financial risk
                    management programs, focusing on 1 st and 2 nd line business roles.
                    </div>
                    <div className='px-5 mt-4' style={{fontFamily: 'gillsansmt' ,color: '#003968'}}>
                        <ul className='row' style={{listStyle: 'square'}}>
                            <li className='col-12 m-2 col-sm-6'>Programs are developed and delivered based on International best practices and meet
                            regulatory expectations.</li>
                            <li className='col-12 m-2 col-sm-5'>We practice online and in-person training sessions</li>
                            <li className='col-12 m-2 col-sm-6'>We offer Interactive, Engaging and Motivating sessions for participants</li>
                            
                            
                        </ul>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}
 
export default Training;
