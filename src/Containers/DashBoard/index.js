import React, { Component, Fragment } from 'react';

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    FlatList,
    SafeAreaView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DashBoardScreen from '../../Screens/DashBoard';
import colors from '../../constants/colors';
import ReminderItem from '../../Screens/DashBoard/ReminderItem';
import common from '../../styles/common';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:
                [{
                    title: 'Reminder 0',
                    time: '150',
                    mon: true,
                    tue: true,
                    wed: true,
                    thu: true,
                    fri: true,
                    sat: false,
                    sun: false,
                    done: true,
                },
                {
                    title: 'Reminder 1',
                    time: '15',
                    mon: true,
                    tue: false,
                    wed: true,
                    thu: false,
                    fri: true,
                    sat: false,
                    sun: true,
                    done: false,
                },
                {
                    title: 'Reminder 2',
                    time: '150',
                    mon: true,
                    tue: true,
                    wed: true,
                    thu: true,
                    fri: true,
                    sat: false,
                    sun: false,
                    done: true,
                },
                {
                    title: 'Reminder 3',
                    time: '150',
                    mon: true,
                    tue: true,
                    wed: true,
                    thu: true,
                    fri: true,
                    sat: false,
                    sun: false,
                    done: false,
                }]

        };
        this.onRemove = this.onRemove.bind(this);
    }

    onRemove(index) {
        currentState = this.state.data;
        this.state.data.splice(index, 1);
        this.setState({data: currentState});
        console.log('THIS.STATE.data', this.state.data);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={common.screenHeader}>
                    <View style={common.headerBuffer}/>
                    <Text style={common.headerText}>DateTime</Text>
                    <TouchableOpacity style={common.headerBuffer}>
                        <FontAwesome5
                            color={colors.white}
                            name="plus"
                            size={20}

                        />
                    </TouchableOpacity>
                </View>
                <View style={common.flatlistContainer}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({item, index}) => (
                            <ReminderItem item={item} index={index} onRemove={this.onRemove} state={this.state} />
                        )}
                        extraData={this.state}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.green
    },
});
export default DashBoard;
