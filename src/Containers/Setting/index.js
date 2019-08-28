import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import SettingScreen from '../../Screens/Setting';
import colors from '../../constants/colors';

export default class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    }

onPress =() => {
    changeState = this.state.clicked;
    this.setState({clicked: !changeState});
}

render() {
    const {clicked} = this.state;
    return (
        <SafeAreaView style={styles.container}>
            <SettingScreen {...this.props} clicked={clicked} onPress={() => this.onPress()}/>
        </SafeAreaView>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.green
    },
});
