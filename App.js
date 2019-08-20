import React, { Component } from 'react';
import {
    SafeAreaView, ScrollView, Text, View
} from 'react-native';
import DashBoard from './src/Containers/DashBoard/index';
import Navigation from './src/Navigation/AppNavigator';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <Navigation />
            </View>

        );
    }
}
