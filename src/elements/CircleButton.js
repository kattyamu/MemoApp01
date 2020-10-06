import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const glyphMap = {
  pencil: '\uf303',
  plus: '\uf067',
};
const CustomIcon = createIconSet(glyphMap, 'FontAwsome', 'custom-icon-font.ttf');

class CircleButton extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      FontAwsome : fontAwsome,
    });

    this.setState({ fontsLoaded: true });
  }
  
  render() {
    const { name, style, color } = this.props;
    // const style = this.props.style;

    let bgColor = '#e31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#e31676';
    }

    return (
      <View style={[styles.CircleButton, style, {backgroundColor: bgColor}]}>
        {
          this.state.fontsLoaded ? (
            <CustomIcon name={name} style={[styles.CircleButtonTitle, {color: textColor}]} />
          ) : null
        }
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
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 36,
  },
});

export default CircleButton
