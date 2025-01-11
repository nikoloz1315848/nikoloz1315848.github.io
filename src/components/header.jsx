
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "./data/Logo.png"

class Header extends Component{
    state = {  } 

    render(){
        return(
            
            <div className='sticky-top border-bottom'>
                <div className='container-fluid w-100'>
                    <div className='bg-white px-1 row'>
                        <div className="col p-1" >
                            <div  style={{backgroundColor: '#003968', height: '15px'}}>
                                <br />
                            </div>
                        </div>
                        <div className="col p-1" >
                            <div  style={{backgroundColor: '#4590B8', height: '15px'}}>
                                <br />
                            </div>
                        </div>
                        <div className="col p-1"> 
                            <div  style={{backgroundColor: 'gray', height: '15px'}}>
                                <br />
                            </div>  
                        </div>
                    </div>
                </div>
                
                {/*  
                <div className="position-relative w-100 p-5 bg-white  " style={{color: '#003968', fontFamily: 'gillsansmt'}}>
                    <div className='position-absolute top-50 start-0 translate-middle-y w-25 p-2  '>
                        <div className='m-2 ' >
                            <Link to="/" className="text-decoration-none h2" >RiskAdvisor</Link>
                        </div>
                    </div>
                    <div className='position-absolute top-50 end-0 translate-middle-y w-50 p-2'>
                        <div className='row'>
                            <div className='col m-2'>
                                <Link to="/" className="text-decoration-none h4" >Home</Link>
                            </div>
                            <div className='col m-2'>
                                <Link to="/consulting" className="text-decoration-none h4" >Consulting</Link>
                            </div>
                            <div className='col m-2'>
                                <Link to="/training" className="text-decoration-none h4">Training</Link>
                            </div>
                            <div className='col m-2'>
                                <Link to="/blog" className="text-decoration-none h4">Blog</Link>
                            </div>
                            <div className='col m-2'> 
                                <Link to="/aboutus" className="text-decoration-none h4">About us</Link>
                            </div>
                            <div className='col m-2'>
                                <Link to="/contact" className="text-decoration-none h4">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
                */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid" style={{color: '#003968', fontFamily: 'gillsansmt'}}>
                        
                        
                        <div className='d-flex flex-row'>
                             <img src={Logo} alt="Logo" style={{ height: 'auto'}}/> 
                            <div className='m-2'>
                                <Link to="/" className="text-decoration-none h2 " >RiskAdvisor</Link>
                            </div>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item m-2 mx-4">
                                    <Link to="/" className="text-decoration-none h4" >Home</Link>
                                </li>
                                <li className="nav-item m-2 mx-4">
                                    <Link to="/consulting" className="text-decoration-none h4" >Consulting</Link>
                                </li>
                                <li className="nav-item m-2 mx-4">
                                    <Link to="/training" className="text-decoration-none h4">Training</Link>
                                </li>
                                <li className="nav-item m-2 mx-4">
                                    <Link to="/blog" className="text-decoration-none h4">Blog</Link>
                                </li>
                                <li className="nav-item m-2 mx-4">
                                    <Link to="/aboutus" className="text-decoration-none h4">About us</Link>
                                </li>
                                <li className="nav-item m-2 mx-4">
                                    <Link to="/contact" className="text-decoration-none h4">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
            
        );
    }

}
export default Header;