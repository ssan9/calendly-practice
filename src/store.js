import { createStore } from 'redux';
import rootReducer from './reducers/time-slots';

const store = createStore(
	rootReducer,

)

export default store;