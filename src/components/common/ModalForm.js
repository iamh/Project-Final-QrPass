// Dependencies
import React, { Component} from 'react';
// Firebase
import firebase from 'firebase/app';
import 'firebase/database';


class ModalForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      uid: '',
      fullName: '',
      address: '',
      city: '',
      email: '',
      telf: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEvents = this.handleEvents.bind(this);

  }

  // Methods
  // Este metodo esperará a recibir nuevas props de un componente padre para ejecutarse. 
  componentWillReceiveProps (props) {
		this.setState({ 
      isLogin: props.user ? true : false,
      uid: props.user ? props.user.uid : '',
      fullName: props.user ? props.user.displayName: '',
      email: props.user ? props.user.email : '',
      titleEvent: props.item ? props.item.title : '',
      categoryEvent: props.item ? props.item.category : '',
      photoEvent: props.item ? props.item.url : '',
      cityEvent: props.item ? props.item.city : '',
      dateEvent: props.item ? props.item.date : '',
      hourEvent: props.item ? props.item.hour : ''
    });
  }

  // Functions //

  handleChange = (e) => {
    e.preventDefault();
    
    this.setState({
      fullName: this.refs.fullName.value,
      address: this.refs.address.value,
      city: this.refs.city.value,
      email: this.refs.email.value,
      telf: this.refs.telf.value
    })
  }

  handleEvents = (e) => {
    e.preventDefault();
    console.log('Saving in firebase...');

    // Get a key for a new Workout.
    const newCardsKey = firebase.database().ref('/cards/').push().key

    const data = {
      key: newCardsKey,
      fullName: this.state.fullName,
      address: this.state.address,
      city: this.state.city,
      email: this.state.email,
      telf: this.state.telf,
      categoryEvent: this.state.categoryEvent,
      titleEvent: this.state.titleEvent,
      cityEvent: this.state.cityEvent,
      photoEvent: this.state.photoEvent,
      dateEvent: this.state.dateEvent,
      hourEvent: this.state.hourEvent,
      access: 'si',
      dateTicket: new Date().toJSON().slice(0,10)
    }

    const updates = {}
    updates['/cards/' + newCardsKey] = data;
    if (this.state.isLogin) {
      updates['/registered/' + this.state.uid +'/' + newCardsKey] = data;
    }
    firebase.database().ref().update(updates);
    setTimeout(() => { window.location.reload(true) }, 750);
   
  }
  

  render() {
    
    return (

      <div className="modal fade" id="modalSubscriptionForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">{ this.state.categoryEvent }</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <form onSubmit={ this.handleEvents }>
              <div className="modal-body mx-3">
                <div className="md-form mb-2">
                  <label htmlFor="validationDefault01" >Nombre Completo:</label>
                  <input type="text" ref="fullName" className="form-control" minLength="10" id="validationDefault01" value={ this.state.fullName } onChange={ this.handleChange } disabled={this.state.isLogin} required/> 
                </div>
                <div className="md-form mb-2">
                  <label htmlFor="validationDefault02">Dirección:</label>
                  <input type="text" ref="address" className="form-control" minLength="10" id="validationDefault02" value={ this.state.address } onChange={ this.handleChange } required/>
                </div>
                <div className="md-form mb-2">
                <label htmlFor="validationDefault03">Ciudad:</label>
                  <input type="text" ref="city" className="form-control" minLength="3" id="validationDefault03" value={ this.state.city } onChange={ this.handleChange } required/>
                </div>
                <div className="md-form mb-2">
                <label htmlFor="validationDefault04">E-mail:</label>
                  <input type="email" ref="email" className="form-control" id="validationDefault04" value={ this.state.email } onChange={ this.handleChange } disabled={this.state.isLogin} required/>
                </div>
                <div className="md-form mb-2">
                <label htmlFor="validationDefault05">Telefono movil:</label>
                  <div className="input-group">
                    <span className="input-group-addon">+34</span>
                    <input type="number" ref="telf" className="form-control validate" id="validationDefault05" value={ this.state.telf } onChange={ this.handleChange } required/>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button type="submit" className="btn btn-indigo" value="submit">Enviar <i className="fa fa-paper-plane-o ml-1" ></i></button>
                </div>
               </div>
            </form>

          </div>
        </div>
      </div>

    );

  }

}

export default ModalForm;