import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
class Contact extends Component{
    state = {  } 
    render(){
        return(
            <div className='d-flex flex-column min-vh-100 '>
            <Header/>


           
            <div className='pb-2 flex-grow-1'>
                <div className='h2 px-5 mt-4'>
                    Contact us
                </div>
                <div className='px-5 mt-4'>
                    <div>
                        E-mail: info@riskadvisor.ge
                    </div>
                    <div>
                        T: +995-599-519783
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/company/106128851/admin/dashboard/">LinkedIn</a>
                    </div>
                    <br />
                    <div>
                        Address:
                    </div>
                    <div>
                        Burzgla str. 100
                    </div>
                    <div>
                        Tbilisi 1094, Georgia
                    </div>
                 
                
           

                </div>
            </div>
            
            <Footer/>
            </div>
        );
    }

}
export default Contact;