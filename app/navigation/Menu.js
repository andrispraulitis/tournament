'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from "react-native";

// Components
import Button from '../components/Button';

// Navigator
import { Actions } from 'react-native-router-flux';

// Redux
import { connect } from 'react-redux';


class Menu extends Component {
	
	render() {
		let { currentScene }	= this.props;
		currentScene			= (currentScene && currentScene.name) ? currentScene.name : null;
		const drawerOpacity		= (currentScene === 'Conversation') ? 0 : 1; // TODO Drawer is visible in background when you pop scenes
		
		// console.log(`%c[ R E N D E R ] Menu :: ${currentScene.name}`, `color: red`, this.props);
		return (
			<View style={[styles.menu, {opacity: drawerOpacity}]}>
				<View
					style={styles.menuInner}
					showsVerticalScrollIndicator={false}
					directionalLockEnabled={true}
				>
					<View style={styles.nav}>
						<Button
							underlayColor="transparent"
							label="Home"
							styleButton={styles.button}
							styleLabel={[styles.buttonLabel, (currentScene == 'Dashboard' ? {color: 'red'} : null)]}
							onPress={ () => { Actions.refresh({key: 'drawer', open: false }); Actions.Dashboard(); } }
						/>
						<Button
							underlayColor="transparent"
							label="Events"
							styleButton={styles.button}
							styleLabel={[styles.buttonLabel, (currentScene == 'Events' ? {color: 'red'} : null)]}
							onPress={ () => { Actions.refresh({key: 'drawer', open: false }); Actions.Events(); } }
						/>
						<Button
							underlayColor="transparent"
							label="My Contacts"
							styleButton={styles.button}
							styleLabel={[styles.buttonLabel, (currentScene == 'Contacts' ? {color: 'red'} : null)]}
							onPress={ () => { Actions.refresh({key: 'drawer', open: false }); Actions.Contacts(); } }
						/>
					</View>
				</View>
            </View>
        )
    }
	
}

// StyleSheet
const styles = StyleSheet.create({
	// Menu
	menu: {
        flex: 1,
		flexDirection: 'column',
        justifyContent: 'flex-start'
    },
	menuInner: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'rgba(0, 0, 0, .05)'
	},
    
	// Links
	nav: {
		flex: 1,
		justifyContent: 'flex-start'
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderStyle: 'solid',
		borderColor: 'rgba(0, 0, 0, .1)',
		borderBottomWidth: 1
	},
	buttonLabel: {
		padding: 15,
		color: 'black'
	}
});


// Select state from Redux store
const selectState = (state) => {
	return {
		currentScene: state.route.currentScene
	}
}

// Select dispatch from Redux actions
const selectDispatch = (dispatch) => {
	return {
		
	}
}

export default connect(selectState, selectDispatch)(Menu);
