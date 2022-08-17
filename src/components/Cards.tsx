import { Image, ImageBackground, Text, View } from 'react-native';

export const Cards = () => {
  return (
    <View className='border-2'>
      <View>
        <Image source={{ uri: 'https://i1.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg' }} />
      </View>
      <Text>Cards</Text>
    </View >
  );
};
