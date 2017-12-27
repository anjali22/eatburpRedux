import React from 'react';
import {
    connect,
  } from 'react-redux';
import {
    View,
    Text,
    ListView,
    FlatList,
} from 'react-native';

import foodFoundAt from '../data/foodFoundAt';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var result = [];

export default class SearchDetailScreen extends React.Component{

    static route = {
        navigationBar: {
          visible: false,
        }
    }

  

    static navigationOptions = ({ navigation }) => ({
      title: `Chat with ${navigation.state.params.foodId}`,
    });

    constructor(props) {
        super(props);
        this.state = {
            foodFoundAt,
            result:[],
            currentState:[],
        }   
        // const { params } = this.props.navigation.state;
        // var searchedPlaces = foodFoundAt.filter(function(foodFoundAt) {
        //     return foodFoundAt.id.indexOf(params.foodId);
        // });
        // this.setState({foodFoundAt: searchedPlaces});
    }

    // static getDataProps(data, props) {
    //     let foodId = props.navigation.state.params.foodId;
    //     console.log()
    //     let places = data.restaurants.all.find(restaurant => restaurant.id === restaurantId);
    
    //     return {
    //       places,
    //     };
    //   }
    
    // componentDidMount() {
    //     console.log('GrandChild did mount.');
    //     const { params } = this.props.navigation.state;
    //     console.log('in matched data');
    //     var searchedPlaces = foodFoundAt.filter(function(foodFoundAt) {
    //         return foodFoundAt.id.indexOf(params.foodId) > -1;
    //     });
    //     this.setState({foodFoundAt: searchedPlaces});
    //   }

    componentWillMount(){
        console.log('in componentDidMount');
        const { params } = this.props.navigation.state;
        var id = params.foodId;
        //console.log('before',foodFoundAt[id].foundAt);

        var result = foodFoundAt.filter((data) => {
            if (data.id === id)
                {//return data.foundAt;
                    //console.log('dataaaaa',data);
                    var a = foodFoundAt.indexOf(data); 
                    //console.log('aaaaaaa',a);
                    //console.log('foodfoundat',foodFoundAt[a].foundAt);
                    var b = foodFoundAt[a].foundAt;
                    this.setState({currentState:foodFoundAt[a].foundAt},function () {
                        console.log('in callback', this.state.currentState);
                    });
                    return foodFoundAt[a].foundAt;
                }
            
            
        });
        // var result = foodFoundAt.filter(function(foodFoundAt) {
        //      console.log('called====',foodFoundAt, 'id passed', id);
        //      return foodFoundAt.foundAt;
        //  });

        
       
        //   var result = foodFoundAt.forEach(function(food){
        //      console.log("selected id--------",id)
        //      if(food.id == id){
        //      console.log("componentDidMount fooddddd-------", food.foundAt)
        //     //  this.setState({result:food.foundAt});
        //     //  console.log("current state-1111-------", this.state.result);
             
        //         return food.foundAt
        //      }

        //  });

        // this.setState({currentState:result}, function () {
        //     console.log('in callback', this.state.currentState);
        // });
        
         //console.log('result',result);
         //this.setState({result :result});
         //console.log('current state s',this.state.currentState);
         //console.log(this.state.searchResult);
         //console.log("current state--------", this.state.result);
    }

    

   
    // matchedData = () => {
    //     const { params } = this.props.navigation.state;
    //     console.log('in matched data');
    //     var searchedPlaces = foodFoundAt.filter(function(foodFoundAt) {
    //         return foodFoundAt.id.indexOf(params.foodId) > -1;
    //     });
    //     this.setState({foodFoundAt: searchedPlaces});
        
    // }

    //  search = (searchedText) => {
        
    //          console.log(searchedText,'first condition')
            
    //          var searchedFood = food.filter(function(food) {
    //            return food.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
    //          });
    //          this.setState({searchedFood: searchedFood});
    
    // };

    search() {
        console.log('in search');
        const { params } = this.props.navigation.state;
        var id = params.foodId;
        console.log('before',foodFoundAt[id].foundAt);

        var result = foodFoundAt.filter(function(foodFoundAt) {
             console.log('called====',foodFoundAt, 'id passed', id);
             return foodFoundAt.foundAt;
         });

        //   foodFoundAt.forEach(function(food){
        //      console.log("selected id--------",id)
        //      if(food.id == id){
        //      console.log("fooddddd-------", food.foundAt)
        //         return food.foundAt
        //      }
        //  })
         console.log("result--------", result)
    }

    renderFood = (item) => {
        
        // console.log('in render food', foodFoundAt);
          <View           
          style= {styles.listItem}>
          <Text>{this.state.currentState[0].location}</Text>
            <Text 
              style={styles.listItemText}

            >
            {item.name}, {item.rating},jhhjhk </Text>
            
          </View>
    
    };

    render() {
           
        // const { params } = this.props.navigation.state;
        // var id = params.foodId;
        // console.log('before',foodFoundAt);

        // var searchedPlaces = foodFoundAt.filter(function(foodFoundAt) {
        //     console.log('called====',foodFoundAt, 'id passed', id);
        //     return foodFoundAt.id.indexOf(id) > -1;
        // });
        
        // this.setState({foodFoundAt: searchedPlaces});

        return (
        
            <View>
                
                <FlatList
                key={"flatlistexample"}
                
                //data={this.state.foodFoundAt[0].foundAt}
                //data = {this.search()}
                data = {this.state.currentState}
                renderItem={({item}) => <Text>{item.name},{item.location},{item.rating}</Text>}
                //renderItem={this.renderFood}
                />
                
            </View>
        )
    }
}

const styles = {
    container:{
        flex: 1,
        backgroundColor: '#f7f7f7',
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