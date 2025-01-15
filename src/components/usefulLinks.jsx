import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';


class UsefulLinks extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100 '>
                <Header/>
                <div className='pb-2 px-5 flex-grow-1'>
                    <h1>Useful Links</h1>
                    <br />
                    <div>The principles for the sound management of operational risk</div>
                    <div>
                        <a href="https://www.bis.org/bcbs/publ/d515.htm">https://www.bis.org/bcbs/publ/d515.htm</a>
                    </div>
                    <div>Principles for operational resilience</div>
                    <div>
                        <a href="https://www.bis.org/bcbs/publ/d516.htm">https://www.bis.org/bcbs/publ/d516.htm</a>
                    </div>
                    <div>Principles for enhancing corporate governance</div>
                    <div>
                        <a href="https://www.bis.org/publ/bcbs176.htm">https://www.bis.org/publ/bcbs176.htm</a>
                    </div>
                    <div>Internal control framework</div>
                    <div>
                        <a href="https://www.eba.europa.eu/publications-and-media/press-releases/eba-publishes-its-final-guidelines-internal-governance">https://www.eba.europa.eu/publications-and-media/press-releases/eba-publishes-its-final-guidelines-internal-governance</a>
                    </div>
                    <div>Digital Operational Resilience Act (DORA)</div>
                    <div>
                        <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554">https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554</a>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
 
export default UsefulLinks;