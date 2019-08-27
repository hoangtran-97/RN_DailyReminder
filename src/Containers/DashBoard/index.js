import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    StyleSheet,

} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {connect} from 'react-redux';
import DashBoardScreen from '../../Screens/DashBoard';
import colors from '../../constants/colors';

class DashBoard extends Component {
    render() {
        const {data} = this.props;
        console.log('data', data);
        return (
            <SafeAreaView style={styles.container}>
                <DashBoardScreen {...this.props} data={data}/>
            </SafeAreaView>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.dashBoardReducers.data
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.green
    },
});
export default connect(mapStateToProps)(DashBoard);
