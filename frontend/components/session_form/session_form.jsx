import { Link } from "react-router-dom";
import React from "react";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
        }
    }

    render() {
        const path = this.props.formType === 'Log In' ? 'signup' : 'login'
        const buttonName = path === 'signup' ? 'Sign Up' : 'Log In'
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <input type="submit" value={this.props.formType} />
                </form>
                <Link to={`/${path}`}>{buttonName}</Link>
            </div>
        )
    }
}

export default SessionForm;