import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    ScrollView,
  } from "react-native";
import React from 'react'

// Reusable ListingItem component
const ListingItem = ({ address, price, type, beds, baths, area, imageUrl }) => (
  <View className="rounded-lg w-44">
    <Image
      source={imageUrl}
      className="h-48 w-full rounded-lg"
      resizeMode="cover"
    />
    <View className="w-full pt-2">
      <Text className="text-base font-bold">{address}</Text>
      <View className="flex-row justify-between">
        <View className="flex-col justify-start">
          <Text className="text-base">{price}</Text>
          <Text className="text-base">{beds}</Text>
          <Text className="text-base">{area}</Text>
        </View>
        <View className="flex-col justify-start">
          <Text className="text-base">{type}</Text>
          <Text className="text-base">{baths}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default ListingItem