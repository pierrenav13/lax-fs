import React from "react";
import { Link } from "react-router-dom";
import SidebarContainer from "../sidebar/sidebar_container";

const Navbar = ({ currentUser, logout }) => {
    const links = () => (
        <nav>
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const personalGreeting = () => (
        <div >
            {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
            <button onClick={logout}>Log Out</button>
            <SidebarContainer />
        </div>
    );

    return currentUser ? personalGreeting() : links();
};

export default Navbar;