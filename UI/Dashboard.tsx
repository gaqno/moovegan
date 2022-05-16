import React from 'react';
import { StyleSheet, View } from 'react-native';
import StyledText from './StyledText';
import Badge from './Badge';
import SearchBar from './SearchBar';

export default function Dashboard() {
    return (
      <View style={styles.container}>
        <StyledText label='Categorias' style={{marginLeft: 15, fontSize: 14}}/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});