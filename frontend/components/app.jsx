import React from "react";
import { Route } from "react-router";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../utils/route_util";
import { Link } from "react-router-dom";
import NavBarContainer from "./navbar/navbar_container";

const App = () => (
    <div>
        <header>
            <Link to='/'>
                <h1>Lax</h1>
            </Link>
            <NavBarContainer />
            
            {/* <Link to='/login'>
                Login
            </Link>
            <br />
            <Link to='/signup'>
                Signup
            </Link> */}

        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />

    </div>
);

export default App;