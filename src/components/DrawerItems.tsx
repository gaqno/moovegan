import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

export const DrawerItems = () => {
  let navigation = useNavigation();
  const acessPage = (page: string) => navigation.navigate(page);
  const setIcon = (icon: any) => <MaterialCommunityIcons name={icon} color="dark.200" size={25} />;
  return (
    <DrawerContentScrollView>
      <Image className='w-28 h-28 self-center' source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147142.png' }} />
      <DrawerItem
        label="Pagamentos"
        onPress={() => acessPage('PaymentsTab')}
        icon={() => setIcon('credit-card-outline')}

      />
      <DrawerItem
        label="Favoritos"
        onPress={() => acessPage('FavoritesTab')}
        icon={() => setIcon("heart-outline")}
      />
      <DrawerItem
        label="Cupons"
        onPress={() => acessPage('TicketsTab')}
        icon={() => setIcon("ticket-outline")} />
      <DrawerItem
        label="Notificações"
        onPress={() => acessPage('NotificationsTab')}
        icon={() => setIcon("bell-outline")} />
      <DrawerItem
        label="Endereços"
        onPress={() => acessPage('AdressTab')}
        icon={() => setIcon("map-marker-outline")}
      />
      <DrawerItem
        label="Dados"
        icon={() => setIcon("file-outline")}
        onPress={() => acessPage('DataTab')} />
      <View className='mt-10' />
      <DrawerItem
        label="Ajuda"
        icon={() => setIcon("help-circle-outline")}
        onPress={() => acessPage('HelpTab')}
      />
      <DrawerItem
        label="Configurações"
        icon={() => setIcon("cog-outline")}
        onPress={() => acessPage('ConfigurationTab')} />
      <DrawerItem
        label="Segurança"
        icon={() => setIcon("shield-check-outline")}
        onPress={() => acessPage('SecurityTab')} />
      <View className='mt-10' />
      <DrawerItem
        label="Sair"
        onPress={() => acessPage('LogoutTab')}
        icon={() => setIcon("logout")}
      />
    </DrawerContentScrollView >
  )
}
