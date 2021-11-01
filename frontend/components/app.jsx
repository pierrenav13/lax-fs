import React from "react";
import { Route } from "react-router";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../utils/route_util";

const App = () => (
    <div>
        <header>
            <h1>Lax</h1>
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />

    </div>
);

export default App;