import React from 'react';
import {
  ActivityIndicator,
  Image,
  InteractionManager,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';  

export class BestDishCard extends React.Component {
    constructor(props){
        super(props)
    }
    render = () => {
        let dishes = this.props.dishes
        console.log("dishes----------", dishes) 
        var bestDishes = dishes.map((type)=> <Text>{type} </Text>)      
        return (
            <View>
                <View>
                        <Text style={styles.headingStyle}> Best Dishes </Text>
                </View>

                <View style= {styles.container}>
                    <ScrollView horizontal={true}>
                    { 
                        dishes.map((item, key) => (
                            <Text key={key} style={styles.TextStyle}> { item } </Text>)
                        )
                    }
                    </ScrollView>
                </View>
            </View>
          )
    }
}
const styles = StyleSheet.create({
    
    container: {
      margin: 10,
      flexDirection: 'row',
      justifyContent: 'center'     
    },
    headingStyle:{
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center'
    },
    
    TextStyle:{
      fontSize : 25,
      backgroundColor: '#ff8342',      
       textAlign: 'center',
       justifyContent: 'center'
    }
    
   });