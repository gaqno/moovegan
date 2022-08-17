import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

export const Realties = () => {
  // const navigation = useNavigation();

  return (
    <View>
      <Text className="text-lg p-5">Busca de imóveis</Text>
      <View className="flex-col mx-5 my-3 rounded-xl px-2 bg-white divide-y divide-gray-350 shadow-xl">
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3">
            <MaterialCommunityIcons name="home-outline" size={35} color="gray" />
            <Text className="mt-2">MEUS IMÓVEIS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3">
            <MaterialCommunityIcons name="account-group" size={35} color="gray" />
            <Text className="mt-2">MINHAS INDICAÇÕES</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3">
            <MaterialCommunityIcons name="book-edit-outline" size={35} color="gray" />
            <Text className="mt-2">IMÓVEIS PARA AJUSTE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3">
            <MaterialCommunityIcons name="home-search-outline" size={35} color="gray" />
            <Text className="mt-2">BUSCA AVANÇADA</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text className="mx-5 my-3 text-lg">Cadastro de imóveis</Text>
      <View className="flex-col h-fit mx-5 rounded-xl px-2 bg-white divide-y divide-gray-400 shadow-lg">
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3">
            <MaterialCommunityIcons name="home-plus-outline" size={35} color="gray" />
            <Text className="mt-2">CADASTRAR IMÓVEL</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3">
            <MaterialCommunityIcons name="file-certificate-outline" size={35} color="gray" />
            <Text className="mt-2">FICHAS DE IMÓVEIS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row m-3 gap-x-3">
            <MaterialCommunityIcons name="timer-sand-complete" size={35} color="gray" />
            <Text className="mt-2">PENDÊNCIAS</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
