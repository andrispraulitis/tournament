'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

// Components
import Error from '../components/Error';

// Navigator
// import { NavBar } from 'react-native-router-flux';

// Redux
import { connect } from 'react-redux';


class Messages extends Component {
	// 
	// static renderNavigationBar(props) {
	// 	console.log('test', props);
	// 	return (
	// 		<NavBar {...props} />
	// 	)
	// }
	// 
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		}
	}
	
	componentDidMount() {
		this.setState({isLoading: false});
	}
	
	render() {
		// console.log(`%c[ R E N D E R ] Messages`, `color: blue`, this.props);
		if (this.state.isLoading) {
			return null;
		}
		return (
			<Error name={this.props.name} title={this.props.title} message="Coming soon..."/>
		)
	}
	
}


// Select state from Redux store
const selectState = (state) => {
	return {
		user: null
	}
}

export default connect(selectState)(Messages);
