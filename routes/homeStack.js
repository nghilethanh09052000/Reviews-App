import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const screens = {
    Home:{
        screen: Home
    },
    ReviewDetails:{
        screen:ReviewDetails
    },
    
}
export const Stack = createNativeStackNavigator()
