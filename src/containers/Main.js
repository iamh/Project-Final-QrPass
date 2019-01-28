// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
// Components
import Header from '../components/layout/Header';
import ContentMenu from '../components/common/ContentMenu';
import Footer from '../components/layout/Footer';
// Data
import menu from '../data/menu';
// Assets
import store from '../stored/store';

class Container extends Component {

	static propTypes = {
		children: PropTypes.object.isRequired
  };

	constructor() {

		super();
		this.state = {
			user: null
		}
		
		// Bindeo de los this --> referenciar los objetos this
		this.handleLogout = this.handleLogout.bind(this);
		this.handleAuth = this.handleAuth.bind(this);
		
	}

	componentWillMount() {
    store.subscribe(() => {
      this.setState({ user: store.getState().user });
    });
  }

	// Functions //

	// función para logearte por Google
  handleAuth() { 
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
		.catch(error => console.log(`Error ${error.message}`));
		console.log("Connected...");
  }
	// Desconectar
	handleLogout() {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
		.catch(error => console.log(`Error ${error.message}`));
		console.log("Disconnected...");
		setTimeout(() => { window.location.reload(true) });
	}


	render() {

		const { children } = this.props;

		return (
			<div>
				<Header 
					login={ this.handleAuth }
					logout={ this.handleLogout } 
					items={ menu } 
					user={ this.state.user}
				/>
				<ContentMenu 
					body={ children } 
				/>
				<Footer />
			</div>
		);
		
	}

}

export default Container;