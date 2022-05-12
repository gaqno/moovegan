import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Badge } from "@rneui/themed";
import StyledText from './StyledText';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SearchBar } from '@rneui/themed';
import { useEffect } from 'react';

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
    <>
      <TouchableOpacity style={styles.header}>
        <MaterialIcons name="menu" size={28} color='#585858' />
        <StyledText text={title} fontSize={16} type='subtitle' marginLeft={50} color='black' />
        <View style={{height: 50, flexDirection: 'row', width: 80, justifyContent: 'space-between'}}>
          <MaterialIcons name="notifications-none" size={24} color='#A4A4A4' />
            <Badge 
            value="3" 
            status="success" 
            containerStyle={{ position: 'absolute', top: -5, left: 15 }} />
          <MaterialIcons name="shopping-bag" size={24} color='#A4A4A4' />
            <Badge 
            value="3" 
            status="success"
            containerStyle={{ position: 'absolute', top: -5, left: 70 }} />
        </View>
      </TouchableOpacity>
      <SearchBar
      lightTheme={true}
      placeholder="Procure por receitas"
      onChangeText={updateSearch}
      value={search}
      searchIcon={true}
      containerStyle={{backgroundColor: 'white', borderColor: 'none', paddingHorizontal: 15}}
      inputStyle={{backgroundColor: '#EAEAEA'}}
      inputContainerStyle={{backgroundColor: '#EAEAEA', borderRadius: 15}}
      />
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
});
