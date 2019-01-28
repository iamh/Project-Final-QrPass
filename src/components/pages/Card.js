// Dependencies
import React, { Component } from 'react';
// Firebase
import firebase from 'firebase/app';
import 'firebase/database';

class Card extends Component {

  constructor() {
    super();
    this.state = {
      card: '',
      token: ''
    }

  }
  // Methods 
  
  componentDidMount() {
    const { match: {params}} = this.props;
    firebase.database().ref('/cards/'+ params.token +'/').once('value').then((snapshot) => {
      this.setState({ 
        card: snapshot ? snapshot.val() : '',
        token: params ? params.token : ''   
      })
    });
  }

  updateAccess() {
    if (this.state.card && this.state.token) {

      if (this.state.card.access === 'si') {
        firebase.database().ref('/cards/'+ this.state.token +'/').update({access: 'no'});
        return <h3 className="text-success text-center mb-4"> Acceso Permitido </h3>
      } else {
        return <h3 className="text-danger text-center mb-4"> Acceso Denegado </h3>
      }

    }
  }


  render() {

    return (
      <div className="row py-4">
        <div className="col-md-4 m-auto">
          <div className="card bg-light mt-2 mb-2">
            <img className="card-img-top" src={ this.state.card.photoEvent } alt="" />
            <div className="card-body">
              { this.updateAccess() }
              <h4 className="card-title">{ this.state.card.titleEvent }</h4>
              <div className="date">{ this.state.card.dateEvent }, { this.state.card.hourEvent }</div>
              <div className="location bold">{ this.state.card.cityEvent }</div>
              <div className="rip"></div>
              <h5 className="card-title"> Datos del usuario </h5>
              <div className="">{ this.state.card.fullName }</div>
              <div className="">{ this.state.card.email }</div>
              <div className="">{ this.state.card.address }</div>
              <div className="">{ this.state.card.city }</div>
              <div className="">{ this.state.card.telf }</div>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default Card;