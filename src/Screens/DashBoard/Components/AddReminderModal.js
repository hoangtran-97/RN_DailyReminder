import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import colors from '../../../constants/colors';


const AddReminderModal = () => {
    const [title, setTitle] = useState('123');
    const [time, setTime] = useState('10');
    const [mon, setMon] = useState(true);
    const [tue, setTue] = useState(true);
    const [wed, setWed] = useState(true);
    const [thu, setThu] = useState(true);
    const [fri, setFri] = useState(true);
    const [sat, setSat] = useState(true);
    const [sun, setSun] = useState(true);
    const [done, setDone] = useState(true);
    return (
        <Modal
            style={styles.container}
            animationType="slide"
            transparent
            visible={false}
        >
            <SafeAreaView style={styles.SafeAreaView}>
                <View style={styles.modal}>
                    <View style={styles.headerContainer}>
                        <Text>New reminder</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="name"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Time"
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        flex: 1,
                        width: '100%',
                        paddingHorizontal: 10
                    }}
                    >
                        <TouchableOpacity
                            style={[styles.dayOval, {
                                borderColor: mon
                                    ? colors.green : colors.backgroundGray
                            }]}
                            onPress={() => setMon(!mon)}
                        >
                            <Text>M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.dayOval, {
                                borderColor: tue
                                    ? colors.green : colors.backgroundGray
                            }]}
                            onPress={() => setTue(!tue)}
                        >
                            <Text>T</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.dayOval, {
                                borderColor: wed
                                    ? colors.green : colors.backgroundGray
                            }]}
                            onPress={() => setWed(!wed)}
                        >
                            <Text>W</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.dayOval, {
                                borderColor: thu
                                    ? colors.green : colors.backgroundGray
                            }]}
                            onPress={() => setThu(!thu)}
                        >
                            <Text>T</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.dayOval, {
                                borderColor: fri
                                    ? colors.green : colors.backgroundGray
                            }]}
                            onPress={() => setFri(!fri)}
                        >
                            <Text>F</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.dayOval, {
                                borderColor: sat
                                    ? colors.green : colors.backgroundGray
                            }]}
                            onPress={() => setSat(!sat)}
                        >
                            <Text>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.dayOval, {
                                borderColor: sun
                                    ? colors.green : colors.backgroundGray
                            }]}
                            onPress={() => setSun(!sun)}
                        >
                            <Text>S</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>

        </Modal>
    );
};

export default AddReminderModal;

const styles = StyleSheet.create({
    modal: {
        backgroundColor: colors.backgroundModalGray,
        width: '80%',
        height: '60%',
        borderRadius: 10,
        alignItems: 'center'
    },
    SafeAreaView: {
        backgroundColor: 'rgba(52, 52, 52, 0.9)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        height: 40, justifyContent: 'center'
    },
    inputContainer: {
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.borderGray,
        borderRadius: 10,
        width: '90%',
        height: '10%',
        justifyContent: 'center',
        paddingLeft: 10,
        marginBottom: 10
    },
    dayOval: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: colors.backgroundGray,
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
