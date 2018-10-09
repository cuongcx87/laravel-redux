import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddModal from './AddModal';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import ListUsers from './ListUsers';
import SearchForm from './SearchForm';
import thunk from 'redux-thunk';

const middleware = [ thunk ];
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <h2 className='mt-4'>Users Manager</h2>
                <SearchForm />
                <ListUsers />
                <AddModal />
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));
