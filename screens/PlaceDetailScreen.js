import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import place from '../data/place';
import RestaurantDetails from '../components/RestaurantDetails'

export default class PlaceDetailScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
                
        }   
    }


    render() {
        const { params } = this.props.navigation.state;
        console.log("params-----------", params);
        var id = params.place.id;

        return (
            <View>
                <Text> {id} </Text>
                <RestaurantDetails
                  
                   restaurant = {params.place}
                /> 
            </View>
        )
    }
}

const HeroHeight = 370;

