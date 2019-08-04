import React, {Fragment} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DashBoard = () => (
    <Fragment>
        <Text> MyComponent</Text>
        <FontAwesome5
            style={{ color: 'red' }}
            name="search"
            size={13}
        />
    </Fragment>
);

export default DashBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
