import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware,createStore } from 'redux';
import { Provider } from 'react-redux';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import ListUsers from './component/ListUsers';

import API from './middlewares/api';

import rootReducer from './reducer';


const createStoreWithMiddleware = applyMiddleware(API)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={ListUsers} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
