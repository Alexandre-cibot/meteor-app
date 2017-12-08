import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: '',
        }
    }

    onLogIn = (e) => {
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                this.setState({
                    error: err.reason
                });
            }
            else {
                this.props.history.push('/dashboard')
            }   
        })
    }

    render(){
        return(
            <div className="container card">
                <h1>Login</h1>
                { this.state.error ? <div className="alert alert-danger" role="alert">{this.state.error}</div> : undefined}
                <form>
                    <div className="form-group">
                        <label>Email:</label>
                        <input ref="email" type="email" name="email" className="form-control" defaultValue="alexandre.cibot@gmail.com"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input ref="password" type="password" className="form-control" defaultValue="xxx"/>
                    </div>
                    <button className="btn btn-primary" onClick={this.onLogIn}>Log In</button>
                </form>
                <hr/>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link> now!</p>
            </div>
        )
    }
}

export default withRouter(Login);