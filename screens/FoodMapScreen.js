import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

import { Maps } from "../components/Maps";
import SilverMapStyle from '../styles/SilverMapStyle.json';
import place from "../data/place";

import { MapView, Location, Permissions } from "expo";

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
        location: null,
        coordinates: [
          {
            latitude: 22.756743,
            longitude: 75.887344
          },
          {
            latitude: 22.761304,
            longitude: 75.887549
          }
        ],
        place
    };
  }
    componentWillMount() {
      this._getLocationAsync();
    }
  
    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }
    
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
    let coords = this.state.coordinates;
    return (
      <View style={styles.container}>
          <MapView style={styles.map}
            initialRegion = {this.state.initialRegion}
            region={ this.state.region }
            customMapStyle= {SilverMapStyle}
            onRegionChange={ region => this.setState({region}) }
            onRegionChangeComplete={ region => this.setState({region}) }
            >
            {this.state.place.map((coords, key) => (
                <MapView.Marker
                key = {key}
                title = {coords.name}
                coordinate={{
                latitude: coords.coordinates.latitude,
                longitude: coords.coordinates.longitude,
              }}
                ></MapView.Marker>  
            ))}
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