import { View,Text,StyleSheet } from "react-native";
import { globalStyles } from "../styles/Global";
const Home = () => {
    return ( 
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
        </View>
     );
}

export default Home;