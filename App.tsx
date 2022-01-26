import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationStack} from './src/navigation/Navigation';
import {GradientProvider} from './src/context/GradientContext';

// Creamos un HOC que va a tener todo el context de los colores:
const AppColorContext = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppColorContext>
        <NavigationStack />
      </AppColorContext>
    </NavigationContainer>
  );
};

export default App;
