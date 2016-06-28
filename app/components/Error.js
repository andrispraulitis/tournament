'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

// Components
import Button from '../components/Button';

// Navigator
import { Actions } from 'react-native-router-flux';


export default class Error extends Component {
	
	render() {
		return (
			<View style={[styles.wrapper, {paddingHorizontal: 40}]}>
				<Text style={styles.heading}>
					{ this.props.title || 'Error' }
				</Text>
				<Text style={styles.message}>
					{ this.props.message || 'Service unavailable, please try again a little later.' }
				</Text>
				<View style={{marginTop: 10}}>{this._renderButtons()}</View>
			</View>
		)
	}
	
	_renderButtons(name) {
		switch (this.props.name) {
			case 'Dashboard':
				return (
					<Button
						label="Event"
						onPress={ () => Actions.event() }
					/>
				)
			case 'Events':
				return (
					<Button
						label="Event"
						onPress={ () => Actions.event() }
					/>
				)
			case 'Messages':
				return (
					<Button
						label="Conversation"
						onPress={ () => Actions.Conversation() }
					/>
				)
			default:
				return null
		}
	}
	
}

// StyleSheet
const styles = StyleSheet.create({
	// Layout
	wrapper: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	
	// Error
	heading: {
		marginBottom: 15,
		textAlign: 'center'
	},
	message: {
		textAlign: 'center'
	}
});
