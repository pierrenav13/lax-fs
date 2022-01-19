import React from "react";
import { Route } from "react-router";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import { Link } from "react-router-dom";
import NavBarContainer from "./navbar/navbar_container";
import ChannelViewContainer from "./channels/channel_view_container";

const App = () => (
    <div>
        <header>
            {/* <Link to='/'>
                <h1 className='title'>Lax</h1>
            </Link> */}
            <NavBarContainer id='nav-comp'/>
        </header>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/channels/:channelId" component={ChannelViewContainer} />
        {/* <Route path="/channel/:channelId" component={NavBarContainer} /> */}
    </div>
);

export default App;