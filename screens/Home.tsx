import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;