
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, Animated
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../../constants/colors';
import common from '../../styles/common';


export default class ReminderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

 renderRightAction = (text, color, x, progress) => {
     const trans = progress.interpolate({
         inputRange: [0, 1],
         outputRange: [x, 0],
     });
     const pressHandler = () => {
         this.close();
         alert(text);
     };
     return (
         <Animated.View style={{flex: 1, transform: [{translateX: trans}]}}>
             <RectButton
                 style={[styles.rightAction, {backgroundColor: color}]}
                 onPress={pressHandler}
             >
                 <Text style={common.headerText}>{text}</Text>
             </RectButton>
         </Animated.View>
     );
 };

 renderRightActions = progress => (
     <View style={{
         width: 192, flexDirection: 'row', marginTop: 10, height: 80
     }}
     >
         {this.renderRightAction('Done', colors.green, 192, progress)}
         {this.renderRightAction('Remove', colors.red, 128, progress)}
     </View>
 );

 updateRef = (ref) => {
     this._swipeableRow = ref;
 };

 close = () => {
     this._swipeableRow.close();
 };

 render() {
     const {item, index} = this.props;
     return (
         <Swipeable
             ref={this.updateRef}
             friction={2}
             leftThreshold={30}
             rightThreshold={40}
             renderRightActions={this.renderRightActions}
         >
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
         </Swipeable>
     );
 }
}


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
