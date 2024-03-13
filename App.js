// App.js
import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import { FontAwesome6 } from "@expo/vector-icons";
import { AuthProvider, useAuth } from "./src/context/AuthContext";
import { FilterProvider } from "./src/context/FilterContext";

// Pages
import LoginPage from "./src/screens/LoginPage";
import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SavedHouses from "./src/screens/SavedHouses";
import Messages from "./src/screens/Messages";
import Settings from "./src/screens/Settings";
import ListingsScreen from "./src/screens/ListingsScreen";
import FilterScreen from "./src/screens/FilterScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeIcon = (props) => (
  <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
    <Path
      d="M23.2194 10.1691L12.6837 0.476338C12.3412 0.161233 11.8902 -0.00929781 11.4249 0.000391388C10.9596 0.0100806 10.5161 0.199239 10.187 0.52833L0.497263 10.2181L0 10.7153V25H9.33727V16.0871H14.4303V25H23.7676V10.6735L23.2194 10.1691ZM11.4614 1.69772C11.4764 1.69772 11.4671 1.70095 11.4607 1.70727C11.4541 1.70095 11.4464 1.69772 11.4614 1.69772ZM22.0699 23.3023H16.128V16.0871C16.128 15.6369 15.9492 15.2051 15.6308 14.8867C15.3124 14.5683 14.8806 14.3895 14.4303 14.3895H9.33727C8.88702 14.3895 8.45521 14.5683 8.13683 14.8867C7.81845 15.2051 7.63959 15.6369 7.63959 16.0871V23.3023H1.69769V11.4185L11.4614 1.72875C11.4621 1.72812 11.4621 1.72753 11.4627 1.7269L22.0699 11.4185V23.3023Z"
      fill={props.color}
    />
  </Svg>
);

const SavedHousesIcon = (props) => (
  <Svg width="19" height="25" viewBox="0 0 19 25" fill="none" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.906 9.80775C11.0732 7.58115 16.4905 11.4797 8.906 16.4907C1.32151 11.4797 6.73878 7.58272 8.906 9.81088V9.80775Z"
      fill={props.color}
    />
    <Path
      d="M0 3.12505C0 2.29624 0.329245 1.50137 0.915306 0.915306C1.50137 0.329246 2.29624 0 3.12505 0L15.6253 0C16.4541 0 17.2489 0.329246 17.835 0.915306C18.4211 1.50137 18.7503 2.29624 18.7503 3.12505V24.2191C18.7502 24.3605 18.7118 24.4991 18.6392 24.6203C18.5665 24.7415 18.4624 24.8408 18.3378 24.9075C18.2132 24.9742 18.0729 25.0059 17.9317 24.9991C17.7906 24.9924 17.6539 24.9474 17.5362 24.8692L9.37515 20.4706L1.21408 24.8692C1.09643 24.9474 0.95975 24.9924 0.818594 24.9991C0.677437 25.0059 0.537092 24.9742 0.412506 24.9075C0.28792 24.8408 0.183759 24.7415 0.111118 24.6203C0.0384757 24.4991 7.30018e-05 24.3605 0 24.2191V3.12505ZM3.12505 1.56253C2.71064 1.56253 2.31321 1.72715 2.02018 2.02018C1.72715 2.31321 1.56253 2.71064 1.56253 3.12505V22.7597L8.94233 18.8816C9.07055 18.7962 9.22114 18.7507 9.37515 18.7507C9.52917 18.7507 9.67975 18.7962 9.80797 18.8816L17.1878 22.7597V3.12505C17.1878 2.71064 17.0232 2.31321 16.7301 2.02018C16.4371 1.72715 16.0397 1.56253 15.6253 1.56253H3.12505Z"
      fill={props.color}
    />
  </Svg>
);

const MessagesIcon = (props) => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
    <Path
      d="M6.6665 6.66663H17.4998V8.61107H6.6665V6.66663ZM6.6665 10.5555H14.2498V12.5H6.6665V10.5555Z"
      fill={props.color}
    />
    <Path
      d="M22.5 0H2.5C1.12125 0 0 1.13447 0 2.52947V17.7063C0 19.1013 1.12125 20.2357 2.5 20.2357H6.25V25L14.0962 20.2357H22.5C23.8787 20.2357 25 19.1013 25 17.7063V2.52947C25 1.13447 23.8787 0 22.5 0ZM22.5 17.7063H13.4037L8.75 20.5304V17.7063H2.5V2.52947H22.5V17.7063Z"
      fill={props.color}
    />
  </Svg>
);

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // Now we return the SVG component instead of Ionicons
          if (route.name === "Home") {
            // Adjust the color based on whether the tab is focused
            const fillColor = focused ? "#60BFAA" : "black";
            return <HomeIcon color={fillColor} width={size} height={size} />;
          }
          if (route.name === "SavedHouses") {
            // Adjust the color based on whether the tab is focused
            const fillColor = focused ? "#60BFAA" : "black";
            return (
              <SavedHousesIcon color={fillColor} width={size} height={size} />
            );
          }
          if (route.name === "Messages") {
            // Adjust the color based on whether the tab is focused
            const fillColor = focused ? "#60BFAA" : "black";
            return (
              <MessagesIcon color={fillColor} width={size} height={size} />
            );
          }
          if (route.name === "Settings") {
            // Adjust the color based on whether the tab is focused
            const fillColor = focused ? "#60BFAA" : "black";
            return (
              <FontAwesome6
                name={"user-circle"}
                size={size}
                color={fillColor}
              />
            );
          }
        },
        tabBarActiveTintColor: "teal",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="SavedHouses"
        component={SavedHouses}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ tabBarLabel: () => null }}
      />
    </Tab.Navigator>
  );
}

// Stack navigator for the Home tab which includes HomeScreen and ListingsScreen
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Listings" component={ListingsScreen} />
      <HomeStack.Screen name="Filters" component={FilterScreen} />
    </HomeStack.Navigator>
  );
}

function SplashScreenNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        {/* <Stack.Screen name="Login" component={LoginPage} /> */}
        {/* ... potentially other auth screens here ... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AuthFlow() {
  const { isLoggedIn } = useAuth();
  console.log("Logged In: " + isLoggedIn);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginPage} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreenNavigator />;
  }

  return (
    <AuthProvider>
      <FilterProvider>
        <NavigationContainer>
          <AuthFlow />
        </NavigationContainer>
      </FilterProvider>
    </AuthProvider>
  );
}
