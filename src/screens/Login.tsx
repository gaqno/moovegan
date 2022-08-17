import React, { useEffect, useState } from 'react';
import { Dimensions, Pressable, Text, TextInput, View } from 'react-native';
import Animated, {
  Easing,
  FadeOutDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Logo from '../../assets/icon.png';
import LogoAdapt from '../../assets/icon-green.png';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../contexts/auth';

export const Login = ({ navigation }: any) => {
  const { user, signed, signIn } = useAuth()


  const [state, setState] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(true);
  const [actionsheet, setActionsheet] = useState(false);

  const text = useSharedValue(1000);
  const action = useSharedValue(900);
  const logo = useSharedValue(300);
  const logoAnimation = useAnimatedStyle(() => ({ transform: [{ translateY: logo.value }] }));
  const buttonsAnimation = useAnimatedStyle(() => ({ transform: [{ translateY: text.value }] }));
  const actionAnimation = useAnimatedStyle(() => ({ transform: [{ translateY: action.value }] }));


  useEffect(() => { console.log(user, signed, state) }, [user, state])

  useEffect(() => {
    actionsheet
      ? (action.value = withTiming(Dimensions.get('screen').height * 0, {
        duration: 1500,
        easing: Easing.out(Easing.exp),
      }))
      : (action.value = withTiming(Dimensions.get('screen').height * 0.25, {
        duration: 1500,
        easing: Easing.out(Easing.exp),
      }));
  }, [action, actionsheet]);

  useEffect(() => {
    setTimeout(() => {
      setLogoAnimation();
      setLoading(false);
    }, 2500);
  });

  const handleLogin = () => signIn({ ...state })

  const setLogoAnimation = () => {
    logo.value = withTiming(Dimensions.get('screen').height * 0.1, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
    text.value = withTiming(Dimensions.get('screen').height * 0.25, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  };


  return (
    <View >
      {loading ? (
        <Animated.Image className="self-center" source={LogoAdapt} style={logoAnimation} />
      ) : (
        <LinearGradient className="h-full border-2" colors={['#025A44', '#057659']}>
          <Animated.Image
            className="self-center"
            source={Logo}
            style={logoAnimation}
          />
          <Pressable onPress={() => setActionsheet(!actionsheet)}>
            <Animated.View style={buttonsAnimation}>
              <Text className="text-base text-white font-regular text-center mx-5 ">
                O problema presente na criação de gado é o consumo excessivo de recursos
                naturais, cerca de 70% do consumo de água potável no mundo é utilizada na
                irrigação das lavouras, pecuária e na agricultura.
              </Text>
            </Animated.View>
          </Pressable>
        </LinearGradient >
      )}
      {actionsheet && (
        <Animated.View
          exiting={FadeOutDown}
          className="w-full h-fit mt-auto z-10 bg-default-white rounded-t-3xl bg-white px-5 shadow-2xl"
          style={actionAnimation}
        >
          <View className="p-5">
            <View className="border-2 w-1/6 mb-10 self-center rounded-md border-default-gray" />
            <Text className=" text-2xl font-bold">Vamos começar!</Text>
            <Text className=" text-sm font-regular text-default-grayboldest">Faça login para ter acesso ao conteúdo.</Text>
            <TextInput
              className="border-2 border-primary-medium p-2 h-12 mt-5 rounded-md bg-gray-100"
              placeholder="Informe seu e-mail"
              onChangeText={(e) => setState({ ...state, email: e })}
            />
            <TextInput
              className="border-2 border-primary-medium p-2 h-12  mt-3 rounded-md bg-gray-100"
              placeholder="Senha"
              secureTextEntry
              onChangeText={(e) => setState({ ...state, password: e })}
            />
            <Pressable onPress={() => navigation.navigate('Home')}>
              <Text className=" text-primary-darker self-end mb-3">
                Esqueceu sua senha?
              </Text>
            </Pressable>
            <Pressable
              onPress={handleLogin}
            >
              <LinearGradient colors={['#025A44', '#057659']} className="rounded-md p-3">
                <Text className="text-lg text-white self-center">ENTRAR</Text>
              </LinearGradient>
            </Pressable>
            <Text className="mt-3 font-poppins_semibold text-center ">ou continue com:</Text>
            <View className="flex-row w-20 self-center justify-between">
              <MaterialCommunityIcons name="google" size={30} color="#025A44" />
              <MaterialCommunityIcons name="facebook" size={30} color="#025A44" />
            </View>
            <View className="flex-row self-center gap-x-5">
              <Text>Não tem um conta?</Text>
              <Text className="text-secondary-rose">Registre-se agora</Text>
            </View>
          </View>
        </Animated.View>
      )
      }
    </View>
  );
};
