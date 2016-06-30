'use strict';

import React, { Component, PropTypes } from 'react';

// Components
import Drawer from 'react-native-drawer';
import Menu from './Menu';

// Navigator
import { Actions, DefaultRenderer } from 'react-native-router-flux';


export default class NavigationDrawer extends Component {
	
	render() {
		const { navigationState, onNavigate } = this.props;
		const { children, open } = navigationState;
		
		if (!children) return null;
		return (
            <Drawer
				ref="navigation"
				type="static"
				content={<Menu />}
				
				open={open}
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
					navigationState={children[0]}
					onNavigate={onNavigate}
				/>
            </Drawer>
        );
    }
	
}
