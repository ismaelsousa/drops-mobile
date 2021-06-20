/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef} from 'react';
import {SafeAreaView, useColorScheme, Button, Alert} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Square, {RefSquare} from './components/Square';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const refSquare = useRef<RefSquare>({getCurrentColor: () => ''});

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handlePress = () =>
    Alert.alert('Current Color', refSquare.current.getCurrentColor());

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <Button title="press me" onPress={handlePress} />
      <Square ref={refSquare} key="square" colors={['blue', 'black']} />
    </SafeAreaView>
  );
};

export default App;
