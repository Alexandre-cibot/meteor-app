import React, { Component } from 'react';

export default class Sidebard extends Component {
  constructor() {
    super();
    this.state = {
      selected: "classes",
    }
  }
  isSelected = (string) => {
    if(this.state.selected === string) {
      return 'selected';
    };
  }
  select = (string) => {
    this.setState({selected: string});
  }
  render() {
    return (
      <div className="sidebar">
        <ul style={Styles.ul}>
          <li className={this.isSelected('classes')} onClick={() => this.select('classes')}>
            <img src='/assets/classes.png' />
            <p>Mes classes</p>
          </li>
          <li className={this.isSelected('notes')} onClick={() => this.select('notes')}>
            <img src='/assets/notes.png' />
            <p>Noter les éléves</p>
          </li>
          <li className={this.isSelected('devoirs')} onClick={() => this.select('devoirs')}>
            <img src='/assets/devoirs.png' />
            <p>Devoirs</p>
          </li>
          <li className={this.isSelected('calendrier')} onClick={() => this.select('calendrier')}>
            <img src='/assets/calendrier.png' />
            <p>Calendrier</p>
          </li>
        </ul>
      </div>
    )
  }
}

const Styles = {
  ul: {
    height: '50%',
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 0
  }
}