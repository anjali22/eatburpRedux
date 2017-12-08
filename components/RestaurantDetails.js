import React from 'react';
import {
  Animated,
  Image,
  Linking,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Constants, LinearGradient } from 'expo';
import TouchableNativeFeedback from '@expo/react-native-touchable-native-feedback-safe';
import { withNavigation, Header, HeaderBackButton } from 'react-navigation';
import PropTypes from 'prop-types';


// import {
//   MapCard,
//   DescriptionCard,
//   SummaryCard,
//   InstagramPhotosCard,
//   VisitedCard,
// } from './DetailCards';

export default class RestaurantDetails extends React.Component{

    constructor(props){
        super(props)
    }

    



    render = () =>{
        let restaurant = this.props.restaurant;
        return(
            <View>
                <Text> {restaurant.name} </Text>

            </View>
        )
    }
}
