'use strict';

import { combineReducers } from 'redux';

// Don't store
import { route } from './route';

// Do store
// TODO


const initialEventState = {
	EventInfo: {},
	EventPlan: null,
	EventGuests: null,
	EventMenu: null,
	EventGallery: null
};

const event = (state = initialEventState, action) => {
	switch (action.type) {
		// focus action is dispatched (from RNRF) when a new screen comes into focus
		case 'RECEIVE_EVENT':
			if (
				action.eventId
			) {
				switch (action.eventId) {
					case 1:
						return {
							...initialEventState,
							EventPlan: {},
							EventMenu: {},
							EventGallery: {}
						}
					case 2:
					return {
						...initialEventState,
						EventGuests: {},
						EventGallery: {}
					}
				}
			}
			
			return state;
		
		default:
			return state;
	}
}


export default combineReducers({
	route,
	event
});
