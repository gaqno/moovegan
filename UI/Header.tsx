import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import StyledText from './StyledText';

export default function Header(
  props: {
    title: string;
    icons?: any[];
  }) {
  const { title, icons } = props; 
  const [search, setSearch] = useState("");
  const updateSearch = (search: React.SetStateAction<any>) => {
    setSearch(search);
  };
  const Badge = ( 
    props: { 
      valor: number; 
      backgroundColor?: any;
      size?: number;
      top?: number;
      left?: number; 
    }) => {
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

  return (
    <>
      <TouchableOpacity style={styles.header}>
        <MaterialIcons name="menu" size={28} color='#585858' />
        <StyledText text={title} style={{fontSize: 16, marginLeft: 50, color: 'black'}} />
        <View style={{height: 50, flexDirection: 'row', width: 80, justifyContent: 'space-between'}}>
          <MaterialIcons name="notifications-none" size={24} color='#A4A4A4' />
          <Badge valor={5} size={12} left={10} backgroundColor='#057659'/>
          <MaterialIcons name="shopping-basket" size={24} color='#A4A4A4' />
          <Badge valor={3} size={12} left={70} backgroundColor='#057659'/>
        </View>
      </TouchableOpacity>
    </>
  )
}


const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
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