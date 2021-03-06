import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const DetailsScreen = ({ navigation }) => {


  return (

    <View
      style={{
        flex: 1, alignItems: 'center', justifyContent: 'center'
      }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details again ...."
        onPress={() => navigation.push("Details")}
      /><Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      /><Button
        title="Go Back ...."
        onPress={() => navigation.goBack()}
      /><Button
        title="Go to First screen"
        onPress={() => navigation.popToTop("Details")}
      />

    </View>

  );
};

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})