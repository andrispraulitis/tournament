'use strict';

const initialNavigationState = {};

export const navigation = (state = initialNavigationState, action) => {
	switch (action.type) {
		// focus action is dispatched (from RNRF) when a new screen comes into focus
		case 'focus':
			console.log(`%c[ R O U T E ]`, `color: blue`, action.type + ': ' + action.scene.name);
			if (
				action.scene
			) {
				return {
					...state,
					...action.scene
				}
			}
			
			return state;
		
		default:
			return state;
	}
}
