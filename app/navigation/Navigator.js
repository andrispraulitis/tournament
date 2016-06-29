'use strict';

import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text
} from "react-native";

// Components
import Drawer from './Drawer';

// Screens
import Dashboard from '../screens/Dashboard';
import Events from '../screens/Events';
import Event from '../screens/Event';
import Test from '../screens/Test';
import Contacts from '../screens/Contacts';
import Messages from '../screens/Messages';
import Conversation from '../screens/Conversation';

// Navigator
import { Actions, Router, Scene } from 'react-native-router-flux';

// Redux
import { connect } from 'react-redux';

// NOTE connect Router to Redux
const RouterWithRedux = connect()(Router);

class EventTabIcon extends Component {
    
	render() {
		// console.log('EventTabIcon', this.props);
		return (
            <Text style={{color: this.props.selected ? "red" : "black"}}>{this.props.title}</Text>
        )
    }
	
}

class EventBackButton extends Component {
    
	render() {
		// console.log('EventBackButton', this.props);
		return (
			<TouchableOpacity
				//testID="backNavButton"
				style={this.props.style}
				onPress={() => Actions.pop()}
			>
				<Text style={this.props.textButtonStyle}>Back</Text>
			</TouchableOpacity>
        )
    }
	
}

// override navigation card style
const getSceneStyle = function (props, computedProps) {
	const style = {
		flex: 1,
		backgroundColor: 'white',
		// shadowColor: null,
		// shadowOffset: null,
		shadowOpacity: .1,
		// shadowRadius: null
	};
	
	// if (computedProps.isActive) {
	// 	style.marginTop = computedProps.hideNavBar ? 0 : 64;
	// 	style.marginBottom = computedProps.hideTabBar ? 0 : 50;
	// }
	
	return style;
};

const scenes = Actions.create(
	<Scene key="root" hideNavBar={true}>
		
		<Scene key="drawer" component={Drawer} open={false}>
			<Scene key="main" tabs={true} hideTabBar={true}>
				<Scene
					//initial={true}
					//type="reset"
					key="Dashboard"
					component={Dashboard}
					title="Dashboard"
					//renderBackButton={ () => null }
				/>
				<Scene
					//initial={true}
					//type="reset"
					key="Events"
					component={Events}
					title="Events"
					//renderBackButton={ () => null }
				/>
				<Scene
					//initial={true}
					//type="reset"
					key="Contacts"
					component={Contacts}
					title="My Contacts"
					//renderBackButton={ () => null }
				/>
			</Scene>
		</Scene>
		
		{/*<Scene
			clone={true}
			duration={1000}
			key="Test"
			component={Test}
			title="Test"
			renderRightButton={ () => null }
		/>*/}
		
		<Scene key="event" tabs={true}>
			<Scene
				key="EventDetails"
				component={Event}
				title="Event Details"
				icon={EventTabIcon}
				backButton={EventBackButton}
				renderRightButton={ () => null }
				//onSelect={() => Actions.EventDetails()}
			/>
			<Scene
				key="EventPlan"
				component={Event}
				title="Event Plan"
				icon={EventTabIcon}
				backButton={EventBackButton}
				renderRightButton={ () => null }
				//onSelect={() => Actions.EventPlan()}
			/>
		</Scene>
		
		{/*<Scene key="chat">*/}
			<Scene
				// NOTE need to use clone so Messages pushed to route stack and back button present
				clone={true}
				hideTabBar={true}
				direction="vertical"
				key="Messages"
				component={Messages}
				title="Messages"
				renderRightButton={ () => null }
			/>
			<Scene
				clone={true}
				hideTabBar={true}
				key="Conversation"
				component={Conversation}
				title="Conversation"
				renderRightButton={ () => null }
			/>
		{/*</Scene>*/}
		
	</Scene>
);


export default class Navigator extends Component {
	
	shouldComponentUpdate(nextProps, nextState) {
		// console.log('Navigator::shouldComponentUpdate', nextProps, this.props);
		// NOTE re-render component ?
		return false;
	}
	
	render() {
		// console.log(`%c[ R E N D E R ] Navigator`, `color: blue`, this.props);
		return (
			<RouterWithRedux
				scenes={scenes}
				//style={{backgroundColor: 'white'}}
				//sceneStyle={styles.scene}
				getSceneStyle={getSceneStyle}
				//navigationBarStyle={styles.navBar}
				//titleStyle={styles.navTitle}
				
				// NavBar left button
				//drawerImage={Asset.get('icon-drawer')}
				//leftButtonImage={}
				//leftButtonStyle={[styles.navButton, styles.navButtonLeft]}
				//leftButtonIconStyle={styles.navButtonIcon}
				//onLeft={ (event) => { console.log(event); } }
				
				// NavBar back button
				//backButtonImage={Asset.get('icon-back')}
				hideBackImage={true}
				backTitle="Back"
				
				// NavBar right button
				rightTitle="Chat"
				//rightButtonImage={Asset.get('icon-chat')}
				//rightButtonStyle={[styles.navButton, styles.navButtonRight]}
				//rightButtonIconStyle={styles.navButtonIcon}
				onRight={ () => { Actions.Messages() } }
			/>
		)
	}
	 
}
