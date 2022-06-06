import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SplashFooter extends Component {
    render(){
        return(
            <footer className="splash-footer">
                <section className="footer-lists">
                    <nav>
                        <ul>
                            <li>
                                PROFICIENCIES
                            </li>
                            <li>
                                Ruby
                            </li>
                            <li>
                                Ruby on Rails
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                React/Redux
                            </li>
                            <li>
                                SQL ( PostgreSQL )
                            </li>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS/SCSS
                            </li>
                        </ul>
                        
                        <ul>
                            <li>OTHER PROJECTS</li>
                            <li>
                                <a href="https://stu-dash.herokuapp.com/" title="MERN">
                                    StudyDash
                                </a>
                            </li>
                            <li>
                                <a href="https://pierrenav13.github.io/MedievalMelee/" title="Vanilla JS Game">
                                    Medieval Melee
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                SOFTWARE ENGINEER
                            </li>
                            <li>
                                Pierre Navarin
                            </li>
                            <li>
                                Email: pnavarin@gmail.com
                            </li>
                        </ul>
                    </nav>
                </section>
                <section className="footer-nav">
                    <nav>
                        <ul>
                            <li>
                                    Slack Clone
                            </li>
                            <li>
                                <a href="https://slack.com/">
                                    Link to Slack
                                </a>
                            </li>
                            {/* <li>
                                <a href="https://slack.com/">
                                    Site for Skill Demonstration Only
                                </a>
                            </li> */}
                            
                        </ul>
                        <ul>
                            <li>
                                <a href="https://github.com/pierrenav13">
                                    <FontAwesomeIcon icon={["fab", "github"]} />
                                </a>
                            </li>
                            <li>
                                <a href="https://angel.co/u/pierre-navarin">
                                    <FontAwesomeIcon icon={["fab", "angellist"]} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/pierre-navarin-709335223/">
                                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </footer>
        )
    }
}

export default SplashFooter;