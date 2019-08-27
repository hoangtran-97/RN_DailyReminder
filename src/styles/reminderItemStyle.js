import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

export default StyleSheet.create({
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
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10
    },

});
