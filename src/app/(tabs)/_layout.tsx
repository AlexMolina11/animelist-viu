import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Tabs } from 'expo-router';

 
 

import { colors } from '../../styles/colors';

 
 

export default function TabsLayout() { 

  return ( 

    <Tabs 

      screenOptions={{ 

        headerStyle: { 

          backgroundColor: colors.background, 

        }, 

        headerTintColor: colors.textPrimary, 

        headerTitleStyle: { 

          fontWeight: '900', 

        }, 

 
 

        tabBarStyle: { 

          backgroundColor: colors.surface, 

          borderTopColor: colors.border, 

          height: 72, 

          paddingBottom: 8, 

          paddingTop: 8, 

        }, 

 
 

        tabBarActiveTintColor: colors.secondary, 

        tabBarInactiveTintColor: colors.textMuted, 

 
 

        tabBarLabelStyle: { 

          fontSize: 12, 

          fontWeight: '800', 

        }, 

      }} 

    > 

      <Tabs.Screen 

        name="index" 

        options={{ 

          title: 'AnimeList VIU', 

 
 

          tabBarIcon: ({ color, size }) => ( 

            <MaterialCommunityIcons 

              name="television-play" 

              size={size} 

              color={color} 

            /> 

          ), 

        }} 

      /> 

 
 

      <Tabs.Screen 

        name="create" 

        options={{ 

          title: 'Crear anime', 

 
 

          tabBarIcon: ({ color, size }) => ( 

            <MaterialCommunityIcons 

              name="plus-circle" 

              size={size} 

              color={color} 

            /> 

          ), 

        }} 

      /> 

    </Tabs> 

  ); 

} 