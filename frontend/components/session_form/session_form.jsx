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
                <h3>{this.props.formType} to Lax</h3>
                <br />
                <div>{this.renderErrors()}</div>
                
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <label hidden={hideEmail}>Email:
                        <br />
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <br />
                    <label>Username:
                        <br />
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <br />
                    <label>Password:
                        <br />
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br />
                    <br />
                    <button hidden={!hideEmail}onClick={this.demoUser}>Demo User</button>
                    <input type="submit" value={this.props.formType} />
                </form>
                {/* <Link to={`/${path}`}>{buttonName}</Link> */}
            </div>
        )
    }
}

export default SessionForm;