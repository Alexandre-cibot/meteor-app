import React, { Component } from 'react';

export default class dashboardHeader extends Component {
  onLogout = (e) => {
    e.preventDefault();
    Meteor.logout(() => {
      this.props.history.push('/');
    });    
  }

  render() {
    return (
      <header className="" style={Styles.header}>
      <div>
        <h3 style={Styles.title}>Bienvenue <span style={Styles.titleEmail}>{this.props.email}</span></h3>
        <button className="btn btn-primary" onClick={this.onLogout}>Log Out</button>
      </div>
        <ul style={Styles.nav}>
          <li>
            <a className="white" href="#">Home</a>
          </li>
          <li>
            <a className="white" href="#">About</a>
          </li>
          <li>
            <a className="white" href="#">Contact</a>
          </li>
        </ul>
    </header>
    )
  }
}

const Styles = {
  header: {
    backgroundColor:'grey',
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '15px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    margin: '0',
  },
  titleEmail: {
    fontSize: '15px'
  }
}