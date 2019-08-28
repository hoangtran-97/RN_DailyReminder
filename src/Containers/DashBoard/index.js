import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    StyleSheet,

} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import DashBoardScreen from '../../Screens/DashBoard';
import colors from '../../constants/colors';

export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:
                [{
                    title: 'Reminder 1',
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
                    title: 'Reminder 5',
                    time: '15',
                    mon: true,
                    tue: false,
                    wed: true,
                    thu: false,
                    fri: true,
                    sat: false,
                    sun: true,
                    done: true,
                }]

        };
    }

    onRemove(index) {
        const {data} = this.state;
        currentState = data;
        data.splice(index, 1);
        this.setState({data: currentState});
    }

    render() {
        const {data} = this.state;
        console.log('data', data);
        return (
            <SafeAreaView style={styles.container}>
                <DashBoardScreen {...this.props} data={data} onRemove={() => this.onRemove}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.green
    },
});
