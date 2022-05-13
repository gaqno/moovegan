import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function StyledText( 
  props: { 
    text?: any;
    type?: 'title' | 'subtitle';
    marginLeft?: number;
    number?: number;
    fontSize?: number ; 
    color?: any | undefined;
  }) {
      
  const { text, type, fontSize, marginLeft, color } = props;
  
  if (props.type === 'title') {
    let [fontsLoaded] = useFonts({
      Poppins_400Regular})
    return (
      <>
        <Text style={[styles.title, {fontSize}, {color}, {marginLeft}]}>{text}</Text> 
      </>
    )
  }
  if (props.type === 'subtitle') {
    let [fontsLoaded] = useFonts({
      Poppins_700Bold
    })
    return (
      <>
        <Text style={[styles.subtitle, {fontSize}, {color}, {marginLeft}]}>{text}</Text> 
      </>
    )
  }
}

const styles = StyleSheet.create({
title: {
  fontFamily: 'Poppins_700Bold',
},
subtitle: {
  fontFamily: 'Poppins_400Regular',
}
});