import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import './Navigation.css';
import Service from './Service'; 

class Navigation extends Component {
  render() {
      const sections=['Home','About','Category','Services','Login','SignUp'];
      const navLink=sections.map(section =>
      {
           return(
                <li><a href="#">{section}</a></li>
           )
      });
    return (
       <nav>
            <div className="logo"></div>   
             <ul>
                {navLink}
                 
            </ul>        
       </nav>
        
    );
  }
}

export default Navigation;
