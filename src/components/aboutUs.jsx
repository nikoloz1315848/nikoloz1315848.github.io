import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import ProfilePicture from './data/profilePicture.jpg';
class AboutUs extends Component{
    state = {  } 
    render(){
        return(
            <div className='d-flex flex-column min-vh-100 ' /*style={{backgroundImage: `url(${backgroundPic})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}*/>
                <Header/>
                <div className='flex-grow-1 container-fluid w-100 m-0 p-0'>
                    <div className='row p-0 m-0'>
                        <div className='col-12 col-md-6 px-4'>
                            <div className='pe-sm-2 pe-md-0 pe-lg-5'>
                                <div className='px-4 mt-3'  >
                                    <img src={ProfilePicture} alt="profile" style={{width: '200px'}}  className='rounded'/>
                                </div>
                                
                                
                                <div className='mt-2'>
                                    <div className='custom-font-size-heading'> Nino Okruashvili, Founder</div>
                                    <ul className='custom-font-size-text-2' style={{textAlign: 'justify', textJustify: 'inter-word',listStyle: 'square'}}>
                                        <li>10+ years of experience in Operational risk management and internal control across diverse industries;</li>
                                        <li>Demonstrated success in developing, implementing, and overseeing various Risk management frameworks;</li>
                                        <li>Experienced in leading cross-functional teams to execute robust risk management initiatives;</li>
                                        <li> Solid experience of developing and facilitating Risk management Training and Awareness activities. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 px-4'>
                            <div className='pe-sm-2 pe-md-0 pe-lg-5 pb-5'>
                                <div className='custom-font-size-heading mt-5 mb-4' style={{color: '#4590B8'}}>
                                    <b>Our mission</b>
                                </div>
                                <div className='custom-font-size-text-2' style={{textAlign: 'justify', textJustify: 'inter-word', lineHeight: '2'}}>
                                    We contribute to the <b>financial stability and operational resilience</b> by encouraging organizations to manage risks proactively and building a strong risk culture. 
                                </div>
                                <div className='custom-font-size-heading mt-5 mb-4' style={{color: '#4590B8'}}>
                                    <b>Core values</b>
                                </div>
                                <div className='custom-font-size-text-2' style={{lineHeight: '2'}}>
                                    <ul style={{listStyle: 'none'}} className='p-0 m-0'>
                                        <li>
                                            <b>Customer trust –</b> We work to earn and keep customer trust.
                                        </li>
                                        <li>
                                            <b>Ownership –</b> We act long-term and never sacrifice for short-term benefits.
                                        </li>
                                        <li>
                                            <b>Integrity –</b> We are acting ethically and with honesty
                                        </li>
                                    </ul>
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
export default AboutUs;