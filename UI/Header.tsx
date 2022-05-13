<<<<<<< HEAD
import React, { Fragment, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import StyledText from './StyledText';
import Badge from './Badge';
=======
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Badge } from "@rneui/themed";
import StyledText from './StyledText';
import { TouchableOpacity } from 'react-native-gesture-handler';
>>>>>>> 2ffc225289957cbbdc754851934735c05b86c514

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


 
  return (
    <Fragment>
      <TouchableOpacity style={styles.header}>
        <MaterialIcons name="menu" size={28} color='#585858' />
        <StyledText text={title} fontSize={16} type='subtitle' marginLeft={50} color='black' />
        <View style={{height: 50, flexDirection: 'row', width: 80, justifyContent: 'space-between'}}>
          <MaterialIcons name="notifications-none" size={24} color='#A4A4A4' />
          <Badge valor={3} size={12} left={10} backgroundColor='#057659'/>
          <MaterialIcons name="shopping-bag" size={24} color='#A4A4A4' />
          <Badge valor={3} size={12} left={70} backgroundColor='#057659'/>
        </View>
      </TouchableOpacity>
    </ Fragment>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
