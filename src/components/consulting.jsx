import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import Picture2 from './data/Picture2.jpg';

class Consulting extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100 '>
                <Header/>
                <img src={Picture2} alt="Picture2" className='w-100' />
                <div className='pb-2 flex-grow-1'>
                    <div className='h2 px-5 mt-4' style={{fontFamily: 'gillsansmt' ,color: '#4590B8'}}>
                        Consulting services
                    </div>
                    <div className='px-5 mt-4' style={{fontFamily: 'gillsansmt' ,color: '#003968'}}>
                        We offer consulting and supporting services to commercial banks and microfinance institutions to
                        enhance non-financial risk management capabilities. Our services include:
                    </div>
                    <div className='px-5 mt-4' style={{fontFamily: 'gillsansmt' ,color: '#003968'}}>
                        <ul className='row' style={{listStyle: 'square'}}>
                            <li className='col-12 m-2 col-sm-6'>Competitive benchmarking</li>
                            <li className='col-12 m-2 col-sm-5'>Functional benchmarking</li>
                            <li className='col-12 m-2 col-sm-6'>Process benchmarking</li>
                            <li className='col-12 m-2 col-sm-5'>Design Risk management strategy initiatives</li>
                            <li className='col-12 m-2 col-sm-6'>Support in the development of Implementation plans</li>
                            <li className='col-12 m-2 col-sm-5'>Solution development and “To be” models based on best practices
                            </li>
                        </ul>
                    </div>
                </div>

                <Footer/>

            </div>
        );
    }
}
 
export default Consulting;
