import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Badge } from "@rneui/themed";
import StyledText from './StyledText';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Header(
  props: {
    title: string;
    icons?: any[];
}) {
  const { title, icons } = props; 

  return (
    <TouchableOpacity style={styles.header}>
      <FontAwesome name="bars" size={24} color='#585858' />
      <StyledText title={title} fontSize={16} type='subtitle' marginLeft={50} color='black' />
      <View style={{height: 50, flexDirection: 'row', width: 80, justifyContent: 'space-between'}}>
        <AntDesign name="bells" size={24} color='#A4A4A4' />
          <Badge 
          value="3" 
          status="success" 
          containerStyle={{ position: 'absolute', top: -5, left: 15 }} />
        <AntDesign name="shoppingcart" size={24} color='#A4A4A4' />
          <Badge 
          value="3" 
          status="success"
          containerStyle={{ position: 'absolute', top: -5, left: 70 }} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 25,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
