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
                }]

        };
        this.onRemove = this.onRemove.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    onRemove = (index) => {
        const {data} = this.state;
        currentState = data;
        currentState.splice(index, 1);
        this.setState({data: currentState});
    }

    onDone = (index) => {
        const {data} = this.state;
        newData = this.state.data;
        const clonedData = newData.slice();
        clonedData[index].done = !clonedData[index].done;
        this.setState({...data, data: clonedData});
    }

    render() {
        const {data} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <DashBoardScreen {...this.props} data={data} onRemove={this.onRemove} state={this.state} onDone={this.onDone}/>
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
