import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation/RootNavigation';
import Expo, { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {

  state = {
    isReady: false,
  };



  _loadAssetsAsync = async () => {
    return Font.loadAsync({
      ...Ionicons.font,
      'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
      'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Semibold.ttf'),
      'Pacifico': require('./assets/fonts/Pacifico-Regular.ttf'),
      'Gloria': require('./assets/fonts/GloriaHallelujah.ttf')
    });
  };

  _loadDataAndAssetsAsync = async () => {
    return Promise.all(this._loadAssetsAsync());
  };

  render() {
    if (!this.state.isReady) {
      return (
        <Expo.AppLoading
          startAsync={this._loadDataAndAssetsAsync}
          onError={e => console.error(e)}
          onFinish={() => {
            this.setState({
              isReady: true,
            });
          }}
        />
      );
    }
    return (
      
        <RootNavigation />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
