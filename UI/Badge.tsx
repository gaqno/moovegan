import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function Badge( 
  props: { 
    valor: number; 
    backgroundColor?: any;
    size?: number;
    top?: number;
    left?: number; 
  }) {
  const { valor, backgroundColor, size, top, left } = props;

  return (
    <TouchableOpacity 
    style={[
      styles.badge,
      backgroundColor && { backgroundColor },
      size && { width: size, height: size },
      top && { top },
      left && { left }
    ]}>
      <Text style={styles.text}>{valor}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
badge: {
  position: 'absolute', 
  borderRadius: 10,
},
text: {
  fontSize: 10,
  textAlign: 'center',
  justifyContent: 'center',
  color: 'white',
}
});