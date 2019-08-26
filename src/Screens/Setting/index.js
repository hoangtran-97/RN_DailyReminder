import React, {Component, Fragment} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import common from '../../styles/common';

const Setting = ({clicked, onPress}) => (
    <Fragment >
        <View style={common.screenHeader}>
            <View />
            <Text> Test Dark Mode</Text>
            <View />
        </View>
        <View style={clicked ? styles.darkContainter : styles.lightContainer}>

            <TouchableOpacity
                onPress={() => onPress()}
                style={styles.darkToggle}
            >
                <Ionicons
                    color={colors.white}
                    name="ios-moon"
                    size={50}
                    style={clicked ? styles.darkState : styles.lightState}
                />
            </TouchableOpacity>

        </View>

    </Fragment>
);


export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lightState: {
        transform: [{ rotate: '0deg'}]
    },
    darkState: {
        transform: [{ rotate: '180deg'}]
    },
    darkContainter: {
        backgroundColor: colors.black,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    lightContainer: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    darkToggle: {
        width: 60,
        height: 60,
        backgroundColor: colors.green,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
