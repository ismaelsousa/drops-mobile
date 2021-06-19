/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleDebug = () => {
    const d1 = {
      name: 'ismael',
    };
    const d2 = {
      name: 'pablo',
    };
    const d3 = {...d1, ...d2};

    function printD2() {
      console.log(d2);
    }
    console.log(d3);

    printD2();
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <TouchableOpacity onPress={handleDebug}>
          <Text style={{fontSize: 50}}>Press me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
