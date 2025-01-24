import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Feather as Icon, FontAwesome6 as FIcon6, MaterialCommunityIcons as MIcon } from "react-native-vector-icons";

export default function TabLayout() {
  return (
  <PaperProvider>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#f3d1ad",
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: "#161326"
          },
        }),
      }}>
      <Tabs.Screen
          name="index"
          options={{
          title: 'Accueil',
          // headerShown:true,
          tabBarIcon: ({ color }) => <Icon name="home" size={18} color={color} />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Évenements',
          tabBarIcon: ({ color }) => <Icon name="calendar" size={18} color={color} />,
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'Nouveautés',
          tabBarIcon: ({ color }) => <MIcon name="autorenew" size={18} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favoris',
          tabBarIcon: ({ color }) => <Icon name="heart" size={18} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <MIcon name="account-circle-outline" size={18} color={color} />,
        }}
      />
    </Tabs>
  </PaperProvider>
  );

}
