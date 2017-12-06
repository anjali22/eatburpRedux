import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class SearchBar extends React.Component{

    constructor(props){
        super(props)
      }
      
    render() {
        return (
            
               

<View style={{
  paddingLeft:20,
  justifyContent: 'center',
  marginRight: 10,
  marginTop:10,
  marginLeft:10,
  marginBottom:10,
  backgroundColor: '#fff', 
  height: 45, 
  borderTopLeftRadius:2,
  borderTopRightRadius:2,
  borderBottomLeftRadius:2,
  borderBottomRightRadius:2,
//   borderTopLeftRadius:30, 
//   borderBottomLeftRadius:30,
  borderWidth:1,
  borderColor: '#e9e9e9',
  }}>
  <TextInput 
  onFocus={this.props.onPress}
  onChangeText={this.props.onChangeText}
  placeholder='Search'
  underlineColorAndroid='transparent'           //to remove underline in textinput
  style={{
    fontSize: 15,
    textAlign: 'auto',
    color: '#878787',
    
  }}
       
        

      />
</View>


           
        );
    }
}

const styles = {
    container:{
        flex: 1,
    }
}