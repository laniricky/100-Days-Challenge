import { createStore } from 'redux';
import rootReducer from './reducers'; // The combined reducer for the app

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

