import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (

    <View
      style={{
        flex: 1, alignItems: 'center', justifyContent: 'center'
      }}>
      <Text>Home kuks Screen loaded</Text>
      <Button title="Go to Details"
        onPress={() => navigation.navigate("Details")} />
    </View>

  );
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})