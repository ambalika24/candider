import React from 'react';
import './Footer.css';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
function Footer() {
    return (
        <div className="container">
            <div className="first">
                <a href="/"><DashboardIcon className="home" style={{color:"black"}} />
                </a>
                <div>Home</div>
            </div>
            <div className="first">
                <a href="/"><ChatBubbleIcon className="forum" style={{color:"grey"}}/>
                </a>
                <div>Forum</div>
            </div>
            <div className="first">
            <a href="/"><PersonIcon className="profile" style={{color:"grey"}}/>
                </a>
                <div>Profile</div> 
            </div>
        </div>
    );
        
}

export default Footer;
