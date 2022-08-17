import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Cards } from '../components/Cards';

export const HomeScreen = () => {
  const [click, setClick] = useState({ category: [{ label: '', active: false }] })
  let category: ["Almoço", "Sobremesa", "Café da manhã"]

  const getCategory = useCallback((e: string) => {
    setClick({ category: [{ label: e, active: true }] })
  }, [click.category])



  useEffect(() => { console.log(click) }, [click])
  return (
    <View className="bg-white">
      <Pressable className='bg-gray-200 w-fit mx-5 py-3 flex-row rounded-xl'>
        <MaterialCommunityIcons name="magnify" size={25} />
        <TextInput className='text-gray-500 text-sm' placeholder="Procure por receitas" />
        <MaterialCommunityIcons name="filter-variant" size={25} style={{ marginStart: 150 }} />
      </Pressable>

      <Text className="p-6 text-base">Categorias</Text>
      <View className='flex-row gap-x-7 self-center' >
        <TouchableOpacity className="rounded-full" onPress={() => getCategory('Almoço')}>
          {click.category.map((category) => category.label === 'Almoço')
            ? <Text className='p-2 text-black'>Almoço</Text>
            : <Text className='bg-primary-darker rounded-full p-2'>Almoço</Text>
          }
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full" onPress={() => getCategory('Sobremesa')}>
          {click.category.map((category) => category.label === 'Sobremesa')
            ? <Text className='p-2 text-black'>Sobremesa</Text>
            : <Text className='bg-primary-darker rounded-full p-2'>Sobremesa</Text>
          }
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full" onPress={() => getCategory('Café da manhã')}>
          {click.category.map((category) => category.label === 'Café da manhã')
            ? <Text className='p-2 text-black'>Café da manhã</Text>
            : <Text className='bg-primary-darker rounded-full p-2'>Café da manhã</Text>
          }
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="plus-circle" size={25} />
        </TouchableOpacity>
      </View>

      <Cards />
    </View>
  );
};
