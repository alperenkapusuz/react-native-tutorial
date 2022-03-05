import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box_1} />
      <View style={styles.box_2} />
      <View style={styles.box_3} />
      <View style={styles.box_4} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent: 'space-between',
    //alignItems: 'center',
  },
  box_1: {
    width: 75,
    height: 75,
    backgroundColor: 'red',
  },
  box_2: {
    width: 75,
    height: 75,
    backgroundColor: 'blue',
  },
  box_3: {
    width: 75,
    height: 75,
    backgroundColor: 'aqua',
  },
  box_4: {
    width: 75,
    height: 75,
    backgroundColor: 'orange',
  },
});

export default App;
