import React, { useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import AppLoading from 'expo-app-loading';
import Popup from '../UI/Popup';
import StyledText from '../UI/StyledText';

const Login = ({ navigation }: any) => {
  const logo = useSharedValue(250);
  const section = useSharedValue(700);
  const logoAnimation = useAnimatedStyle(() => {
    return { transform: [{ translateY: logo.value}]};
  })
  const sectionAnimation = useAnimatedStyle(() => {
    return { 
      transform: [{ translateY: section.value}],
    };
  })
  let [click, setClick] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      logo.value = withTiming(0, { duration: 1250, easing: Easing.out(Easing.exp) })
    }, 4000); 
    setTimeout(() => {
      section.value = withTiming(100, { duration: 500, easing: Easing.out(Easing.exp) })
    }, 4500);
  }, [])
  
  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
          <Animated.Image source={require('../assets/logo.png')} style={[styles.logo, logoAnimation]} />
          <TouchableOpacity onPress={() => setClick(true)}>
            <Animated.View style={[styles.section, sectionAnimation]}>
              <StyledText text='Loren Ipnus Loren Ipnus Loren Ipnus' style={{fontSize: 16, color: '#FFF'}}/>
            </Animated.View>
          </TouchableOpacity>
          { click == true && (
            <Popup 
              click={click}
              type='login' 
              title='Vamos começar!' 
              subtitle='Faça login para ter acesso ao conteúdo.'
              buttonOnPress={() => navigation.navigate('Home')} />
          )}
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
  section: {
    width : '80%',
    height: '40%'
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
})

export default Login;

