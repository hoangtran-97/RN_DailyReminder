
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../../constants/colors';
import common from '../../styles/common';

const ReminderItem = ({item, index}) => (
    <View style={styles.container}>
        <View style={item.done ? styles.iconContainerDone : styles.iconContainerInProgress}>
            <FontAwesome5
                color={colors.white}
                name="plus"
                size={20}
            />
        </View>
        <View style={common.flex1}>
            <View style={styles.textBlock}>
                <Text style={common.text}>{item.title}</Text>
                <Text style={common.text}> - </Text>
                <Text style={common.text}>Time</Text>
            </View>
            <View style={styles.dayBlock}>
                <View style={[styles.dayOval, { borderColor: item.mon ? colors.green : colors.backgroundGray}]}>
                    <Text style={common.text}>M</Text>
                </View>
                <View style={[styles.dayOval, { borderColor: item.tue ? colors.green : colors.backgroundGray}]}>
                    <Text style={common.text}>T</Text>
                </View>
                <View style={[styles.dayOval, { borderColor: item.wed ? colors.green : colors.backgroundGray}]}>
                    <Text style={common.text}>W</Text>
                </View>
                <View style={[styles.dayOval, { borderColor: item.thu ? colors.green : colors.backgroundGray}]}>
                    <Text style={common.text}>T</Text>
                </View>
                <View style={[styles.dayOval, { borderColor: item.fri ? colors.green : colors.backgroundGray}]}>
                    <Text style={common.text}>F</Text>
                </View>
                <View style={[styles.dayOval, { borderColor: item.sat ? colors.green : colors.backgroundGray}]}>
                    <Text style={common.text}>S</Text>
                </View>
                <View style={[styles.dayOval, { borderColor: item.sun ? colors.green : colors.backgroundGray}]}>
                    <Text style={common.textSunday}>S</Text>
                </View>
            </View>
        </View>
    </View>
);

export default ReminderItem;

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: colors.backgroundGray,
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: 'row'
    },
    dayOval: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: colors.backgroundGray,
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainerInProgress: {
        height: 80,
        width: 80,
        backgroundColor: colors.red,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainerDone: {
        height: 80,
        width: 80,
        backgroundColor: colors.green,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBlock: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    dayBlock: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1
    }
});
