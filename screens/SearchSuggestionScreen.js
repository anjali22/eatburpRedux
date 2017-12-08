import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    ListView,
} from 'react-native';

import SearchBar from '../components/SearchBar';
import {GloriaText} from '../components/StyledText';
import food from '../data/food.js';
import place from '../data/place';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class SearchSuggestionScreen extends React.Component{

    

    constructor(props) {
        super(props);
        this.state = { 
            underlineButton1: true,
            underlineButton2: false,
            searchedFood: [],
            searchedPlace: [],
         };
    }
     
    
    search = (searchedText) => {
        console.log(searchedText)
        if(this.state.underlineButton1)
         {
            console.log(searchedText,'first condition')
            
            var searchedFood = food.filter(function(food) {
              return food.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
            });
            this.setState({searchedFood: searchedFood});
            console.log('anjaliiiiiiiiiii',this.state.searchedFood);
         }
         else{
            console.log(searchedText,'second condition')
            var searchedPlace = place.filter(function(place) {
                return place.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
              });
              this.setState({searchedPlace: searchedPlace});
         }
      };

    // searchedPlace = (searchedText) => {
    //   var searchedPlace = place.filter(function(place) {
    //     return place.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
    //   });
    //   this.setState({searchedPlace: searchedPlace});
    // };

    renderPlace = (place) => {
        return (
          <View           
          style= {styles.listItem}>
            <Text 
              style={styles.listItemText}
              onPress={() => this._handlePressPlace(place)}
            >
            {place.name}, {place.location}</Text>
          </View>
        );
    };

    renderFood = (food) => {
        return (
          <View           
          style= {styles.listItem}>
            <Text 
              style={styles.listItemText}
              onPress={() => this._handlePressFood(food)}
            >
            {food.name}, {food.bestAt}</Text>
          </View>
        );
    };

    
    _handlePressPlace = (place) => {
        this.props.navigation.navigate('placeDetail', { place: place });        
    }

    _handlePressFood = (food) => {
        this.props.navigation.navigate('searchDetail', { foodId: food.id });        
    } 

    render() {
        return (
        <View style= {styles.container}>

        <View style = {{backgroundColor: '#e9e9e9',}} >
        <SearchBar
            //onPress={() => this._handlePressSearch()}
        onChangeText={this.search} 
        />

        <View style={{flexDirection: 'row',}}>

            <View style={{flex:1,}}>
            <TouchableOpacity
            style={styles.button}
            onPress={()=> this.setState( {underlineButton1: true,underlineButton2: false,})}
            >
            <GloriaText
            style={this.state.underlineButton1 ? styles.textOnSelect:styles.defaultText}> 
            what to eat? 
            </GloriaText>

            </TouchableOpacity>
            </View>

            <View style={{flex:1,}}>
            <TouchableOpacity
            style={styles.button}
            onPress={()=> this.setState({underlineButton1: false,underlineButton2: true,})}
            >
            <GloriaText style={this.state.underlineButton2 ? styles.textOnSelect: styles.defaultText}> where to eat? </GloriaText>
            </TouchableOpacity>
            </View>
        </View>


        <View style={{backgroundColor:'#f7f7f7',marginTop: 20,}}>

        <ListView
          dataSource={ds.cloneWithRows(this.state.underlineButton1? this.state.searchedFood: this.state.searchedPlace)}
          renderRow={this.state.underlineButton1? this.renderFood: this.renderPlace} />
        </View>

            </View>
                
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
    },
    defaultText:{
        fontSize:15,
        color:'#7e7e7e',
    },
    textOnSelect:{
        fontSize:15,
        borderBottomWidth: 1, 
        borderBottomColor: '#3d3d3d',
        color:'#3d3d3d',
    },
    button: {
        alignItems: 'center',
        //backgroundColor: '#DDDDDD',
        paddingTop: 8,
        paddingBottom:1,
      },
    listItem: {
        backgroundColor: '#fff',
        borderBottomWidth:2,
        borderBottomColor:'#f7f7f7',
        justifyContent: 'flex-start',
        padding: 5,
    },
    listItemText: {
        fontSize: 20,
    }
}