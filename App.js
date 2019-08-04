import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import DashBoard from './src/Containers/DashBoard/index';

export default class App extends Component {
    render() {
        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: 'green' }}>
                <DashBoard />
            </SafeAreaView>

        );
    }
}
