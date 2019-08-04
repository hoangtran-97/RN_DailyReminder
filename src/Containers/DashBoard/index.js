import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import DashBoardScreen from '../../Screens/DashBoard';

export default class DashBoard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <DashBoardScreen />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
});
