import React, { Component } from 'react';
import HomeLogo from '../images/HomeLogo.png';
import HomeTop from '../images/HomeTop.png';
//import {Link} from 'react-router-dom';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid text-center m-0">
                <div className="container-fluid">
                <img className="img-fluid w-50" src={HomeTop} alt=""/>
                </div>
                <img className="img-fluid" src={HomeLogo} alt=""/>
                <h1>Music App</h1>
                <p>La música que nos gusta al alcance de todos.</p>
            </div>
        );
    }
}
 
export default Home;