import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Header from './Header';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './About';
import Home from './Home';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <div className="container">
                        {/*<Header />*/}
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));
