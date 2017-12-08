import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import DashboardHeader from './components/dashboardHeader';
class Link extends Component {
	componentWillMount() {
		if (!this.props.isLogged) {
			this.props.history.push('/');
		}
	}

	render(){
		const currentEmail = this.props.currentUser.emails[0].address;
		return(
			<div>
				<DashboardHeader email={currentEmail} history={this.props.history}/>
				<div className="container">
					<h1>Your Dashboard</h1>
					<h4>Hello you</h4>
				</div>
			</div>
		)
	}
}
export default withTracker(() => {
  return {
		isLogged: !!Meteor.user(),
		currentUser: Meteor.user(),
  };
})(Link);