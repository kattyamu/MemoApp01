// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, View, } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// old
// import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SingupScreen from './src/screens/SignupScreen';

import ENV from './env.json';

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const App = createStackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SingupScreen },
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit: { screen: MemoEditScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'Memot',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
      paddingBottom: 20,
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerBackTitle: null,
  },
});

export default createAppContainer(App);

// import Appbar from './src/components/Appbar';
// import MemoListScreen from './src/screens/MemoListScreen';
// import MemoDetailScreen from './src/screens/MemoDetailScreen';
// import MemoEditScreen from './src/screens/MemoEditScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import SingupScreen from './src/screens/SignupScreen';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Appbar />
//       {/* <MemoListScreen /> */}
//       {/* <MemoDetailScreen /> */}
//       {/* <MemoEditScreen /> */}
//       {/* <LoginScreen /> */}
//       <SingupScreen />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fffdf6',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 78,
//   },
// });
