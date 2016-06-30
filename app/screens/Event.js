'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

// Components
import Error from '../components/Error';

// Redux
import { connect } from 'react-redux';


class Event extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		}
	}
	
	
	
	// componentWillMount() {
	// 	console.log('componentWillMount', this.props);
	// }
	
	componentDidMount() {
		this.setState({isLoading: false});
		// console.log('componentDidMount');
	}
	
	// componentWillUnmount() {
	// 	console.log('componentWillUnmount');
	// }
	// 
	// componentWillReceiveProps(nextProps) {
	// 	console.log('componentWillReceiveProps');
	// }
	// 
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('shouldComponentUpdate');
	// 	return true;
	// }
	// 
	// componentWillUpdate(nextProps, nextState) {
	// 	console.log('componentWillUpdate');
	// }
	// 
	// componentDidUpdate(nextProps, nextState) {
	// 	console.log('componentDidUpdate');
	// }
	
	
	
	
	
	render() {
		// console.log(`%c[ R E N D E R ] Event`, `color: blue`, this.props);
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

export default connect(selectState)(Event);
