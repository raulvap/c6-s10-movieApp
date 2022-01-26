import React, {createContext, useState} from 'react';

// Creamos una interface para definir el state de color:
interface ImageColor {
  primary: string;
  secondary: string;
}

// Creamos una interface para definir el tipo del context y provider
interface ContextProps {
  colors: ImageColor;
  prevColors: ImageColor;
  setMainColor: (colors: ImageColor) => void;
  setPrevMainColor: (colors: ImageColor) => void;
}

// 1. Creamos un context que va a manejar el estado de los colores (clase 178)
export const GradientContext = createContext<ContextProps>({} as ContextProps);

// 2. Creamos el Provider, que se encargar de proveer las funciones a toda la app
export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<ImageColor>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImageColor>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColor = (colorsProps: ImageColor) => {
    setColors(colorsProps);
  };
  const setPrevMainColor = (colorsProps: ImageColor) => {
    setPrevColors(colorsProps);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setMainColor,
        setPrevMainColor,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
