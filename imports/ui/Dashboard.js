import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import DashboardHeader from './components/dashboardHeader';
import Sidebar from './components/sidebar';
class Link extends Component {
	componentWillMount() {
		if (!this.props.isLogged) {
			this.props.history.push('/');
		}
	}

	render() {
		const currentEmail = this.props.currentUser ? this.props.currentUser.emails[0].address : null;
		return(
			<div style={{height:'100%'}}>
				<DashboardHeader email={currentEmail} history={this.props.history}/>
				<div style={Styles.main}>
					<Sidebar />
					<div className="display">
						<h1>Mes classes</h1>
						<h4>Hello you</h4>
					</div>
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

const Styles = {
	main: {
		height:'100%',
		display:'flex',
		flexDirection: 'row',
	}
}