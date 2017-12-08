import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import SearchBar from '../components/SearchBar';
export default class HomeScreen extends React.Component{

    render() {
        return (
            <View style= {styles.container}>
                <SearchBar
                    onPress={() => this._handlePressSearch()}
                />
                
               
                
            </View>
        );
    }

    _handlePressSearch() {
        console.log('search pressed');
        this.props.navigation.navigate('searchSuggestion');
      };
}

const styles = {
    container:{
        flex: 1,
        backgroundColor: '#f7f7f7',
    }
}