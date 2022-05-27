import React from 'react';
import { Avatar, Icon, Text, View } from 'native-base';
import { DrawerItem, DrawerNavigationProp } from '@react-navigation/drawer';
import { FontAwesome } from "@expo/vector-icons";
import { RootDrawerParamList } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';

type HomeNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Home'>

const DrawerMenuContent = (navigation, routes) => {
    return (
      <View style={{ flex: 1 }}>
        <View alignSelf='center' mt={70}>
          <Avatar
            source={{ uri: "https://pbs.twimg.com/profile_images/13699217875684229size/hoyvrUpc_400x400.jpg" }}
          > SS
          </Avatar>
        </View>
        <Text alignSelf='center' my={5}> Fernandinha </Text>
        <DrawerItem
          label="Pagamentos"
          icon={() => (
            <Icon as={FontAwesome} name="credit-card" color={'dark.200'} size={15} />
          )}
          onPress={() => navigation.navigator('Home')}
        />
        <DrawerItem
          label="Favoritos"
          icon={() => (
            <Icon as={FontAwesome} name="heart-o" color={'dark.200'} size={15} />
          )}
          onPress={() => navigation.navigator('Home')}
        />
        <DrawerItem
          label="Cupons"
          icon={() => (
            <Icon as={FontAwesome} name="ticket" color={'dark.200'} size={15} />
          )}
          onPress={() => navigation.navigator('Home')}
        />
        <DrawerItem
          label="Notificações"
          icon={() => (
            <Icon as={FontAwesome} name="bell-o" color={'dark.200'} size={15} />
          )}
          onPress={() => navigation.navigator('Home')}
        />
        <DrawerItem
          label="Endereços"
          icon={() => (
            <Icon as={FontAwesome} name="bell-o" color={'dark.200'} size={15} />
          )}
          onPress={() => navigation.navigator('Home')}
        />
        <DrawerItem
          label="Dados"
          icon={() => (
            <Icon as={FontAwesome} name="file-o" color={'dark.200'} size={15} />
          )}
          onPress={() => navigation.navigator('Home')}
        />
      </View>
    )
  }

export default DrawerMenuContent;