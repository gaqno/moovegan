import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Login = ( props: any ) => {
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
              <Text style={styles.titleText}> Vamos começar! </Text>
              <Text> Faça seu login para ter acesso ao conteúdo. </Text>
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
              <Button color="#02613F" title='Entrar' onPress={() => console.log('u press me! :)')}/>
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
    height: 400,
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
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#1F9268'
  },
  button: {
    width: 50,
    backgroundColor: '#02613F',
    borderRadius: 15
  },
  forgetPassword: {
    marginLeft: 225,
    color: '#02613F',
    fontSize: 12,
    marginBottom: 10,
    alignContent: 'flex-end'
  }
})

export default Login;
