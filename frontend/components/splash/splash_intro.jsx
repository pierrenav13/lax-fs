import React, { Component } from "react";
import { Link } from "react-router-dom";
// import introImgUrl from "../../../app/assets/images/splash/demo_splash.jpg"


class SplashIntro extends Component {
    constructor(props) {
        super(props);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleDemo(e){
        if (this.props.loggedIn) {
            this.props.history.push("/")
        } else {
            this.props.loginDemo(this.props.history);
        }
    }

    render(){
        return(
            <div className="splash-intro">
                <section className="intro-text">
                    <h1>Lax is your digital chill spot.</h1>
                    <p>Transform the way you chat with your friends with one place for everyone and everything you could want to have a good time chatting with new and old friends.</p>
                    <Link to="/signup">
                        <button className="btn-blue">
                            <span>SIGN UP FOR FREE</span>
                        </button>
                    </Link>
                    <Link to="#">
                        <button onClick={ this.handleDemo }
                            className="btn-white">
                            <span>TRY A DEMO</span>
                        </button>
                    </Link>
                </section>
                <figure className="intro-img">  
                    <img src={window.splashimage} alt=""/>
                </figure>
            </div>
        )
    }
}

export default SplashIntro;