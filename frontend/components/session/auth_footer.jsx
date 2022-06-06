import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AuthFooter = props => {
    return (
        <footer className="auth-footer">
            <div>
                <ul>
                    <li>
                        <a href="https://github.com/pierrenav13">
                            <button>
                                <FontAwesomeIcon icon={["fab", "github"]} />
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/pierre-navarin-709335223/">
                            <button>
                                <FontAwesomeIcon icon={["fab", "linkedin"]} />
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default AuthFooter;