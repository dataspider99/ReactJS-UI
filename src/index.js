import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { fetchProjects, fetchDataJobs} from './actions'

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchProjects);
store.dispatch(fetchDataJobs)
store.subscribe(()=>console.log('store',store.getState()));

ReactDOM.render(<Provider store={store}>
					<App />
		</Provider>, document.getElementById('root'));

// disable ServiceWorker
// registerServiceWorker();
