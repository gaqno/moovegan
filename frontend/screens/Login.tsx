import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { Actionsheet, Box, Center, FormControl, Input, Pressable, Stack, Text, useDisclose,  View, Button, Icon, IconButton, HStack } from 'native-base';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { FontAwesome } from "@expo/vector-icons";


function Login({ navigation }: any){
  const { onOpen, isOpen, onClose } = useDisclose()
  const logo = useSharedValue(100);
  const section = useSharedValue(700);
  const logoAnimation = useAnimatedStyle(() => {
    return { transform: [{ translateY: logo.value}]};
  })
  const sectionAnimation = useAnimatedStyle(() => {
    return { transform: [{ translateY: section.value}]};
  })

  useEffect(() => {
    setTimeout(() => {
      logo.value = withTiming(50, { duration: 1250, easing: Easing.out(Easing.exp) })
      section.value = withTiming(100, { duration: 500, easing: Easing.out(Easing.exp) })
    }, 2500); 
  },[])

  return (
    <Center flex={1} bg="primary.200">
      <Animated.Image source={require('../assets/logo.png')} style={[styles.logo, logoAnimation]} />
        <Animated.View style={[styles.section, sectionAnimation]}>
          <Box alignItems='center' rounded="lg" mb="50" height="250">
            <Pressable onPress={onOpen}>
              <Text size='xs' color='#FFF'>
              O problema presente na criação de gado é o consumo excessivo de recursos naturais, cerca de 70% do consumo de água potável no mundo é utilizada na irrigação das lavouras,  pecuária e na agricultura.              
              </Text>
            </Pressable>
          </Box>
        </Animated.View>
          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
              <Box mt={5} mx={10} width={'350'}>
                <Text right={2} bold fontSize={22}> Vamos começar!</Text>
                <Text pb={5}>Faça login para ter acesso ao conteúdo.</Text>
                <View>
                  <FormControl isRequired isInvalid>
                    <Stack>
                      <Input placeholder="Email ou usuário" type="email" p={2} mb={3} />
                      <Input placeholder="Senha" type='password' p={2}  />
                      <FormControl.HelperText pb={3} left='70%' color='primary.100'>
                        Esqueceu a senha?
                      </FormControl.HelperText>
                       {/* TODO:
                       <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                       */}
                    </Stack>
                  </FormControl>
                </View>
            <Button bg="primary.200" onPress={() => { navigation.navigate('Main')}}>
                    <Text bold color='#FFF'>ENTRAR</Text>
                  </Button>
                  <Text alignSelf='center' bold> ou continue com: </Text>
                  <Box flexDirection='row' justifyContent="space-between" mx={125}>
                    <IconButton
                      icon={ <Icon as={FontAwesome} name="google" color="primary.200" /> }
                      onPress={()=>{ console.log('hello')}}
                    />
                    <IconButton
                      icon={<Icon as={FontAwesome} name="facebook-square" color="primary.200" />}
                      onPress={()=>{console.log('hello')}}
                    />
                  </Box>
                  <Box flexDirection='row' justifyContent='space-around' >
                    <Text fontSize={13}>Não tem uma conta?</Text>
                    <Text color="#EA7B7B">Registre agora mesmo!</Text>
                  </Box>
              </Box>
            </Actionsheet.Content>
          </Actionsheet>
    </Center>
  )
}



// Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light"}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
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

