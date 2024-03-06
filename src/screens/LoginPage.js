// LoginPage.js
import React, { useState, useContext } from "react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // If using Expo
import { TextField } from "react-native-ui-lib";

const LoginPage = ({ navigation }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const renderEyeIcon = () => {
    if (password.length === 0) return null; // Don't show the icon if password field is empty
    const iconName = secureTextEntry ? "eye-off" : "eye";
    return (
      <TouchableOpacity
        onPress={() => setSecureTextEntry(!secureTextEntry)}
        className="absolute right-0 top-3 pr-3 flex items-center justify-center"
      >
        <Ionicons name={iconName} size={24} color="gray" />
      </TouchableOpacity>
    );
  };

  const handleLoginPress = () => {
    setIsLoggedIn(true); // Update login state
    // Additional login logic
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 w-full h-full p-8">
        <View className="flex w-full h-full justify-between items-center py-8">
          <Image
            source={require("../../assets/images/login-image.png")}
            resizeMode="cover"
            className="w-56 h-40 rounded-2xl mb-8"
          />

          <View className="flex w-full">
            <TextField
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#6b7280" // Tailwind's 'gray-500' for better visibility
              className="px-4 h-12 border rounded-lg border-black bg-white mb-4"
            />

            <View className="relative justify-center">
              <TextField
                placeholder="Password"
                secureTextEntry={secureTextEntry}
                placeholderTextColor="#6b7280"
                onChangeText={setPassword} // Set password state on change
                className="px-4 h-12 border rounded-lg border-black bg-white mb-4"
              />
              {renderEyeIcon()}
            </View>

            <TouchableOpacity
              onPress={handleLoginPress}
              className="justify-center bg-teal-500 rounded-lg mb-2 h-12"
            >
              <Text className="text-black text-lg font-semibold text-center">Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-black text-right underline mb-4">
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex w-full">
            <Text className="text-start mb-4">Don't have an account?</Text>
            <TouchableOpacity className="border justify-center rounded-lg border-black bg-white h-12">
              <Text className="text-black text-lg font-semibold text-center">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
