import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Logged: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Logged</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default Logged;
