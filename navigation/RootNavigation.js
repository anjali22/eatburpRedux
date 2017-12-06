import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import {Platform, StatusBar} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import FoodMapScreen from '../screens/FoodMapScreen';
import ReviewScreen from '../screens/ReviewScreen';
import SearchDetailScreen from '../screens/SearchDetailScreen';
import SearchSuggestionScreen from '../screens/SearchSuggestionScreen';
import SettingScreen from '../screens/SettingScreen';

const SearchStack = StackNavigator(
    {
        searchSuggestion: {
            screen: SearchSuggestionScreen,
        },
        searchDetail: {
            screen :SearchDetailScreen,           
        },
    },
        {
            headerMode: 'none',
        }
    
);

const HomeStack = StackNavigator(
    {
        home: {
            screen: HomeScreen,
        },
        searchSuggestion: {
            screen: SearchStack,
        },
        
    },
    {
        headerMode: 'none',
    }
);

const TabLayout = TabNavigator(
    {
        home: {
            screen : HomeStack,
        },
        map: {
            screen : FoodMapScreen,
        },
        review: {
            screen : ReviewScreen,
        },
        settings: {
            screen : SettingScreen,
        },
    },
    {
        navigationOptions: ({ navigation }) => ({
          tabBarLabel: () => {
            const { routeName } = navigation.state;
            let label = routeName;
            if (label === 'List') {
              return 'Cafes';
            } if(label === 'Addrating'){
              return 'Add Rating';
            }else {
              return label;
            }
          },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: '#fff',
        borderTopColor: '#f1f1f1',
        height:56,
      },
     
    },
  }
);

export default StackNavigator(
    {
        tabs: {
            screen : TabLayout,
        }
    },
    {
        headerMode: 'none',         //to remove a top title bar
        cardStyle: {
            //to fix the status/notification bar and avoid overlapping with coomponents
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
            
          }
    }
);