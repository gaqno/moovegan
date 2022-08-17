import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    facId: '34543',
    date: '15/06/2022',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    facId: '59834',
    date: '09/12/2022',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    facId: '493297',
    date: '30/09/2022',
  },
];

export const Notifications = () => {
  const renderItem = ({ item }: any) => <NotificationCard date={item.date} facId={item.facId} />;
  const renderHiddenItem = () => <View />;
  return (
    <SwipeListView
      disableRightSwipe
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      rightOpenValue={-Dimensions.get('window').width}
      onSwipeValueChange={() => console.log('onSwipeValueChange')}
      renderHiddenItem={renderHiddenItem}
    />
  );
};

const NotificationCard = (props: CardProps) => {
  const { date, facId } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <View className="my-2">
      <TouchableOpacity activeOpacity={0.8} onPress={() => setExpanded(!expanded)}>
        <View className="bg-white mx-3 rounded-xl py-2 shadow-md">
          <View className="flex-row justify-between px-2 py-2">
            <Text className="font-semibold text-base">Atualização da ficha</Text>
            <Text>{date}</Text>
          </View>
          <View className="flex-row mx-2 justify-between">
            <Text>Sua ficha retornou para a listagem</Text>
            {expanded ? (
              <MaterialCommunityIcons name="check-bold" size={22} color="green" />
            ) : (
              <MaterialCommunityIcons name="eye" size={22} />
            )}
          </View>
          <>
            {expanded && (
              <View className="mx-3">
                <Text className="text-xs mt-3">
                  O prazo para completar a sua pendência {facId} expirou.
                </Text>
                <Text className="text-xs">A ficha foi enviada novamente para a listagem.</Text>
              </View>
            )}
          </>
        </View>
      </TouchableOpacity>
    </View>
  );
};

type CardProps = {
  date: string;
  facId: number;
};
