import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';

function Screen1(): ReactElement {
  return (
    <View testID="screen1">
      <Text>Screen1</Text>
    </View>
  );
}

export { Screen1 };
