import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import About from './screens/About';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import React,{ useState } from 'react';
import Navigator from './routes/homeStack'
const getFont = () => Font.loadAsync({
  'montserrat-regular':require('./assets/fonts/static/Montserrat-Regular.ttf'),
})

export default function App() {
  const [fontsLoaded , setfontsLoaded] = useState(false)
  if(fontsLoaded){
    return (
      <Navigator/>
     );
  }else{
    return(
      <AppLoading
        startAsync={getFont} 
        onFinish={() => setfontsLoaded(true)} 
        onError={console.log('failed')}
      />
    )
  }
}

