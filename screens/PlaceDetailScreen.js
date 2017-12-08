import React from 'react';

import {
    View,
    Text,
} from 'react-native';

export default class PlaceDetailScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
        }   
    }


    render() {
        const { params } = this.props.navigation.state;
        var id = params.placeId;

        return (
            <View>
                <Text> {id}</Text>
            </View>
        )
    }
}