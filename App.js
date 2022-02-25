import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files
// import AssetExample from './components/AssetExample';
import LoginScreen from './components/screens/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen'

// export default function App() {
//   return (
//     <View>
//       <View style={{backgroundColor: "blue"}}>
//         <Text style={{color: "white", padding: 64, fontSize: 24, textAlign: "center"}}>
//           Change code in the editor and watch it change on your phone! Save to
//           get a shareable url.
//         </Text>
//         <Card>
//           <AssetExample />
//         </Card>
//       </View>
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>
//           Change code in the editor and watch it change on your phone! Save to
//           get a shareable url.
//         </Text>
//         <Card>
//           <AssetExample />
//         </Card>
//       </View>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();
// Bentuk Asli
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Bentuk 1
// const app = function App() {
//   return <LoginScreen />;
// }

// export default app;

// Bentuk 2 (arrow function)
// const app = () => {
//   return <LoginScreen />;
// }

// export default app;

// Bentuk 3 (arrow function minimal)
// const app = () => <LoginScreen />;

// export default app;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: 'yellow',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
