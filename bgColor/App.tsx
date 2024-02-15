import { StyleSheet, Text, TextInput, View,Button, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import LoginPage from './components/LoginPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import FirstScreen from './components/FirstScreen';
import SignIn from './components/SignIn';
import LastPage from './components/LastPage';
import Profile from './components/Profile';
export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (

   
    <NavigationContainer>
      <StatusBar backgroundColor={'black'}/>
      <Stack.Navigator initialRouteName='FirstScreen' >
      <Stack.Screen name="FirstScreen" component={FirstScreen}   options={{  
         headerShown: false,  
       }}   />
        <Stack.Screen name="login" component={LoginPage} 
          options={{  
            headerShown: true,  
          }}   />
        <Stack.Screen name="signIn" component={SignIn} 
          options={{  
            headerShown: true,  
          }}   />
          <Stack.Screen name="lastpage" component={LastPage} 
          options={{  
            headerShown: false,  
          }}   />
           <Stack.Screen name="ProfilePage" component={Profile} 
          options={{  
            headerShown: true,  
          }}   />
       
      </Stack.Navigator>
    </NavigationContainer>
 
    

  
    
  )
}

const styles = StyleSheet.create({

})