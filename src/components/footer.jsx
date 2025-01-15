import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className='w-100 ' style={{backgroundColor: '#003968'}} >
                <div className='container-fluid'>
                    <div className='row text-white' >
                        {/* <div className='col-12 col-sm m-2'>
                            <Link to="/termsOfUse" className="text-decoration-none h6">Terms</Link>
                        </div> */}
                        <div className='col-12 col-sm m-2'>
                            <Link to="/privacyPolicy" className="text-decoration-none h6">Privacy policy</Link>
                        </div>
                        <div className='col-12 col-sm m-2'> 
                            <Link to="/usefulLinks" className="text-decoration-none h6">Useful Links</Link>
                        </div>
                        <div className='col-12 col-sm m-2'>
                            <Link to="/faq" className="text-decoration-none h6">FAQ</Link>
                        </div>
                        <div className='col-12 col-sm m-2'>
                            <Link to="/contact" className="text-decoration-none h6">Contact us</Link>
                        </div>
                    </div>
                </div>
                
              
            </div>
        );
    }
}
 
export default Footer;