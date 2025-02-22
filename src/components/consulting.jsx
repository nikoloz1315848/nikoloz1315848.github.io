import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import Picture2 from './data/Picture2.jpg';
import IstockPic1 from './data/iStock_pic_1.jpg';
import IstockPic2 from './data/iStock_pic_2.jpg';
import IstockPic3 from './data/iStock_pic_3.jpg';
import IstockPic4 from './data/iStock_pic_4.jpg';
import IstockPic5 from './data/iStock_pic_5.jpg';
import IstockPic6 from './data/iStock_pic_6.jpg';
class Consulting extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100 '>
                <Header/>
                {/*
                <img src={Picture2} alt="Picture2" className='w-100' />*/}
                
                <div className='pb-2 flex-grow-1'>{/*
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
*/}
                    <div className='container-fluid w-100 m-0 p-0' data-bs-offset="70" data-bs-root-margin="0px 0px -40%">
                        <div className='row w-100 p-0 m-0' >
                            <div className='col-12 col-md-6 col-lg-4 m-0 p-5'>
                                <div className='d-block position-relative' >
                                    <a href="#OperationalRiskManagement" >
                                        <img src={IstockPic1} alt="Istock_Pic_1" className='rounded' style={{maxWidth: '100%'}}/>
                                        <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{color: '#003968',width: '100%', textAlign: 'center'}} >
                                            <div className='h5 mb-3 py-1 Istock' style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: '#003968', borderWidth: '1px'}}>
                                                Operational Risk Management
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 m-0 p-5'>
                                <div className='d-block position-relative' >
                                    <a href="#EnterpriseRiskManagement">
                                        <img src={IstockPic2} alt="Istock_Pic_2" className='rounded' style={{maxWidth: '100%'}}/>
                                        <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{color:'#003968', width: '100%', textAlign: 'center'}} >
                                            <div className='h5 mb-3 py-1 Istock' style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: '#003968', borderWidth: '1px'}}>
                                                Enterprise Risk Management
                                            </div>
                                        </div> 
                                    </a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 m-0 p-5'>
                                <div className='d-block position-relative' >
                                    <a href="#Compliance">
                                        <img src={IstockPic3} alt="Istock_Pic_3" className='rounded' style={{maxWidth: '100%'}}/>
                                        <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{color:'#003968', width: '100%', textAlign: 'center'}} >
                                            <div className='h5 mb-3 py-1 Istock' style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: '#003968', borderWidth: '1px'}}>
                                                Regulatory compliance
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 m-0 p-5'>
                                <div className='d-block position-relative' >
                                    <a href="#FraudRiskManagement" >
                                        <img src={IstockPic4} alt="Istock_Pic_4" className='rounded' style={{maxWidth: '100%'}}/>
                                        <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{color:'#003968', width: '100%', textAlign: 'center'}} >
                                            <div className='h5 mb-3 py-1 Istock' style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: '#003968', borderWidth: '1px'}}>
                                                Fraud Risk Management
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 m-0 p-5'>
                                <div className='d-block position-relative rounded'  style={{borderStyle: 'solid', borderColor: '#003968', borderWidth: '1px'}} >
                                    <a href="#BusinessContinuityManagement">
                                        <img src={IstockPic5} alt="Istock_Pic_5" className='rounded' style={{maxWidth: '100%'}}/>
                                        <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{color: '#003968', width: '100%', textAlign: 'center'}} >
                                            <div className='h5 mb-3 py-1 Istock' style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: '#003968', borderWidth: '1px'}}>
                                                BCM & Crisis management
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 m-0 p-5'>
                                <div className='d-block position-relative' >
                                    <a href="#InformationSecurity">
                                        <img src={IstockPic6} alt="Istock_Pic_6" className='rounded' style={{maxWidth: '100%'}}/>
                                        <div className='position-absolute bottom-0 start-50 translate-middle-x' style={{color:'#003968', width: '100%', textAlign: 'center'}} >
                                            <div className='h5 mb-3 py-1 Istock' style={{backgroundColor: 'white', borderStyle: 'solid', borderColor: '#003968', borderWidth: '1px'}}>
                                                Information security
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid w-100 m-0 p-0'>
                        <div className='row w-100 p-0 m-0' id='EnterpriseRiskManagement' style={{scrollMarginTop: '70px'}}>
                            <div className='col-12 col-md-4 m-0 p-3'>
                                <img src={IstockPic2} alt="Istock_pic_2" className='rounded' style={{maxWidth: '100%'}}/>
                            </div>
                            <div className='col-12 col-md-8 col-xl-6 m-0 px-4 py-1 px-sm-5 py-sm-4'>
                                <div className='h1'>
                                    Enterprise Risk Management
                                </div>
                                <div>
                                    <div className='h5'>
                                        We support organizations to:
                                    </div>
                                    <ul style={{listStyle: 'square', textAlign: 'justify', textJustify: 'inter-word'}}>
                                        <li>Establish and develop Enterprise Risk management framework</li>
                                        <li>Design and improve Risk performance metrics: RAS, KPIs, KRIs, KCIs</li>
                                        <li>Design and develop <b>Risk data aggregation and Risk reporting</b> principles</li>
                                        <li>Perform Risk Maturity assessment against <b>International standards</b> (Basel, ISO, EBA, COSO) to identify areas for improvement</li>
                                        <li>Conduct a <b>Benchmarking analysis</b></li>
                                        <li>Design and develop Risk management <b>Strategic initiatives</b></li>
                                        <li>Conduct Internal control assessment and develop Internal control framework in compliance with <b>SOX requirements</b></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='row w-100 p-0 m-0' id='OperationalRiskManagement' style={{scrollMarginTop: '70px'}}>
                            <div className='col-12 col-md-4 m-0 p-3'>
                                <img src={IstockPic1} alt="Istock_pic_1" className='rounded' style={{maxWidth: '100%'}}/>
                            </div>
                            <div className='col-12 col-md-8 col-xl-6 m-0 px-4 py-1 px-sm-5 py-sm-4'>
                                <div className='h1'>
                                    Operational Risk Management
                                </div>
                                <div>
                                    <div className='h5'>
                                        We support organizations to:
                                    </div>
                                    <ul style={{listStyle: 'square', textAlign: 'justify', textJustify: 'inter-word'}}>
                                        <li>Establish and develop Operational Risk management <b>frameworks</b></li>
                                        <li>Design and implement Risk identification and assessment tools (RCSA, KRIs, KCIs, Loss data collection, Scenario analysis, etc.)</li>
                                        <li>Design and improve <b>Risk appetite metrics</b></li>
                                        <li>Perform Risk Maturity assessment against <b>International standards </b>(Basel, ISO, EBA, COSO) to identify areas for improvement</li>
                                        <li>Conduct a <b>Benchmarking analysis</b></li>
                                        <li>Develop implementation plans to the upcoming <b>Regulatory requirements</b></li>
                                        <li>Design and implement Risk management <b>Strategic initiatives</b></li>
                                        <li>Identify risk sources and <b>minimize financial losses</b></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='row w-100 p-0 m-0' id='BusinessContinuityManagement' style={{scrollMarginTop: '70px'}}>
                            <div className='col-12 col-md-4 m-0 p-3'>
                                <img src={IstockPic5} alt="Istock_pic_5" className='rounded' style={{maxWidth: '100%', borderStyle: 'solid', borderColor: '#003968', borderWidth: '1px'}}/>
                            </div>
                            <div className='col-12 col-md-8 col-xl-6 m-0 px-4 py-1 px-sm-5 py-sm-4'>
                                <div className='h1'>
                                    Business continuity Management
                                </div>
                                <div>
                                    <div className='h5'>
                                        We help organizations to:
                                    </div>
                                    <ul style={{listStyle: 'square', textAlign: 'justify', textJustify: 'inter-word'}}>
                                        <li>Establish and implement <b>Business continuity framework</b></li>
                                        <li>Design and develop <b>Business impact analysis</b></li>
                                        <li>Improve Business continuity program <b>activities</b></li>
                                        <li>Design and develop <b>Business continuity and disaster recovery plans</b></li>
                                        <li>Develop Incident response and <b>crisis response playbooks</b></li>
                                        <li>Establish and implement BCM <b>Testing program</b></li>
                                        <li>Revise and assess the <b>effectiveness of BCM program</b> and identify areas for improvement</li>
                                        <li>Design and develop <b>BC strategic initiatives</b></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='row w-100 p-0 m-0' id='Compliance' style={{scrollMarginTop: '70px'}}>
                            <div className='col-12 col-md-4 m-0 p-3'>
                                <img src={IstockPic3} alt="Istock_pic_3" className='rounded' style={{maxWidth: '100%'}}/>
                            </div>
                            <div className='col-12 col-md-8 col-xl-6 m-0 px-4 py-1 px-sm-5 py-sm-4'>
                                <div className='h1'>
                                    Compliance
                                </div>
                                <div>
                                    <div className='h5'>
                                        We support organizations to:
                                    </div>
                                    <ul style={{listStyle: 'square', textAlign: 'justify', textJustify: 'inter-word'}}>
                                        <li>Develop implementation plans for the upcoming <b>Regulatory requirements</b></li>
                                        <li>Design and establish Risk management frameworks (policies, procedures, guidelines, etc.) to meet RM requirements and to support <b>licensing process</b></li>
                                        <li>Design and develop the strategy for applying <b>strong customer authentication requirements</b></li>   
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='row w-100 p-0 m-0' id='FraudRiskManagement' style={{scrollMarginTop: '70px'}}>
                            <div className='col-12 col-md-4 m-0 p-3'>
                                <img src={IstockPic4} alt="Istock_pic_4" className='rounded' style={{maxWidth: '100%'}}/>
                            </div>
                            <div className='col-12 col-md-8 col-xl-6 m-0 px-4 py-1 px-sm-5 py-sm-4'>
                                <div className='h1'>
                                    Fraud Risk Management
                                </div>
                                <div>
                                    <div className='h5'>
                                        We support organizations to:
                                    </div>
                                    <ul style={{listStyle: 'square', textAlign: 'justify', textJustify: 'inter-word'}}>
                                        <li>Design and establish <b>Fraud risk</b> management framework (policies, procedures, guidelines, etc.)</li>
                                        <li>Develop external <b>fraud prevention strategies</b></li>
                                        <li>Design and implement fraud risk <b>prevention and detection indicators</b></li>
                                        <li>Define and develop <b>fraud risk evaluation metrics</b> and monitoring tools</li>
                                        <li>Define and develop <b>fraud event response</b> procedures and guidelines</li>
                                        <li>Develop strategies for transferring <b>fraud risk</b></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='row w-100 p-0 m-0' id='InformationSecurity' style={{scrollMarginTop: '70px'}}>
                            <div className='col-12 col-md-4 m-0 p-3'>
                                <img src={IstockPic6} alt="Istock_pic_6" className='rounded' style={{maxWidth: '100%'}}/>
                            </div>
                            <div className='col-12 col-md-8 col-xl-6 m-0 px-4 py-1 px-sm-5 py-sm-4'>
                                <div className='h1'>
                                    Information security
                                </div>
                                <div>
                                    <div className='h5'>
                                        We support organizations to:
                                    </div>
                                    <ul style={{listStyle: 'square', textAlign: 'justify', textJustify: 'inter-word'}}>
                                        <li>Design and develop <b>Information security frameworks</b> (policies, procedures, guidelines, etc.) in accordance with international standards (NIST, ISO) </li>
                                        <li>Design and develop <b>Risk Management framework</b> in accordance with NIST standards, which aims to establish and integrate risk identification, assessment, treatment and monitoring processes</li>
                                        <li>Design and develop <b>TPRM and outsourcing risk management</b> framework, including TP assessment methodology and risk treatment procedures</li>
                                        <li>Design and develop <b>cyber incidents and data-breach</b> response plans and playbooks</li>
                                        <li>Develop implementation plans for <b>Regulatory and legal requirements</b></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Footer/>

            </div>
        );
    }
}
 
export default Consulting;
