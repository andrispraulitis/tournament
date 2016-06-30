'use strict';

const initialRouteState = {
	currentScene: null
};

export const route = (state = initialRouteState, action) => {
	switch (action.type) {
		// focus action is dispatched (from RNRF) when a new screen comes into focus
		case 'focus':
			if (
				action.scene
			) {
				let currentState = action.scene;
				
				if (currentState) {
					while (currentState.children) {
						currentState = currentState.children[currentState.index]
					}
				}
				
				// console.log(`%c[ R O U T E ]`, `color: red`, currentState.name, action);
				
				return {
					...state,
					currentScene: currentState
				}
			}
			
			return state;
		
		default:
			return state;
	}
}
