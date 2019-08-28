import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    StyleSheet,

} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import DashBoardScreen from '../../Screens/DashBoard';
import colors from '../../constants/colors';

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
        console.log('Remaining', this.state);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <DashBoardScreen {...this.props} data={this.state.data} onRemove={this.onRemove} state={this.state}/>
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
