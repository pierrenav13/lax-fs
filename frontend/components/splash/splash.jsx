import React, { Component } from "react";
import SplashIntro from "./splash_intro";
import SplashFooter from "./splash_footer";


class Splash extends Component {
    render(){
        const { loggedIn, loginDemo, history } = this.props;
        return(
            <div className="splash">
                <SplashIntro loggedIn={loggedIn} loginDemo={loginDemo} history={history} />
                <SplashFooter />
            </div>
        )
    }
}

export default Splash;