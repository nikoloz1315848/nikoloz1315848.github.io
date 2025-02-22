import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import ComingSoon from './data/coming_soon.png';


class Blog extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100 '>
                <Header/>
                <div className='pb-2 flex-grow-1'>
                    <img src={ComingSoon} alt="coming soon" style={{maxWidth: '100%'}}/> 
                </div>        
                <Footer/>
            </div>
        );
    }
}
 
export default Blog;
