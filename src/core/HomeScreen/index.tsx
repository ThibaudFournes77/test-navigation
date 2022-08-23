import { Button, View } from 'react-native';
import React, { ReactElement } from 'react';
import { ScreensEnum } from '../../shared/enums/screens-enum';
import { styles } from './styles';

function HomeScreen({ navigation }: any): ReactElement {
  return (
    <View style={styles.container}>
      <Button
        testID="go-to-screen1-btn"
        title="Aller sur Screen1"
        onPress={() => navigation.navigate(ScreensEnum.SCREEN1)}
      />
    </View>
  );
}

export { HomeScreen };
