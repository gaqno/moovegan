import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Banner1 from '../../assets/QTterça.png';
import Banner4 from '../../assets/indique2.png';
import Banner2 from '../../assets/missao.png';
import Banner3 from '../../assets/play2sell.png';
import ProfileBg from '../../assets/profileBg.jpg';
import { useAuth } from '../contexts/authProvider';

export const Profile = () => {
  const [modal, showModal] = useState(false);

  const { state } = useAuth();

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <View className="flex-1">
      <Text>Profile</Text>
    </View>
  );
};
