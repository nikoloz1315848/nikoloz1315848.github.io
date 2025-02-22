
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "./data/logo.png";

class Header extends Component{
    state = {  } 

    render(){
        return(
            
            <div className='sticky-top border-bottom'>
                {/*
                <div className='container-fluid w-100'>
                    <div className='px-1 row' style={{backgroundColor: '#F0F0F0'}}>
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
                */}
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
                <nav className="navbar navbar-expand-lg navbar-light" id='navbar' data-bs-spy="scroll" data-bs-offset="100" style={{backgroundColor: '#F0F0F0'}}>
                    <div className="container-fluid">
                        
                        
                        <div className='d-flex flex-row'>
                            
                            <div className='m-2'>
                               
                                <Link to="/" className="text-decoration-none" style={{fontSize: '1.8rem', fontWeight: '500', color: '#003968'}}>
                                    <svg version="1.0" style={{marginBottom: '5px',marginRight: '3px'}} xmlns="http://www.w3.org/2000/svg" width="13pt" height="16pt" viewBox="0 0 476.000000 621.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,621.000000) scale(0.100000,-0.100000)" fill="#003968" stroke="none">
                                        <path d="M4720 6099 c-14 -11 -43 -29 -65 -41 -22 -11 -42 -24 -45 -27 -3 -4 -45 -32 -93 -62 -48 -30 -105 -65 -126 -79 -43 -27 -204 -128 -281 -175 -27 -16 -87 -55 -134 -85 -48 -30 -108 -68 -135 -85 -26 -16 -63 -40 -82 -52 -19 -12 -68 -43 -109 -68 -41 -26 -100 -63 -130 -83 -30 -19 -71 -45 -90 -57 -19 -12 -77 -49 -128 -81 -87 -55 -133 -84 -222 -139 -19 -12 -60 -37 -90 -57 -75 -48 -223 -142 -290 -183 -30 -19 -59 -38 -65 -43 -5 -4 -54 -35 -107 -68 -54 -32 -116 -70 -137 -84 -22 -14 -78 -50 -126 -80 -47 -30 -112 -72 -143 -92 -31 -20 -73 -46 -92 -58 -19 -12 -53 -32 -75 -45 -22 -13 -47 -29 -55 -35 -8 -6 -32 -21 -52 -33 -38 -23 -155 -95 -243 -152 -27 -18 -88 -56 -135 -85 -85 -54 -195 -123 -338 -214 -42 -27 -99 -64 -127 -81 -27 -18 -81 -52 -120 -77 -38 -24 -92 -58 -118 -74 -27 -16 -66 -40 -88 -54 -21 -14 -92 -58 -156 -99 -65 -41 -140 -89 -168 -106 -27 -18 -54 -34 -60 -36 -10 -4 -105 -66 -210 -136 -28 -18 -55 -33 -62 -33 -6 0 -14 -7 -17 -16 -3 -9 -6 -279 -6 -601 0 -479 2 -584 13 -580 7 3 400 249 873 548 472 298 1057 667 1299 819 242 152 728 459 1080 681 352 223 832 526 1068 674 l427 269 0 593 c0 326 -3 593 -7 593 -5 0 -19 -9 -33 -21z"/>
                                        <path d="M1185 5904 c-86 -12 -154 -28 -190 -44 -22 -10 -57 -25 -77 -33 -103 -43 -252 -185 -321 -307 -70 -126 -88 -191 -94 -346 -7 -161 11 -251 69 -368 86 -170 196 -279 361 -356 186 -88 426 -94 617 -17 429 174 607 686 380 1093 -96 172 -283 314 -474 359 -64 15 -220 26 -271 19z"/>
                                        <path d="M4705 4184 c-22 -13 -47 -28 -55 -34 -50 -35 -136 -89 -141 -90 -6 0 -37 -19 -129 -81 -22 -14 -138 -88 -219 -139 -40 -25 -100 -63 -134 -84 -166 -104 -261 -165 -273 -175 -6 -5 -29 -19 -50 -30 -44 -25 -203 -125 -220 -140 -6 -5 -29 -19 -50 -30 -21 -12 -84 -51 -139 -86 -55 -36 -113 -72 -130 -81 -16 -9 -39 -24 -50 -33 -11 -10 -54 -37 -95 -61 -41 -25 -102 -63 -135 -85 -33 -22 -94 -60 -135 -85 -41 -25 -79 -48 -85 -53 -14 -10 -133 -87 -184 -117 -39 -23 -128 -80 -273 -173 -31 -21 -58 -37 -61 -37 -2 0 -40 -24 -84 -52 -44 -29 -105 -69 -137 -88 -60 -37 -174 -109 -266 -168 -30 -20 -71 -45 -90 -57 -19 -12 -73 -47 -120 -77 -47 -31 -96 -61 -110 -68 -14 -7 -27 -16 -30 -20 -3 -4 -23 -17 -45 -29 -22 -12 -85 -51 -140 -86 -55 -36 -118 -74 -139 -86 -21 -11 -44 -25 -50 -30 -19 -16 -179 -118 -221 -140 -22 -12 -42 -25 -45 -28 -3 -4 -36 -26 -75 -50 -38 -24 -81 -52 -95 -61 -14 -9 -41 -25 -60 -35 -18 -10 -39 -23 -46 -29 -7 -6 -38 -27 -69 -46 -82 -50 -243 -154 -287 -185 l-38 -26 0 -590 c0 -324 2 -589 4 -589 3 0 146 89 318 199 172 109 599 378 948 598 349 220 910 573 1245 785 336 212 828 522 1095 690 267 169 634 400 815 515 l330 209 3 584 c1 321 -1 587 -5 590 -5 4 -26 -3 -48 -16z"/>
                                        <path d="M3498 1874 c-4 -3 -41 -15 -84 -25 -132 -34 -268 -118 -365 -226 -90 -99 -161 -257 -180 -399 -60 -451 258 -836 711 -861 476 -26 857 369 809 839 -24 236 -135 418 -339 555 -122 81 -269 123 -435 123 -62 0 -114 -3 -117 -6z"/>
                                    </g></svg>
                                    <b>RiskAdvisor</b>
                                </Link>
                            </div>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item m-2 mx-4">
                                    <Link to="/" className="text-decoration-none h5" >Home</Link>
                                </li>
                                <li className="nav-item m-2 mx-4">
                                    <Link to="/consulting" className="text-decoration-none h5" >Consulting</Link>
                                </li>
                                <li className="nav-item m-2 mx-4">
                                    <Link to="/training" className="text-decoration-none h5">Training</Link>
                                </li>
                                <li className="nav-item m-2 mx-4">
                                    <Link to="/blog" className="text-decoration-none h5">Blog</Link>
                                </li>
                                <li className="nav-item m-2 mx-4">
                                    <Link to="/aboutus" className="text-decoration-none h5">About us</Link>
                                </li>
                                <li className="nav-item m-2 mx-4">
                                    <Link to="/contact" className="text-decoration-none h5">Contact</Link>
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