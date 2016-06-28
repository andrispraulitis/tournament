'use strict';

import React, { Component } from 'react';
import {
	View,
	StatusBar
} from 'react-native';

// Components
import Navigator from './navigation/Navigator';

// Redux
import { connect } from 'react-redux';


class App extends Component {
	
	render() {
		console.log(`%c[ R E N D E R ] App`, `color: blue`, this.props);
		if (!this.props.isLoggedIn) {
			// TODO
			return null;
		}
		return (
			<View style={{ flex: 1 }}>
				<StatusBar
					translucent={true} // Android only
					backgroundColor="transparent" // Android only
					barStyle="default" // iOS only
				/>
				<Navigator />
			</View>
		)
	}
	
}


// Select state from Redux store
const selectState = (state) => {
	return {
		isLoggedIn: true
	}
}

// Select dispatch from Redux actions
const selectDispatch = (dispatch) => {
	return {
		
	}
}

export default connect(selectState, selectDispatch)(App);
