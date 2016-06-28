'use strict';

import React, { Component, PropTypes } from 'react';

// Components
import Drawer from 'react-native-drawer';
import Menu from './Menu';

// Navigator
import { Actions, DefaultRenderer } from 'react-native-router-flux';

// Redux
import { connect } from 'react-redux';


class NavigationDrawer extends Component {
	
	render() {
		const { navigation, navigationState, onNavigate } = this.props;
		if (!navigation.children) {
			return null;
		}
		const currentScene = navigation.name ? navigation.name : null;
		// console.log(`%c[ R E N D E R ] Drawer`, `color: blue`, this.props);
		console.log(`%c[ R E N D E R ] Drawer :: ${currentScene}`, `color: blue`, navigation.children[0]);
		return (
            <Drawer
				ref="navigation"
				type="static"
				content={<Menu />}
				
				open={navigation.open}
				openDrawerOffset={0.15}
				//closedDrawerOffset={-5}
				tapToClose={true}
				negotiatePan={true}
				
				tweenHandler={
					(ratio, side = 'left') => {
						// slack style parallax
						let drawer = { [side] : -150 * (1 - ratio) }
						// this is perfect scene overlay
						let mainOverlay = { backgroundColor: `rgba(255, 255, 255, ${0.7 * (0 + ratio)})` };
						
						return { drawer, mainOverlay }
					}
				}
				tweenDuration={150}
				tweenEasing='easeInOutQuad'
			>
                <DefaultRenderer
					navigationState={navigation.children[0]}
					onNavigate={onNavigate}
				/>
            </Drawer>
        );
    }
	
}


// Select state from Redux store
const selectState = (state) => {
	return {
		navigation: state.navigation
	}
}

export default connect(selectState)(NavigationDrawer);
