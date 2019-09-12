
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
import colors from '../../../constants/colors';
import common from '../../../styles/common';
import styles from '../../../styles/reminderItemStyle';
import {removeItemAction} from '../../../Containers/DashBoard/Actions/index';

class ReminderItem extends Component {
 timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

 renderRightActionRemove = (text, color, x, progress) => {
     const {item, index, onRemove} = this.props;
     const trans = progress.interpolate({
         inputRange: [0, 1],
         outputRange: [x, 0],
     });
     const pressHandler = async () => {
         this.close();
         await this.timeout(350);
         this.props.onRemove(index);
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

 renderRightActionDone = (text, color, x, progress) => {
     const {
         item, index, onRemove, onDone
     } = this.props;
     const trans = progress.interpolate({
         inputRange: [0, 1],
         outputRange: [x, 0],
     });
     const pressHandler = () => {
         this.close();
         this.props.onDone(index);
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
         {this.renderRightActionDone('Done', colors.green, 192, progress)}
         {this.renderRightActionRemove('Remove', colors.red, 128, progress)}
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
export default ReminderItem;
