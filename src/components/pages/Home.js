// Dependencies
import React, { Component } from 'react';
// Assets
import store from '../../stored/store';
// Common
import ModalForm from '../common/ModalForm';
// Firebase
import firebase from 'firebase/app';
import 'firebase/database';


class Home extends Component {

  constructor() {
    super();

    this.state = {
      user: null,
      item: null,
      events: null
    };

  }

  // Methods

  componentWillMount() {
    
    store.subscribe(() => {
      this.setState({ user: store.getState().user });
    });

    firebase.database().ref('/events/').once('value').then((snapshot) => {
      this.setState({ events: snapshot.val() })
    });

  }

  // Functions

  updateDatesModal(item) {
    this.setState({ item })
  }

  renderEvents() {
    if (this.state.events) {
      return (
        <div className="row">
          { Object.values(this.state.events).map((item, key) =>

            <div className="col-md-4 mb-4" key={ key }>
              <div className="card bg-light mt-2 mb-2">
                <img className="card-img-top" src={ item.url } alt="" />
                <div className="card-body">
                  <h4 className="card-title">{ item.title }</h4>
                  <div className="tourname">{ item.subtitle }</div>
                  <div className="date">{ item.date }</div>
                  <div className="location bold">{ item.city }</div>
                  <div className="rip"></div>
                  <p className="card-text">{ item.text }</p>
                  <div className="bottom">
                    <a className="buy" href="/" onClick={() => this.updateDatesModal(item)} data-toggle="modal" data-target="#modalSubscriptionForm">COMPRAR TICKET</a>
                  </div>
                </div>
              </div>
            </div>
   
          )}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container py-4">
        <ModalForm 
          user={ this.state.user }
          item={ this.state.item }
        />
        { this.renderEvents() }

      </div>
    );
    
  }

}

export default Home;