import React from 'react';
import { Tabs } from 'expo-router';
import { COLORS } from '@/src/constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={
      { 
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarLabelStyle: {fontSize: 11, fontWeight: 600},
        tabBarLabelPosition: "below-icon",
        animation: "shift"
      }
    }>
        <Tabs.Screen name="candidates" options={
          { 
            tabBarLabel: "Candidatos",
            tabBarIcon: ({ focused }) => { return <FontAwesome name="group" size={24} color={focused ? COLORS.primary : ""} /> },
          }
        } />
        <Tabs.Screen name="index" options={
          { 
            tabBarLabel: "Perfil",
            tabBarIcon: ({ focused }) => { return <Ionicons name="person-sharp" size={24} color={focused ? COLORS.primary : ""} /> },
          }} 
        />
    </Tabs>
  )
}

export default TabsLayout