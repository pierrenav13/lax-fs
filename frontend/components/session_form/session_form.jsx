import { Link } from "react-router-dom";
import React from "react";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
        }
    }

    demoUser(){
        this.setState({ email: 'demo@email.com', username: 'demo', password: '123456' });
        const demoUser = Object.assign({}, this.state);
        this.props.processForm(demoUser)
    }

    renderErrors(){
        const errors = this.props.errors.session
        if( errors.length > 0){
            return (
                errors
            )
        } else {
            return ''
        }
    }

    render() {
        const path = this.props.formType === 'Log In' ? 'signup' : 'login'
        const buttonName = path === 'signup' ? 'Sign Up' : 'Log In'
        let demo = '';
        
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <div>{this.renderErrors()}</div>
                
                <form onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <button onClick={this.demoUser}>DemoUser</button>
                    <input type="submit" value={this.props.formType} />
                </form>
                <Link to={`/${path}`}>{buttonName}</Link>
            </div>
        )
    }
}

export default SessionForm;