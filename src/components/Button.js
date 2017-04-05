import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

class Button extends Component {

    // console.log(props.game.thumbnail_img);
    render() {
      return (
        <TouchableOpacity style={styles.buttonStyle} onPress={this.props.buyGame}>
              <Text style={styles.textStyle}>click on me!</Text>
        </TouchableOpacity>
      );
    }
}

const styles = StyleSheet.create({
textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
});

export default Button;
