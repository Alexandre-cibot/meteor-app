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
      <div style={Styles.logo}>
        <h3 style={{margin:0}}>Dashboard</h3>
      </div>
      <div style={{textAlign:'right', padding: '15px',}}>
        <h3 style={Styles.title}><span style={Styles.titleEmail}>{this.props.email}</span></h3>
        <button className="btn btn-primary btn-sm" style={{marginTop: '5px'}} onClick={this.onLogout}>Log Out</button>
      </div>
    </header>
    )
  }
}

const Styles = {
  header: {
    backgroundColor:'#41396A',
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    margin: '0',
    color:'white',
  },
  titleEmail: {
    fontSize: '15px'
  },
  logo: {
    width: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FAE82F',
  }
}