import React, { Component } from 'react';
import {
    createStackNavigator, createBottomTabNavigator, createAppContainer
} from 'react-navigation';
import { SafeAreaView, BackHandler } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DashBoardContainer from '../Containers/DashBoard';

const TabNavigator = createBottomTabNavigator({
    Dashboard: {
        screen: DashBoardContainer,
        navigationOptions: {
            activeTintColor: '#FFFFFF',
            tabBarIcon: ({ focused }) => (
                <FontAwesome5

                    name="home"
                    size={21}
                    color={focused ? '#61bc47' : '#999999'}
                />
            )
        }
    },
    Main: {
        screen: DashBoardContainer,
        navigationOptions: {
            activeTintColor: '#FFFFFF',
            tabBarIcon: ({ focused }) => (
                <FontAwesome5
                    name="home"
                    size={21}
                    color={focused ? '#61bc47' : '#999999'}
                />
            )
        }
    },
},
{
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    lazy: true,
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
            backgroundColor: '#FFFFFF',
            borderColor: '#d1d1d1',
            borderTopWidth: 0.3
        },
        indicatorStyle: {
            backgroundColor: '#FFFFFF'
        }
    },
});
export const AppNavigator = createStackNavigator(
    {
        TabNavigator: { screen: TabNavigator }
    },
    {
        initialRouteName: 'TabNavigator',
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);

const App = createAppContainer(AppNavigator);

export default App;
