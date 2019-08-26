import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

export default StyleSheet.create({
    headerText: {
        fontSize: 16,
        color: colors.white,
        fontWeight: '700'
    },
    flatlistContainer: {
        paddingHorizontal:
        10,
        backgroundColor: colors.white,
        flex: 1
    },
    screenHeader: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerBuffer: {
        flex: 0.1, justifyContent: 'center', alignItems: 'center'
    },
    flex1: {
        flex: 1
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.textGray
    },
    textSunday: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.red
    }
});
