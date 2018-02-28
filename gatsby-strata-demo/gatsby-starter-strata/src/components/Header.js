import React from 'react';

import Footer from './Footer';
import avatar from '../assets/images/avatar_1.jpg';

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Angelina Nwin</strong></h1> 
                    <h1>artist</h1>
                    <h1>yogi</h1>
                    <h1>adventurer</h1>
                    <h1>expert in smiles</h1>
                </div>
                <Footer />
            </header>
        );
    }
}

export default Header
