import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons'; 
import StyledButton from '../UI/StyledButton';
import StyledText from '../UI/StyledText';

const Login = ( { navigation } ) => {
  const logoPosition = useSharedValue(0);
  const loginPosition = useSharedValue(400)
  const logoStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: logoPosition.value}]};
  })
  const loginStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: loginPosition.value}]}
  })
  useEffect(() => {
    setTimeout(() => {
      logoPosition.value = withTiming(-125, { duration: 1000 })
      loginPosition.value = withTiming(0, { duration: 1250})
    }, 2000);
  }, [])
  
  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.container}>
        <Animated.Image source={require('../assets/logo.png')} style={[styles.logo, logoStyle]} />
        <Animated.View style={[styles.formSection, loginStyle]}>
          <View style={styles.form}>
              <StyledText title='Vamos começar!' type='title' fontSize={24} marginLeft={0}/>
              <StyledText title='Faça seu login para ter acesso ao conteúdo.' type='subtitle' fontSize={12}/>
              <TextInput 
              style={styles.input}
              // onChangeText={}
              // value={}
              placeholder="Email ou usuário"/>
              <TextInput 
              style={styles.input}
              // onChangeText={}
              // value={}
              placeholder="Senha"/>
              <Text style={styles.forgetPassword}> 
                 Esqueceu a senha? 
              </Text>
              <StyledButton title="ENTRAR" onPress={() => navigation.navigate('Home')} backgroundColor="#075E47" />
              <StyledText title='ou continue com:' type='subtitle' fontSize={15} marginLeft={110}/>
                <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-evenly', marginHorizontal: 100}}>
                  <FontAwesome name="facebook" color='blue' size={25} />
                  <FontAwesome name="google" color='orange' size={25} />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <StyledText title='Não tem uma conta?' type='subtitle' fontSize={10} marginLeft={80}/>
                  <StyledText title='Registre-se agora' type='subtitle' fontSize={10} marginLeft={5} color='#EA7B7B'/>
                </View>
            </View>
        </Animated.View>
      </View>
    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#075E47'
  },
  formSection: {
    backgroundColor: 'white',
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    width: 390,
    height: 450,
    marginBottom: -300,
    
  },
  form: {
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  logo: {
    width: 148,
    height: 155
  },
  titleText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 22,
    paddingBottom: 10
  },
  baseText: {
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    fontWeight: "bold"
  },
  input: {
    height: 40,
    padding: 10,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#1F9268'
  },
  forgetPassword: {
    marginLeft: 235,
    color: '#02613F',
    fontSize: 12,
    marginBottom: 10,
    alignContent: 'flex-end'
  }
})

export default Login;
