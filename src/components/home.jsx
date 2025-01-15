import React, { Component } from 'react';
import CustomSlider from './custom.slider';
import images from './data/images';
import Header from './header';
import Footer from './footer';


class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100 '>
                
                <Header />
                <div className='px-sm-5'>
                    <div className='px-md-5'>
                        <div className='px-lg-5'>
                            <div className='px-xl-5'>
                                <CustomSlider>
                                    {images.map((image, index) => {
                                    return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                                    })}
                                </CustomSlider>
                            </div>   
                        </div>
                    </div>
                    
                </div>
                
                


                
                <div className='pb-2 flex-grow-1'>
                    <div className='custom-font-size-heading px-4 px-sm-5 mt-4' style={{fontFamily: 'gillsansmt',  color: '#4590B8'}} >Introduction</div>
                    
                    <div className='custom-font-size-text px-4 px-sm-5 mt-2' style={{fontFamily: 'gillsansmt' ,color: '#003968'}}>
                        <ul style={{listStyle: 'square'}}>
                            <li> 
                                We provide <b> Risk Management Consulting and Training services </b> to the financial institutions. 
                            </li>
                            <li>
                                Our in-depth understanding of <b>Risk management best practices </b> and regulatory requirements support financial institutions to enhance risk management contribution to achieve strategic objectives. 
                            </li>
                            <li>
                                We strongly believe that Proactive and comprehensive risk management is the <b>Competitive advantage</b>.
                            </li>
                        </ul>
                    </div>

                    <div className='custom-font-size-heading px-4 px-sm-5 mt-4' style={{fontFamily: 'gillsansmt', color: '#4590B8'}}>
                        Our mission
                    </div>
                   
                    <div className='custom-font-size-text px-4 px-sm-5 mt-2' style={{fontFamily: 'gillsansmt', color: '#003968'}}>
                        To support financial institutions in building a <b>Strong Risk Culture</b> and encourage them to prioritize <b>Proactive Risk Management</b>.
                    </div>
                    <br /><br />
                </div>
             
                <Footer/>
         
                


                
            </div>
        );
    }
}
    
export default Home;