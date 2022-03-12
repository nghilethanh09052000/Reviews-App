import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import React,{ useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

const getFont = () => Font.loadAsync({
  'montserrat-regular':require('./assets/fonts/static/Montserrat-Regular.ttf'),
})
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {
  const [fontsLoaded , setfontsLoaded] = useState(false)
  if(fontsLoaded){
    return (
      <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={Home}  
              options={{ 
                        title: 'Home',
                        headerStyle:{
                          backgroundColor:'pink',
                          }
                        }}

            />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
          </Stack.Navigator>

      </NavigationContainer>
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

