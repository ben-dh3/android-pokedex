import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, Animated, Easing } from 'react-native';

const NavigationButton = ({ onPress, colour }) => {
  const backgroundColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(backgroundColor, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(backgroundColor, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [backgroundColor]);

  const interpolatedColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: [colour, '#FFFFFF'],
  });
'#A1EEFF'
  return (
    <TouchableOpacity onPress={onPress} style={{ alignSelf: 'center', position: 'absolute' }}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          backgroundColor: interpolatedColor,
          borderWidth: 20,
        }}
      />
    </TouchableOpacity>
  );
};

export default NavigationButton;
