import React from "react";
import { Link, useHistory } from "react-router-dom";
import LaunchButton from "./launch_button";

export default props => {
    return (
    <div className={props.location === "/welcome" ? "splash-header" : "auth-header"}>
        <figure id="logo-button">
            <Link to="/welcome">
                <i className="fas fa-couch"></i>
                <span>lax</span>
            </Link>
        </figure>
        <nav className="main-header-nav">
            <ul className="nav-menu-list">
                <li>
                    <a href="https://github.com/pierrenav13">Github</a>
                </li>
                <li>
                        <a href="https://www.linkedin.com/in/pierre-navarin-709335223/">LinkedIn</a>
                </li>
            </ul>
            {props.loggedIn ? (
                <div className="nav-btns logged-in">
                    <LaunchButton history={useHistory()} logout={props.logout} />
                </div>
                ) : (
                    <div className="nav-btns logged-out">
                        { props.location === "/welcome" ? (
                            <>
                                <Link to="/login">Sign in</Link>
                                <br/>
                                <Link to="/signup">
                                    <button className="btn-blue">
                                        SIGN UP
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>
                                {/* <Link to="/signup">
                                    <button className="auth signup">
                                        Create a new account
                                    </button>
                                </Link>
                                <Link to="/login">
                                    <button className="auth signin">
                                        Sign in
                                    </button>
                                </Link> */}
                            </>
                        )}
                    </div>
                )}
            </nav>
    </div>
)}