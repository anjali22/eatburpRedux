import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableNativeFeedback,
} from 'react-native';

export default class SearchListFoodItem extends React.Component{

    constructor(props){
        super(props)
        
      }
      
    render() {
        let food = this.props.foodListItem;

        return (
            <TouchableNativeFeedback
             style = {styles.container}
             onPress={this.props.onPress}
             >
            <View style= {styles.listItem}>
              <Text 
                style={styles.listItemText}
                onPress={() => this._handlePressFood(food)}
              >
              {food.name}</Text>
              <Text>{food.bestAt}</Text>
            </View>
            </TouchableNativeFeedback>
        );
    }

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
        borderBottomWidth:1,
        borderBottomColor:'#f7f7f7',
        justifyContent: 'flex-start',
        padding: 5,
    },
    listItemText: {
        fontSize: 15,
    }
};
            