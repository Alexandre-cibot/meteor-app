import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from './components/modal';
import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
    constructor(props){
        super(props);

        this.state = {
						error: '',
						success: false
        };
    }

    onSubmit = (e) => {
        e.preventDefault();

         let fullname = this.refs.fullname.value.trim();
         let email = this.refs.email.value.trim();
         let password = this.refs.password.value.trim();
				console.log(fullname, email, password);
         Accounts.createUser({ 
					email,
					password,
					profile: {fullname}
					}, (err) => {
            if (err) {
							console.log("Error", err)
              this.setState({
                error: err.reason
              })
						}
						else {
							console.log("Account well created.")
							this.handleSuccess();
						}
         });
    }
		handleSuccess() {
			this.setState({succeed: true});
		}
		connexion = () => {
			this.props.history.push('/dashboard')
		}
		goBack = () => {
			this.props.history.push('/')
		}
    render(){
         return(
            <div className="container card">
							{this.state.succeed ? <Modal connexion={this.connexion} goBack={this.goBack} /> : "" }
                <h1>Sign Up</h1>

                { this.state.error ? <div className="alert alert-danger" role="alert">{this.state.error}</div> : undefined}

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Fullname:</label>
                        <input ref="fullname" type="text" name="name" placeholder="Fullname" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input ref="email" type="email" name="email" placeholder="Email" className="form-control"/>
                    </div>

                   <div className="form-group">
                       <label>Password:</label>
                       <input ref="password" type="password" name="password" placeholder="Password" className="form-control"/>
                   </div>
                    <button className="btn btn-primary">Create Account</button>
                </form>
                <hr/>
                <Link to="/">Have already Account?</Link>
            </div>
        )
    }
}

export default withRouter(Signup);