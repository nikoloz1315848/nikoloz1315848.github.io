import React, { Component } from 'react';
import CustomSlider from './custom.slider';
import images from './data/images';
import Header from './header';
import Footer from './footer';
import Pic1 from './data/pic1.jpg';
import Pic2 from './data/pic2.jpg';
import Pic3 from './data/pic3.jpg';
import CustomerPic1 from './data/customers_Pic_1.jpg';
import CustomerPic2 from './data/customers_Pic_2.jpg';
import CustomerPic3 from './data/customers_Pic_3.jpg';
import CustomerPic4 from './data/customers_Pic_4.jpg';
import CustomerPic5 from './data/customers_Pic_5.jpg';
import CustomerPic6 from './data/customers_Pic_6.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


class Home extends Component {
    
    state = {  } 
    render() { 
   
        
        return (
            <div className='d-flex flex-column min-vh-100 '>
                
                <Header />
                
                
                <CustomSlider>
                    {images.map((image, index) => {
                    return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                    })}
                </CustomSlider>
                           
              
                
                <div className='d-flex justify-content-center custom-font-size-heading-3 px-4 px-md-5 my-4'>
                    “Your partner in saving Time and Resources”
                </div>
                <div className='flex-grow-1'>
                    <div className='container-fluid w-100 m-0 p-0 border-top'>
                        <div className='row w-100 p-0 m-0'>
                            <div className='col-12 col-md-5 d-md-none d-block p-0'>
                                <img src={Pic1} alt="pic1" style={{maxWidth: '100%'}}/>
                            </div>
                            <div className='col-12 col-md-7 px-4 px-sm-5 px-md-3 px-lg-4 px-xl-5 pb-3 pb-md-0' style={{backgroundColor: '#F0F0F0', lineHeight: '2'}}>
                                <div className='custom-font-size-heading mt-2 mt-md-2 mt-lg-3 mt-xxl-4' style={{color: '#4590B8'}} ><b>Who we are</b></div>

                                <div className='custom-font-size-text mt-2 mt-md-1 mt-lg-3 mt-xxl-4' style={{ textAlign: 'justify', textJustify: 'inter-word'}}>
                                    
                                    <div>
                                        We provide <b>Risk Management Consulting and Training services</b> to the organizations.
                                    </div>
                                    <div>
                                        We support organizations to develop and implement Risk management practices that enable them to:
                                    </div>
                                    <div className='px-lg-4'>
                                        <ul className='m-1' style={{listStyle: 'square'}}>
                                            <li> 
                                                <b>Minimize</b> financial and reputational losses
                                            </li>
                                            <li>           
                                                Comply with <b>regulatory requirements</b>
                                            </li>
                                            <li>
                                                Pursue <b>Risk opportunities </b>
                                            </li>
                                            <li>
                                                Effectively <b>manage crises</b>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        We offer training and awareness programs for Risk managers and business stakeholders.
                                    </div>
                                        
                                    <div>
                                        We strongly believe that proactive and comprehensive risk management is
                                        crucial for <b>financial stability and operational resilience</b>. The
                                        forward-looking approach to risk management assists organizations in achieving
                                        their strategic objectives and provides a <b>competitive advantage.</b>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='col-12 col-md-5 d-md-block d-none m-0 p-0'>
                                    <img src={Pic1} alt="pic1" style={{maxWidth: '100%'}}/>
                            </div>
                        </div>
                        <div className='row w-100 p-0 m-0'>
                            <div className='col-12 col-md-5 m-0 p-0'>
                                    <img src={Pic2} alt="pic2" style={{maxWidth: '100%'}}/>
                            </div>
                            <div className='col-12 col-md-7 px-4 px-sm-5 px-md-3 px-lg-4 px-xl-5 pb-3 pb-md-0' style={{backgroundColor: '#F0F0F0', lineHeight: '2'}}>
                                <div className='custom-font-size-heading mt-2 mt-md-2 mt-lg-3 mt-xxl-4' style={{color: '#4590B8'}} ><b>What we do</b></div>
                                <div className='custom-font-size-text mt-2 mt-md-1 mt-lg-3 mt-xxl-4' style={{ textAlign: 'justify', textJustify: 'inter-word'}}>
                                    <div>
                                    We support organizations to:
                                    </div>
                                    <ul className='m-1' style={{listStyle: 'square'}}>
                                        <li>
                                            Design and implement <b>Risk management frameworks</b> (ORM, ERM, FRM, BCM, IS)
                                        </li>
                                        <li> 
                                            Develop implementation plans for the upcoming <b>Regulatory requirements</b>
                                        </li>
                                        <li>
                                            Design and implement Risk management requirements to support <b>licensing process</b>
                                        </li>
                                        <li>
                                            Perform Risk Maturity assessment against <b>International standards</b> (Basel, ISO, EBA, COSO) to identify areas for improvement
                                        </li>
                                        <li>
                                            Conduct a <b>Benchmarking analysis </b>
                                        </li>
                                        <li>
                                            Design and implement Risk management <b>Strategic initiatives</b>
                                        </li>
                                        <li>
                                            Design and maintain risk management <b>Training and Awareness</b> programs for employees
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='row w-100 p-0 m-0'>
                        <div className='col-12 col-md-5 d-md-none d-block m-0 p-0'>
                                <img src={Pic3} alt="pic3" style={{maxWidth: '100%'}}/>
                            </div>
                            <div className='col-12 col-md-7 px-4 px-sm-5 px-md-3 px-lg-4 px-xl-5 pb-3 pb-md-0' style={{backgroundColor: '#F0F0F0', lineHeight: '2'}}>
                                <div className='custom-font-size-heading mt-2 mt-md-2 mt-lg-3 mt-xxl-4' style={{color: '#4590B8'}} ><b>Our features</b></div>
                                    <div className='custom-font-size-text mt-2 mt-md-1 mt-lg-3 mt-xxl-4' style={{ textAlign: 'justify', textJustify: 'inter-word'}}>
                                        <ul className='m-1' style={{listStyle: 'square'}}>
                                            <li> 
                                                <b>Extensive knowledge</b> of International standards and regulatory
                                                requirements
                                            </li>
                                            <li>
                                                <b>Solid experience</b> of establishing, developing and implementing Risk management frameworks and practices
                                            </li>
                                            <li>
                                                <b>Tailored solutions</b> customized strategic initiatives aligned with your specific business objectives
                                            </li>
                                            <li>
                                                <b>Proactive approach </b>that helps you identify and mitigate potential threats before they impact your operations
                                            </li>
                                            <li>
                                                <b>Value for Investment</b> identifying risk opportunities for high-return investments
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                        
                            <div className='col-12 col-md-5 d-md-block d-none m-0 p-0'>
                                <img src={Pic3} alt="pic3" style={{maxWidth: '100%'}}/>
                            </div>

                        </div>
                    </div>
                    <div className='custom-font-size-heading px-5 mt-4' style={{color: '#4590B8'}}>
                       <b> Who we serve </b>
                    </div>
                    <div className='container-fluid w-100 m-0 p-0'>
                        <div className='row w-100 p-0 m-0' >
                            <div className='col-12 col-md-6 col-lg-4 m-0 px-5 pb-5 pt-4'>
                                <div className='d-block position-relative' >
                                    <img src={CustomerPic1} alt="Customer_Pic_1" className='rounded' style={{maxWidth: '100%'}}/>
                                    <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{color: 'white', width: '100%', textAlign: 'center'}} >
                                        <div className='h5 mb-3 py-1' style={{backgroundColor: '#003968'}}>
                                            Commercial bank
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 m-0 px-5 pb-5 pt-4'>
                                <div className=''>
                                    <div className='d-block position-relative' >
                                        <img src={CustomerPic2} alt="Customer_Pic_2" className='rounded' style={{maxWidth: '100%'}}/>
                                        <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{color: 'white', width: '100%', textAlign: 'center'}} >
                                            <div className='h5 mb-3 py-1' style={{backgroundColor: '#003968'}}>
                                                Microfinance
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 m-0 px-5 pb-5 pt-4'>
                                <div className='d-block position-relative' >
                                    <img src={CustomerPic3} alt="Customer_Pic_3" className='rounded' style={{maxWidth: '100%'}}/>
                                    <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{color: 'white', width: '100%', textAlign: 'center'}} >
                                        <div className='h5 mb-3 py-1' style={{backgroundColor: '#003968'}}>
                                            Brokerage
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 m-0 p-5 '>
                                <div className='d-block position-relative' >
                                    <img src={CustomerPic4} alt="Customer_Pic_4" className='rounded' style={{maxWidth: '100%'}}/>
                                    <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{color: 'white', width: '100%', textAlign: 'center'}} >
                                        <div className='h5 mb-3 py-1' style={{backgroundColor: '#003968'}}>
                                            PSP
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 m-0 p-5'>
                                <div className='d-block position-relative' >
                                    <img src={CustomerPic5} alt="Customer_Pic_5" className='rounded' style={{maxWidth: '100%'}}/>
                                    <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{color: 'white', width: '100%', textAlign: 'center'}} >
                                        <div className='h5 mb-3 py-1' style={{backgroundColor: '#003968'}}>
                                            VASP
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 m-0 p-5'>
                                <div className='d-block position-relative' >
                                    <img src={CustomerPic6} alt="Customer_Pic_6" className='rounded' style={{maxWidth: '100%'}}/>
                                    <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{color: 'white', width: '100%', textAlign: 'center'}} >
                                        <div className='h5 mb-3 py-1' style={{backgroundColor: '#003968'}}>
                                            Insurance
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                     {/*  
                    <div className='container-fluid w-100'>
                        <div className='bg-white px-1 row'>
                            <div className="col p-3" >
                                <div className='p-2' style={{backgroundColor: 'white', border: '5px solid #003968', borderRadius: '15px', minHeight: '320px'}}>
                                    <div className='h5' style={{color: '#4590B8'}}>
                                        Value of the services
                                    </div>
                                    <div style={{color: '#003968'}}>
                                        <div>
                                            We are helping organizations to:
                                        </div>
                                        <ul>
                                            <li>To solve a complex problem</li>
                                            <li>To achieve a strategic objective</li>
                                            <li>To reduce operational risk losses</li>
                                            <li>To be prepared to the upcoming regulatory changes</li>
                                            <li>To develop a solution for process improvements</li>
                                            <li>To improve the risk management capability of employees</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3" >
                                <div className='p-2' style={{backgroundColor: 'white', border: '5px solid #4590B8', borderRadius: '15px', minHeight: '320px'}}>
                                    <div className='h5' style={{color: '#4590B8'}}>
                                        Who we serve
                                    </div>
                                    <div style={{color: '#003968'}}>
                                        <div>
                                            We are serving companies operating to the following industries:   
                                        </div>
                                        <ul>
                                            <li>Financial service industry
                                                <ul>
                                                    <li>Commercial banks</li>
                                                    <li>Microfinance organizations</li>
                                                    <li>Insurance companies</li>
                                                    <li>Payment service providers</li>
                                                </ul>
                                            </li>
                                            <li>Telecommunication industry
                                                <ul>
                                                    <li>Mobile Network and Internet providers</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3"> 
                                <div className='p-2' style={{backgroundColor: 'white', border: '5px solid gray', borderRadius: '15px', minHeight: '320px'}}>
                                    <div className='h5' style={{color: '#4590B8'}}>
                                        Our features
                                    </div>
                                    <div style={{color: '#003968'}}>
                                        <div>
                                            Extensive knowledge of industry insights, best practices and regulatory requirements
                                        </div>
                                        <ul>
                                            <li>
                                                Solid experience of establishing, developing and implementing Risk management frameworks. It is including, but not limited to 
                                                <ul>
                                                    <li>Operational risk management</li>
                                                    <li>Business continuity and crisis management</li>
                                                    <li>Fraud Risk management</li>
                                                </ul>
                                            </li>
                                            <li>
                                                Solid experience of developing and implementing Enterprise-level Risk management initiatives.
                                            </li>
                                        </ul>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>*/}
                </div>
             
                <Footer/>
         
                


                
            </div>
        );
    }
}
    
export default Home;