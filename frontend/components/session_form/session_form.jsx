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
        let hideEmail = false;
        if (this.props.formType === 'Log In'){
            hideEmail = true;
        }
        
        return (
            <div className='s-form'>
                <h3 className='s-head'>{this.props.formType} to Lax</h3>
                <br />
                <div className='s-message'>We suggest using the <span className="bold">email address you use at work.</span></div>
                <div>{this.renderErrors()}</div>
                
                <form className='s-f' onSubmit={this.handleSubmit}>
                    <br />
                    <label >Email:
                        <br />
                        <input className='s-input' type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <br />
                    <label hidden={hideEmail}>Username:
                        <br />
                        <input className='s-input' type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <br />
                    <label>Password:
                        <br />
                        <input className='s-input' type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br />
                    <br />
                    <button className='s-button' hidden={!hideEmail}onClick={this.demoUser}>Demo User</button>
                    <button className='s-button' type="submit">{this.props.formType} with Email</button>
                </form>
                {/* <Link to={`/${path}`}>{buttonName}</Link> */}
            </div>
        )
    }
}

export default SessionForm;