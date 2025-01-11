import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import ProfilePicture from './data/profilePicture.jpg'
class AboutUs extends Component{
    state = {  } 
    render(){
        return(
            <div className='d-flex flex-column min-vh-100 '>
                <Header/>
                 <div className='pb-2 flex-grow-1'>
                 <div className='p-4 '>
                 <img src={ProfilePicture} alt="profile"  className='rounded'/>
                 
                <div className='mt-2'>
                    <div className='h2' style={{fontFamily: 'gillsansmt',  color: '#003968'}}> Nino Okruashvili, Founder</div>
                    <ul  style={{listStyle: 'square', fontFamily: 'gillsansmt' ,color: '#003968'}}>
                        <li>10+ years of experience in Operational risk management and internal control across diverse industries;</li>
                        <li>Demonstrated success in developing, implementing, and overseeing various Risk management frameworks;</li>
                        <li>Experienced in leading cross-functional teams to execute robust risk management initiatives;</li>
                        <li> Solid experience of developing and facilitating Risk management Training and Awareness activities. </li>
                    </ul>
                </div>
                 </div>

                 </div>
                
                 <Footer/>
            </div>
        );
    }

}
export default AboutUs;