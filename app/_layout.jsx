import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="dark"/>
    <Tabs screenOptions={{headerShown:false,  tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)'
        },}}>
      <Tabs.Screen name="index" options={{ title: 'Home' ,tabBarIcon:({focused,color,size})=>(
        <MaterialCommunityIcons name={focused?"home":"home-outline"} size={size} color={color} />
      )}} />
      <Tabs.Screen name="second" options={{ title: 'Settings',tabBarIcon:({focused,color,size})=>(
<MaterialCommunityIcons name={focused?"cog-box":"cog-outline"} size={size} color={color} />
      ) }} />
    </Tabs>
  </React.Fragment>);
}