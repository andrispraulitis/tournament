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

// Redux
import { connect } from 'react-redux';


class Error extends Component {
	
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
		const { dispatch } = this.props;
		switch (this.props.name) {
			case 'Dashboard':
				return (
					<View>
						<Button
							label="Event #1"
							onPress={ () => {
								dispatch({ type: 'RECEIVE_EVENT', eventId: 1 });
								Actions.event();
							} }
						/>
					</View>
				)
			case 'Events':
				return (
					<View>
						<Button
							label="Event #2"
							onPress={ () => {
								dispatch({ type: 'RECEIVE_EVENT', eventId: 2 });
								Actions.event();
							} }
						/>
					</View>
				)
			case 'EventDetails':
			case 'EventPlan':
				return (
					<View>
						{/*<Button
							label="Dashboard"
							onPress={ () => Actions.Dashboard() }
						/>*/}
						<Button
							label="Actions.pop()"
							onPress={ () => Actions.pop() }
						/>
					</View>
				)
			case 'Messages':
				return (
					<View>
						<Button
							label="Conversation"
							onPress={ () => Actions.Conversation() }
						/>
						<Button
							label="Actions.pop()"
							onPress={ () => Actions.pop() }
						/>
					</View>
				)
			case 'Conversation':
				return (
					<View>
						<Button
							label="Actions.pop()"
							onPress={ () => Actions.pop() }
						/>
					</View>
				)
			case 'Contacts':
				return (
					<View>
						<Button
							label="Conversation"
							onPress={ () => Actions.Conversation() }
						/>
					</View>
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


export default connect()(Error);
