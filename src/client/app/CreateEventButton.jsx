import React from 'react';
import {render} from 'react-dom';
import FriendsListItem from './FriendsListItem.jsx';
import Modal from 'boron/DropModal';

//trying to force a webpack build +++++
class CreateEventButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      what: '',
      where: '',
      when: '',
      min: '',
      invitees: [],
    }
  }
  
  showModal () {
    this.refs.modal.show();
  }

  hideModal () {
    this.refs.modal.hide();
  }

  callback (event) {
    console.log(event);
  }

  handleChange (name, event) {
    let newState = {};
    newState[name] = event.target.value;
    this.setState(newState);
  }

  handleClick (event) {

  }

  render () {
    return (
      <div>
        <button onClick={this.showModal.bind(this)} className="btn-danger col-md-4 col-md-offset-4">Create Event</button>
        <Modal ref="modal">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Title</h4>
                    </div>
                    <div className="col-md-9">
                      <input 
                        value={this.state.title} 
                        type="text"
                        onChange={this.handleChange.bind(this, 'title')} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h4>What?</h4>
                    </div>
                    <div className="col-md-9">
                      <input 
                        value={this.state.what}
                        onChange={this.handleChange.bind(this, 'what')}
                        type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Where?</h4>
                    </div>
                    <div className="col-md-9">
                      <input 
                        value={this.state.where}
                        onChange={this.handleChange.bind(this, 'where')}
                        type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h4>When?</h4>
                    </div>
                    <div className="col-md-9">
                      <input 
                        value={this.state.when}
                        onChange={this.handleChange.bind(this, 'then')}
                        type="text" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <h4>Min?</h4>
                    </div>
                    <div className="col-md-9">
                      <input 
                        value={this.state.min}
                        onChange={this.handleChange.bind(this, 'min')}
                        type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Friends</h4>
                {
                  this.props.friends.map( friend => (
                    <FriendsListItem 
                      friend={friend}/>
                    )
                  )
                }
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <h4>Description: </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button type="submit">See Who's In!</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default CreateEventButton;