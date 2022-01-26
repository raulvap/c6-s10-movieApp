import {View, StyleSheet, Animated} from 'react-native';
import React, {useContext, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import {useFade} from '../hooks/useFade';

// Como es de tipo HOC, debemos definir las props:
interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradienteBackground = ({children}: Props) => {
  // Hacemos toda la lógica para hacer la animación de cambio de colores: (clase 180)
  const {colors, prevColors, setPrevMainColor} = useContext(GradientContext);
  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColor(colors);
      fadeOut();
    });
  }, [colors]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.45, y: 0.7}}
      />

      {/* Lógica para el segundo gradiente: */}
      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.45, y: 0.7}}
        />
      </Animated.View>

      {children}
    </View>
  );
};

export default GradienteBackground;
