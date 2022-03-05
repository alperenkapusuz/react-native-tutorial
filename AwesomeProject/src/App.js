import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Eddard Stark</Text>
          <Text style={styles.card_text}>Winter is coming...</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button_title}>I LIKED</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Jon Snow</Text>
          <Text style={styles.card_text}>She is my Queen</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button_title}>I LIKED</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Tamioka Giyu</Text>
          <Text style={styles.card_text}>Water Hashira</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button_title}>I LIKED</Text>
        </TouchableOpacity>
      </View> */}
      <Card title="Rengoku" text="Flame Hashira" />
      <Card title="Tamioka" text="Water Hashira" />
      <Card title="Tengen" text="Sound Hashira" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  // card_container: {
  //   backgroundColor: 'white',
  //   margin: 10,
  //   borderWidth: 1,
  //   borderColor: 'grey',
  //   borderRadius: 10,
  // },
  // card_body: {
  //   padding: 10,
  // },
  // card_title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   margin: 10,
  //   marginBottom: 3,
  // },
  // card_text: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   margin: 10,
  //   marginTop: 3,
  // },
  // card_button_container: {
  //   backgroundColor: '#00C2FF',
  //   padding: 10,
  //   alignItems: 'center',
  //   borderBottomLeftRadius: 10,
  //   borderBottomRightRadius: 10,
  // },
  // card_button_title: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: 'white',
  // },
});

export default App;
