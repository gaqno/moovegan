import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert, View, StyleProp } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function StyledText( 
  props: { 
    label?: any;
    bold?: boolean;
    style: StyleProp<any>;
  }) {
    const { label, bold, style } = props;
    let [fontsLoaded] = useFonts({
      Poppins_400Regular, Poppins_700Bold})
     return (
     <>
     { props.bold == true
     ? <Text style={[styles.title, style]}>{label}</Text> 
     : <Text style={[styles.subtitle, style]}>{label}</Text> }
     </>
   )
  }

const styles = StyleSheet.create({
title: {
  fontFamily: 'Poppins_700Bold',
},
subtitle: {
  fontFamily: 'Poppins_400Regular',
}
});