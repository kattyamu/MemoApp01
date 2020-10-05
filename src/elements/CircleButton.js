import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.CircleButton}>
        <Text style={styles.CircleButtonTitle}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CircleButton: {
    position: 'absolute',
    right: 32,
    bottom: 32,
    width: 48,
    height: 48,
    backgroundColor: '#e31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#e31676',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  CircleButtonTitle: {
    fontSize: 32,
    lineHeight: 36,
    color: '#fff',
  },
});

export default CircleButton
