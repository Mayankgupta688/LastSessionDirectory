import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from "redux";
import { Provider } from "react-redux";

import ContainerComponent from "./ContainerComponent";

import rootReducer from "./reducer";

var store = createStore(rootReducer);

ReactDOM.render((
    <Provider store={store}>
        <ContainerComponent></ContainerComponent>
    </Provider>
), document.getElementById('root'));
