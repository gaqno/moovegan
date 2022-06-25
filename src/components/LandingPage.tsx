import {Box, Pressable, Text, View} from 'native-base';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {userApi} from '~/features/users/usersApiSlice';

const LandingPage = (props: any) => {
  const {onOpen} = props;
  const logo = useSharedValue(100);
  const section = useSharedValue(700);
  const logoAnimation = useAnimatedStyle(() => {
    return {transform: [{translateY: logo.value}]};
  });
  const sectionAnimation = useAnimatedStyle(() => {
    return {transform: [{translateY: section.value}]};
  });

  useEffect(() => {
    setTimeout(() => {
      logo.value = withTiming(50, {
        duration: 1250,
        easing: Easing.out(Easing.exp),
      });
      section.value = withTiming(100, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      });
    }, 2500);
  }, []);

  return (
    <>
      <Animated.Image
        source={require('../assets/logo.png')}
        style={[styles.logo, logoAnimation]}
      />
      <Animated.View style={[styles.section, sectionAnimation]}>
        <Box alignItems="center" rounded="lg" mb="50" height="250">
          <Pressable onPress={onOpen}>
            <Text size="xs" color="#FFF">
              O problema presente na criação de gado é o consumo excessivo de
              recursos naturais, cerca de 70% do consumo de água potável no
              mundo é utilizada na irrigação das lavouras, pecuária e na
              agricultura.
            </Text>
          </Pressable>
        </Box>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '80%',
    height: '40%',
  },
  logo: {
    width: 148,
    height: 155,
  },
});

export default LandingPage;
