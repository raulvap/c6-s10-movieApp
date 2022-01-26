import React, {useRef} from 'react';
import {Animated} from 'react-native';

// Custom hook para hacer las animaciones de fade in y fade out: (clase 173)
export const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  // Usamos un callback de tipo función para que haga algo cuando termine: (clase 180)
  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};
