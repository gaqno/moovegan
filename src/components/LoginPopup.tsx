import React, {useEffect, useState} from 'react';
import {
  Actionsheet,
  Box,
  Button,
  FormControl,
  Icon,
  IconButton,
  Input,
  Stack,
  Text,
  View,
} from 'native-base';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {userApi} from '~/features/users/usersApiSlice';
import {Value} from 'react-native-reanimated';

export const LoginPopup = (props) => {
  const {isOpen, onClose, navigation} = props;
  const [login, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [postLogin] = userApi.usePostLoginMutation();
  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box mt={5} mx={10} width={'350'}>
            <Text right={2} bold fontSize={22}>
              Vamos começar!
            </Text>
            <Text pb={5}>Faça login para ter acesso ao conteúdo.</Text>
            <View>
              <FormControl isRequired isInvalid>
                <Stack>
                  <Input
                    placeholder="Email ou usuário"
                    type="email"
                    value={login.email}
                    p={2}
                    mb={3}
                  />
                  <Input placeholder="Senha" type="password" p={2} />
                  <FormControl.HelperText pb={3} left="70%" color="primary.100">
                    Esqueceu a senha?
                  </FormControl.HelperText>
                  {/* TODO:
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                        */}
                </Stack>
              </FormControl>
            </View>
            <Button
              bg="primary.200"
              onPress={() => {
                navigation.navigate('Main');
              }}>
              <Text bold color="#FFF">
                ENTRAR
              </Text>
            </Button>
            <Text alignSelf="center" bold>
              ou continue com:
            </Text>
            <Box flexDirection="row" justifyContent="space-between" mx={125}>
              <IconButton
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    name="google"
                    color="primary.200"
                  />
                }
                onPress={() => {
                  console.log('hello');
                }}
              />
              <IconButton
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    name="facebook"
                    color="primary.200"
                  />
                }
                onPress={() => {
                  console.log('hello');
                }}
              />
            </Box>
            <Box flexDirection="row" justifyContent="space-around">
              <Text fontSize={13}>Não tem uma conta?</Text>
              <Text color="#EA7B7B">Registre agora mesmo!</Text>
            </Box>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
