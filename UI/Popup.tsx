import React, { useEffect } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import StyledText from './StyledText'
import StyledButton from './StyledButton'

// transformar esse componente em um componente rolavel,
// assim, mostrando as informações informativas.
type popupType = 'login' | 'empty' | 'error';
export default function Popup(
  props: { 
    buttonOnPress: (event: any) => void,
    title?: string, 
    subtitle?: string, 
    type: popupType,  
    hiddens?: boolean
    click?: boolean
  }) {
    let click = props.click;
    const popup = useSharedValue(700)
    const popupAnimation = useAnimatedStyle(() => {
      return { 
        transform: [{ translateY: popup.value}],
      };
    })

    useEffect(() => {
      setTimeout(() => {
        popup.value = withTiming(250, { duration: 500, easing: Easing.out(Easing.exp) })
      }, 1000);
    }, [])
  return (
    <>
      { click === true && (
        <Animated.View style={[styles.popup, popupAnimation]}>
          <View style={styles.form}>
            <StyledText text={props.title} bold style={{fontSize: 24}} />
            <StyledText text={props.subtitle} style={{fontSize: 12}}/>
            { props.type === 'login' && (
              <>
                <TextInput style={styles.input} placeholder="Email ou usuário"/>
                <TextInput style={styles.input} placeholder="Senha"/>
                <StyledText text='Esqueceu a senha?'
                style={{
                  fontSize: 10, 
                  color: '#075E47', 
                  marginLeft: 240, 
                  marginVertical: 10 
                  }} /> 
                <StyledButton title="ENTRAR" backgroundColor="#075E47" onPress={props.ButtonOnPress} />
                <StyledText text='ou continue com:' style={{fontSize: 15, marginLeft: 100}}/>
                <View style={{flexDirection: 'row', marginBottom: 10, justifyContent: 'space-evenly', marginHorizontal: 100}}>
                  <FontAwesome name="facebook" color='#075E47' size={25} />
                  <FontAwesome name="google" color='#075E47' size={25} />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <StyledText text='Não tem uma conta?' style={{fontSize: 10, marginLeft: 50}}/>
                  <StyledText text='Registre-se agora'  bold style={{fontSize: 10, marginLeft: 10, color: '#EA7B7B'}}/>
                </View>
              </>
            )}
            { props.type === 'empty' && (
              <View>
                <StyledText text='Não há nada aqui' style={{fontSize: 20}}/>
              </View> 
            )}
            { props.type === 'error' && (
              <View>
                <StyledText text='Erro' style={{fontSize: 20}}/>
              </View>
              )}
          </View>
        </ Animated.View>
      )}
    </>
  )
}
const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    backgroundColor: '#FFF',
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    width: '100%',
    height: '70%',
  },
  input: {
    height: 40,
    padding: 10,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#1F9268'
  },
  form: {
    paddingTop: 50,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
})