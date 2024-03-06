import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const InfoCard = ({ title, content, buttonText, onButtonPress }) => {
  return (
    <View className="m-4 p-8 bg-white outline-4 outline-neutral-950 rounded-lg shadow-md w-full">
      <Text className="text-xl font-bold mb-4">{title}</Text>
      <Text className="text-sm mb-8">{content}</Text>
      <TouchableOpacity
        onPress={onButtonPress}
        className="bg-teal-500 p-3 rounded-lg"
      >
        <Text className="text-black text-lg font-semibold text-center">{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InfoCard;
