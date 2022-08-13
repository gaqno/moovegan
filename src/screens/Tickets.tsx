import React from 'react';
import {Center, Icon, Text} from 'native-base';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Tickets = () => {
  return (
    <Center mt={50}>
      <Text>Olá!</Text>
      <Icon as={MaterialCommunityIcons} name="home" />
    </Center>
  );
};

export default Tickets;
