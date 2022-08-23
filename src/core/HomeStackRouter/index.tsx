import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../HomeScreen';
import { Screen1 } from '../../features/Screen1';
import { ScreensEnum } from '../../shared/enums/screens-enum';

const { Navigator, Screen } = createNativeStackNavigator();

function HomeStackRouter(): ReactElement {
  return (
      <Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
        <Screen name={ScreensEnum.HOME} component={HomeScreen} />
        <Screen name={ScreensEnum.SCREEN1} component={Screen1} />
      </Navigator>
  );
}

export { HomeStackRouter };
