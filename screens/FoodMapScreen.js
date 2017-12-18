import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

import { Maps } from "../components/Maps";
import SilverMapStyle from '../styles/SilverMapStyle.json';

import { MapView, Location } from "expo";

let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

export default class FoodMapScreen extends React.Component{

    /* render() {
        return (
            <View style={styles.container}>
                 <MapView
                 style={styles.map}
                 initialRegion={{
                   latitude: 28.644800,
                   longitude: 77.216721,
                   latitudeDelta: 0.0922,
                   longitudeDelta: 0.0421,
                 }}
                 >
                 <MapView.Marker
                    coordinate={{longitude: 77.216721, latitude: 28.644800}}
                    title= {"title"}
                    description= {"description"}
                />
                </MapView>
            </View>
        )
    }
} */

constructor(props) {
    super(props);

    this.state = {
        region:{
            latitude: 0,
            longitude: 0,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
            error: null,
        },
        initialRegion:{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        location: null
    };
  }

  /* componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
            region:{
                latitude: Number(position.coords.latitude),
                longitude: Number(position.coords.longitude),
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
                error: null,
            }
        },function(){
          console.log("geolocation-----------", this.state.region)
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
     */
    
      //console.log("region----------", this.state.region.longitude)
    //}


    componentWillMount() {
      
        this._getLocationAsync();
  
    }
  
    _getLocationAsync = async () => {
  
      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      console.log("Location---------------", location)
      this.setState({ location });
      this.setState({
        region:{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
          error: null,
      }
      })
    };
  
  

  render() {
    let text = 'waiting....'
    text = JSON.stringify(this.state.location);
    console.log("regions------------------", this.state.region)
    return (
      <View style={styles.container}>
          <MapView style={styles.map}
            initialRegion = {this.state.initialRegion}
            region={ this.state.region }
            customMapStyle= {SilverMapStyle}
            onRegionChange={ region => this.setState({region}) }
            onRegionChangeComplete={ region => this.setState({region}) }
            >
            <MapView.Marker
            coordinate={this.state.region.latitude ? {latitude: this.state.region.latitude, longitude: this.state.region.longitude}: this.state.initialRegion}
            />  
        </MapView>     
        <Text> Latitude: {text} </Text>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
})