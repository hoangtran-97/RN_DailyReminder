import React, { Component } from 'react';
import {
    SafeAreaView, ScrollView, Text, View
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import DashBoard from './src/Containers/DashBoard/index';
import Navigation from './src/Navigation/AppNavigator';
import allReducers from './src/Reducers/allReducers';

const store = createStore(allReducers);
export default class App extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>

        );
    }
}
