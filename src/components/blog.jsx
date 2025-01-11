import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import BigLogo from  './data/BigLogo.png';


class Blog extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100 '>
                <Header/>
                <div className='pb-2 flex-grow-1'>

                <h1>Blog</h1>
                
                <img src={BigLogo} alt="big logo" />


                under construction
                </div>
                
                <Footer/>
            </div>
        );
    }
}
 
export default Blog;
