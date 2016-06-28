'use strict';

import React, { Component } from 'react';

// Components
import App from './App';

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


export default function setup(): Component {
	console.disableYellowBox = __DEV__ ? false : true; // TODO env.js
	
	class Root extends Component {
		
		constructor() {
			super();
			this.state = {
				isLoading: true,
				store: configureStore(() => this.setState({isLoading: false}))
			}
		}
		
		render() {
			// console.log(`%c[ R E N D E R ] setup`, `color: blue`, this.props);
			if (this.state.isLoading) {
				return null;
			}
			return (
				<Provider store={this.state.store}>
					<App />
				</Provider>
			)
		}
		
	}
	
	return Root;
}
