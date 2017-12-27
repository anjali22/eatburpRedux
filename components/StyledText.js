import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import {
  Font,
} from 'expo';

export class RegularText extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[this.props.style, styles.regular]} />
    );
  }
}

export class LightText extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[this.props.style, styles.light]} />
    );
  }
}

export class BoldText extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[this.props.style, styles.bold]} />
    );
  }
}

export class PacificoText extends React.Component {
    render() {
      return (
        <Text {...this.props} style={[this.props.style, styles.pacifico]} />
    );
  }
}

export class GloriaText extends React.Component {
    render() {
      return (
        <Text {...this.props} style={[this.props.style, styles.gloria]} />
    );
  }
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'OpenSans',
  },
  light: {
    fontFamily: 'OpenSans-Light',
  },
  bold: {
    fontFamily: 'OpenSans-Bold',
  },
  pacifico: {
    fontFamily: 'Pacifico',
  },
  gloria: {
    fontFamily: 'Gloria',
  }
});
