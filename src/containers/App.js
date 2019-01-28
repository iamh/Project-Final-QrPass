// Dependecies
import React, { Component } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
// Assets
import MenuRoutes from '../utils/menuRoutes';
import store from '../stored/store';
// Css
import '../css/Global.css';
// Firebase
import firebaseApp from '../firebase/firebase';


class App extends Component {

  // Methods

	componentWillMount() {
		// Obtener datos del user de firebase
		firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.setStoreUser(user);
        localStorage.setItem('uid', user.uid);
      } else {
        localStorage.removeItem('uid');
      }
      
		});
  }
  
  // Functions //

  setStoreUser(user) {
		store.dispatch({
			type: "SET_USER",
			user
		})
	}
	

  render () {
    return (
      <Route>
        <MenuRoutes />
      </Route>
    );
  }

}

export default App;