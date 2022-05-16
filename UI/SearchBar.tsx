import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Searchbar } from '';
export default function SearchBar(
  text: any,
  search?: string,
  data?: any
) {
  let [searchData, setSearchData] = useState([]);
  return (
    <View>
      <MaterialIcons name="search" size={24} color='#A4A4A4' />
      <SearchBar
        placeholder="Type Here..."
        onChangeText={search}
        value={search}
      />    
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
