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


class Dashboard extends Component {
	
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
		// console.log(`%c[ R E N D E R ] Dashboard`, `color: blue`, this.props);
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
		events: null
	}
}

export default connect(selectState)(Dashboard);
