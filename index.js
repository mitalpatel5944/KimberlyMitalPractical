/**
 * @format
 */
 import React from 'react';
 import { AppRegistry, LogBox } from 'react-native';
 import App from './App';
 import { name as appName } from './app.json';
 
 import { Provider } from "react-redux";
 
 import Store from "./src/Redux/Store";
 import { SafeAreaView } from 'react-native-safe-area-context';

 
 LogBox.ignoreAllLogs(true)
 
 
 const kernel = () => {
     return (
         <Provider store={Store}>
             <SafeAreaView style={{ flex: 1 }}>
                 <App />
             </SafeAreaView>
         </Provider>
     )
 }
 
 
 AppRegistry.registerComponent(appName, () => kernel);