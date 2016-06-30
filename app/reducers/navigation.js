'use strict';

const initialNavigationState = {};

export const navigation = (state = initialNavigationState, action) => {
	switch (action.type) {
		// focus action is dispatched (from RNRF) when a new screen comes into focus
		case 'focus':
			console.log(`%c[ R O U T E ]`, `color: red`, action.type + ': ' + action.scene.name, action);
			if (
				action.scene
			) {
				
				// let currentState = action.scene;
				// 
				// if (currentState) {
				// 	while (currentState.children) {
				// 		currentState = currentState.children[currentState.index]
				// 	}
				// }
				// 
				// console.log('currentScene', currentState.name);
				
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
