import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { accountReducer, sessionReducer, courseReducer, tutorialReducer } from '../reducers'

var store
export default {

	configureStore: (initialState) => {
		
		var reducers = combineReducers({
			account: accountReducer,
			session: sessionReducer,
			course: courseReducer,
			tutorial: tutorialReducer
		})

		store = createStore(
		    reducers,
		    initialState,
		    applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}

}







