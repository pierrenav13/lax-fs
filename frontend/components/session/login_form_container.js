import { connect } from 'react-redux';
import { loginUser, loginDemo, purgeErrors } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = state => {
    const user = { username: "", email: "", password: "" }
    let errors = {}
    if(state.errors){
        errors = [].concat(...Object.values(state.errors))
    }
    return {
        user,
        errors,
        formType: 'Sign in'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(loginUser(user)),
        loginDemo: () => dispatch(loginDemo()),
        purgeErrors: () => dispatch(purgeErrors()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);