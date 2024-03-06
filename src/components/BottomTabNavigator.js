// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; // Correct icon set
import HomeScreen from "../screens/HomeScreen";
import SavedHouses from "../screens/SavedHouses";
import Messages from "../screens/Messages";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'SavedHouses') {
            iconName = 'bookmark';
          } else if (route.name === 'Messages') {
            iconName = 'comment-alt'; // Assuming you want to use the alternate comment icon
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          }
          // Return the FontAwesome icon component
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "teal",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="SavedHouses" component={SavedHouses} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
