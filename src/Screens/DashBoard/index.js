import React, {Fragment} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    FlatList
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ReminderItem from './ReminderItem';
import common from '../../styles/common';


const DashBoard = ({data, reduxState}) => {
    console.log('DATA', reduxState);
    const {test} = reduxState;
    console.log('TEST', test);
    return (
        {test} ? (
            <Fragment>
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
                        data={data}
                        renderItem={({item, index}) => (
                            <ReminderItem item={item} index={index}> </ReminderItem>
                        )}
                        extraData={test}
                    />
                </View>

            </Fragment>
        ) : null
    );
};
export default DashBoard;

const styles = StyleSheet.create({
    screenHeader: {

    }

});
