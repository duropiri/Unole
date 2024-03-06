import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Settings = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 w-full h-full px-8">
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
