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

import { RegularText } from "./StyledText";


export class SummaryCard extends React.Component {
    constructor(props){
        super(props)
    }

    render = () => {
      let text  = this.props.text;
        console.log("summary details-----------",text)
      if (!text) {
          console.log("in here------")
        return <View />;
      }
  
      return (
        <View >
             <RegularText> {text} </RegularText>
        </View>
      )
    }
  }