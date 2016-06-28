'use strict';

import React, { Component } from 'react';
import {
	ActivityIndicator,
	TouchableHighlight,
	TouchableOpacity,
	View,
	Text,
	StyleSheet
} from 'react-native';


export default class Button extends Component {
	
	render() {
		const Container = this.props.disabled ? View : (this.props.opacity ? TouchableOpacity : TouchableHighlight);
		return (
			<Container
				activeOpacity={ this.props.opacity || 1 }
				underlayColor={ this.props.underlayColor ? this.props.underlayColor : 'black' }
				onPress={this.props.onPress}
				style={[ (this.props.styleButton || styles.button), {opacity: this.props.disabled ? (this.props.isLoading ? 0.8 : 0.5) : 1} ]}
			>
				{ this.props.isLoading ? this._renderLoading() : this._renderLabel() }
			</Container>
		)
	}
	
	_renderLabel() {
		return (
			<Text style={[styles.label, (this.props.styleLabel || null)]}>{ this.props.label }</Text>
		)
	}
	
	_renderLoading() {
		return (
			<ActivityIndicator
				color={'white'}
				size={'small'}
			/>
		)
	}
	
}

// StyleSheet
const styles = StyleSheet.create({
	button: {
		padding: 15,
		borderRadius: 4,
		backgroundColor: 'black'
	},
	label: {
		lineHeight: 20,
		textAlign: 'center',
		color: 'white'
	}
});
