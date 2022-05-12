import React, { useState } from "react";
import Routes from "./Routes";
import AppLoading from 'expo-app-loading';

import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';


const App = () => {
  let [PoppinsFont] = useFonts({
    Poppins_400Regular, Poppins_700Bold
  });
  if (!PoppinsFont) {
    return <AppLoading />;
  } else {
    console.log('Fonts loaded successfully');
    return (
    <Routes />
  )}
}
export default App;