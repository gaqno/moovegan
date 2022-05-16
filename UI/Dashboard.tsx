import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import StyledText from './StyledText';
import Badge from './Badge';
import SearchBar from './SearchBar';

export default function Dashboard() {
    return (
      <View style={styles.container}>
        <StyledText label='Categorias' style={{marginLeft: 15, fontSize: 14}}/>
        <SearchBar text="Busque por pratos" />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
