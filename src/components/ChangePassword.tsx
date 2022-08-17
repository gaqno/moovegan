import { Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export const ChangePassword = () => {
  return (
    <View className="absolute bg-white self-center w-80 rounded-md shadow-2xl mt-56 ease-in duration-75">
      <Text className="h-10 w-2/3 pt-2 bottom-5 rounded-xl font-bold text-center self-center  text-white bg-red-900 ">
        INFO DISTRITO
      </Text>
      <View className="mx-10 w-fit gap-y-4">
        <Text className="text-base">DISTRITO</Text>
        <Text className="border-2 border-red-900 bg-gray-300 rounded-md p-2">Moema***</Text>
        <Text className="text-base">EMBAIXADOR</Text>
        <Text className="border-2 border-red-900 bg-gray-300 rounded-md p-2">Galileu***</Text>
        <View className="flex-row self-center gap-x-5 my-5">
          <MaterialCommunityIcons name="whatsapp" size={45} color="green" />
          <MaterialCommunityIcons name="phone" size={45} color="darkred" />
          <MaterialCommunityIcons name="email" size={45} color="gray" />
        </View>
        <Text className="text-base">LOCALIDADES</Text>
        <View className="border-2 border-red-900 bg-gray-300 rounded-md p-2 my-5" />
      </View>
    </View>
  );
};
