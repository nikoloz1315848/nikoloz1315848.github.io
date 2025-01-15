import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';


class PrivacyPolicy extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100 '>
                <Header/>
                <div className='pb-2 px-5 flex-grow-1'>
                    <br />
                    <h2>Privacy policy</h2>
                    <br />
                
                    <div>
                        We are committed to protecting your privacy.
                    </div>
                    <div>
                        We will only use the information that we collect about you lawfully in accordance with the Law of Georgia on
                            Personal Data Protection.
                    </div>
                    <div>
                        We do not share your personal information with third parties.
                    </div>
                    <div>
                        The type of information we will collect about you includes: Your name,and Email address
                    </div>
                    <div>   
                        We will never collect sensitive information about you without your explicit consent.
                    </div>
                    
                </div>

                <Footer/>
            </div>
        );
    }
}
 
export default PrivacyPolicy;