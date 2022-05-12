import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { MaterialIcons } from '@expo/vector-icons';
import StyledText from './StyledText';

export default function SearchBar(
  text: string,
  search: string,
  data: any
) {
  return (
    <View>
      <MaterialIcons name="search" size={24} color='#A4A4A4' />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginBottom: 5
  },
  text: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
});
