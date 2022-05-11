import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function StyledButton( 
  props: { 
    onPress: any; 
    title?: string;
    backgroundColor?: any; 
  }) {
  const { onPress, title, backgroundColor } = props;

  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_700Bold
  });
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={[
      styles.button,
      backgroundColor && { backgroundColor }
    ]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
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
