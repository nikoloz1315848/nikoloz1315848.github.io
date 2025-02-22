import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import ContactPic from './data/contactPic.jpg';
class Contact extends Component{
    state = {  } 
    render(){
        return(
            <div className='d-flex flex-column min-vh-100 '>
                <Header/>


            
                <div className='flex-grow-1 container-fluid w-100 m-0 p-0'>
                    <div className='row p-0 m-0'>
                        <div className='col-12 col-md-6'>
                            <div className='display-1 px-3 px-sm-4 px-xl-5 mt-3 mt-sm-5'>
                                <b>Get in Touch</b>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='h2 px-3 px-sm-5 mt-4' style={{color: '#4590B8'}}>
                                Contact us
                            </div>
                            <div className='px-3 px-sm-5 mt-4 pb-5'>
                                <div className='p-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg> info@riskadvisor.ge
                                </div>
                                <div className='p-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                    </svg> +995-599-519783
                                </div>
                                <div className='p-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                    </svg> <a href="https://www.linkedin.com/company/riskadvisor-ge/">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <img src={ContactPic} alt="contactPic" />
                <Footer/>
            </div>
        );
    }

}
export default Contact;