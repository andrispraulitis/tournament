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
import { Actions } from 'react-native-router-flux';

// Redux
import { connect } from 'react-redux';


class Test extends Component {
	
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		isLoading: true
	// 	}
	// }
	
	componentWillMount() {
		console.log('componentWillMount', this.props);
		// Actions.refresh({
		// 	title: 'shit'
		// });
	}
	
	componentDidMount() {
		// this.setState({isLoading: false});
		console.log('componentDidMount');
		// this.forceUpdate();
		// Actions.event({type: 'reset'});
	}
	
	componentWillUnmount() {
		console.log('componentWillUnmount');
		// Actions.event();
	}
	
	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps');
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate', this.props);
		console.log('shouldComponentUpdate', nextProps);
		return true;
	}
	
	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate');
	}
	
	componentDidUpdate(nextProps, nextState) {
		console.log('componentDidUpdate', nextProps);
		// Actions.event();
		// this.forceUpdate();
	}
	
	render() {
		console.log(`%c[ R E N D E R ] Test`, `color: blue`, this.props);
		return null;
		// if (this.state.isLoading) {
		// 	return null;
		// }
		// return (
		// 	<Error name={this.props.name} title={this.props.title} message="Coming soon..."/>
		// )
	}
	
}


// Select state from Redux store
const selectState = (state) => {
	return {
		user: null
	}
}

export default connect(selectState)(Test);
