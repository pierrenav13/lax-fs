import React from "react";
import { Link } from "react-router-dom";
import ChatRoom from "../message/chat_room";
import SidebarContainer from "../sidebar/sidebar_container";

const Navbar = ({ currentUser, logout }) => {
    const links = () => (
        <nav className='log-sign'>
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <div className='greeting'>
            <div className='log-sign'>
                <a onClick={logout}>Log Out</a>
            </div>
            <div className='sidebar'>
                <SidebarContainer />
                <div className='chat'><ChatRoom /></div>
            </div>
            
            
        </div>
    );

    return currentUser ? personalGreeting() : links();
};

export default Navbar;