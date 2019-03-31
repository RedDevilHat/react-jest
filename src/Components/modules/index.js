import App from '../modules/App';
import React from 'react';
import { createStore } from 'redux'
import {Provider} from "react-redux";
import counter from "../../Components/modules/App/redux/reducers";

export const store = createStore(counter);
const Layout = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default Layout;
