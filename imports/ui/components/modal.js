import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.goBack}>Retour</button>
            <button type="button" className="btn btn-primary" onClick={this.props.connexion}>Connexion</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}