// SplashScreen.js
import React, { useEffect } from 'react';
import { StatusBar, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = ({}) => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // Replace the current screen with the Login screen in the stack
  //     navigation.replace('Login');
  //   }, 3000); // Wait for 3 seconds

  //   return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  // }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/images/splash-screen.png')}
      resizeMode="cover"
      className="flex-1 justify-center items-center"
    >
      <StatusBar translucent backgroundColor="transparent" />
      <Text className="text-4xl font-medium italic text-black">Welcome home!</Text>
    </ImageBackground>
  );
};

export default SplashScreen;
