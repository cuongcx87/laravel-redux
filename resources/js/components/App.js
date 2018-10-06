import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import AddModal from './AddModal';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import ListUsers from './ListUsers';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <ListUsers />
                <AddModal />
            </div>
        );
    }
}
// console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));
