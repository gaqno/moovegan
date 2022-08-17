import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
export const Help = () => {
  return (
    <View>
      <Text className="text-lg p-5">Menu de serviços</Text>
      <View className="flex-col mx-5 my-3 rounded-xl px-2 bg-white divide-y divide-gray-350 shadow-xl">
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3">
            <MaterialCommunityIcons name="account-tie" size={35} color="gray" />
            <Text className="mt-2">QUERO UM NEGOCIADOR</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3">
            <MaterialCommunityIcons name="pencil-circle" size={35} color="gray" />
            <Text className="mt-2">PRECISO DE APOIO JURÍDICO</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3  ">
            <MaterialCommunityIcons name="currency-usd" size={35} color="gray" />
            <Text className="mt-2">SIMULAR FINANCIAMENTO</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3 ">
            <MaterialCommunityIcons name="handshake" size={35} color="gray" />
            <Text className="mt-2">PARCERIA COM OUTRO DISTRITO</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3 ">
            <MaterialCommunityIcons name="account-cash" size={35} color="gray" />
            <Text className="mt-2">QUERO PAGAR A NEWCORE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3 ">
            <MaterialCommunityIcons name="account-switch" size={35} color="gray" />
            <Text className="mt-2">INDIQUE E GANHE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
