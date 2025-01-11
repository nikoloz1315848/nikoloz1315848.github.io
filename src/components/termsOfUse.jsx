import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';


class TermsOfUse extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100 '>
                <Header/>
                <div className='pb-2 flex-grow-1'>
                <h1>TermsOfUse</h1>
                </div>
                <Footer/>
            </div>
        );
    }
}
 
export default TermsOfUse;