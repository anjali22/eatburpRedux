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
import { withNavigation, Header, HeaderBackButton } from 'react-navigation

import { SummaryCard } from "./SummaryCard";
import { BestDishCard } from "./BestDishCard";
import { MenuCard } from "./MenuCard";
import { PhotoCard } from "./PhotoCard";
import { RatingCard } from "./RatingCard";
import { RestaurantDetailsCard } from "./RestaurantDetailsCard";
import { AddressCard } from "./AddressCard";
import { BoldText } from "./StyledText";

export default class RestaurantDetails extends React.Component{

    constructor(props){
        super(props)
    }


    render = () => {
        let restaurant = this.props.restaurant;
        console.log("summary----------", restaurant.bestDishes)
        
        return(
            <View>
                <View style={styles.nameContainer}>
                    <BoldText style= {styles.name}> {restaurant.name} </BoldText>
                </View>
                <View>
                    <RestaurantDetailsCard/>
                    <SummaryCard text = {restaurant.summary}/>
                    <BestDishCard dishes = {restaurant.bestDishes}/>
                    <RatingCard/>
                    <MenuCard/>
                    <PhotoCard/>
                    <AddressCard/>
                </View>
            </View>
        )
    }
}

const HeroHeight = 370;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
    },
    name:{
        fontSize: 30
    },
    nameContainer:{
        alignItems: 'center',
        backgroundColor: '#ff8342',
        margin: 2
        // flex:1,
        // backgroundColor: '#f7f7f7'
    }
  });
