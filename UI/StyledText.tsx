import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function StyledText( 
  props: { 
    title?: string;
    type: 'title' | 'subtitle';
    marginLeft?: number ;
    fontSize: number ; 
    color?: any;
  }) {
      
  const { title, type, fontSize, marginLeft, color } = props;
  
  if (props.type === 'title') {
    let [fontsLoaded] = useFonts({
      Poppins_400Regular})
    return (
      <Text style={[styles.title, {fontSize}, {marginLeft}, {color}]}>{title}</Text> 
    )
  }
  if (props.type === 'subtitle') {
    let [fontsLoaded] = useFonts({
      Poppins_700Bold
    })
    return (
      <View>
        <Text style={[styles.subtitle, {fontSize}, {marginLeft}, {color}]}>{title}</Text> 
      </View>
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