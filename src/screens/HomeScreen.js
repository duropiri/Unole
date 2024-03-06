import React, { useState } from "react";
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
import { TextField } from "react-native-ui-lib";
import InfoCard from "../components/InfoCard";
import { useNavigation } from "@react-navigation/native";
import ListingItem from "../components/ListingItem";
import ListingsScreen from "./ListingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Mock data for the listings
const listings = [
  {
    id: "1",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image1.png"),
  },
  {
    id: "2",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image2.png"),
  },
  {
    id: "3",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image3.png"),
  },
  {
    id: "4",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image4.png"),
  },
  {
    id: "5",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image5.png"),
  },
  {
    id: "6",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image6.png"),
  },
  {
    id: "7",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image7.png"),
  },
  {
    id: "8",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image8.png"),
  },

  // ... more listings
];

// Header Component for FlatList
const ListHeader = () => {
  return (
    <View>
      <Image
        source={require("../../assets/images/home-image.png")}
        resizeMode="cover"
        className="w-full h-[565px] mb-8"
      />
      <View className="w-full px-6">
        <Text className="text-3xl font-bold mb-8">Where do you call home?</Text>
        <View className="w-full">
          <TextField
            placeholder={"City/Location"}
            placeholderTextColor="#6b7280" // Tailwind's 'gray-500' for better visibility
            className="border rounded-lg px-4 border-black bg-white mb-4 h-12"
          />
        </View>
        <Text className="text-xl text-gray-500 text-center px-5 mb-8">
          Houses and apartments for rent that fit your budget
        </Text>
      </View>
    </View>
  );
};

// Footer Component for FlatList
const ListFooter = () => {
  onChangeText = () => {};
  const handleLearnMorePress = () => {
    console.log("Learn More pressed");
    // Implement the action you want to take when the button is pressed
  };
  return (
    <View className="flex justify-center items-center px-6">
      {/* ... additional content ... */}
      <Text className="text-3xl font-bold mb-8">Let's find you a home</Text>

      <View className="w-full">
        <TextField
          placeholder={"City/Location"}
          placeholderTextColor="#6b7280" // Tailwind's 'gray-500' for better visibility
          className="border rounded-lg px-4 border-black bg-white mb-4 h-12"
        />
      </View>

      <Text className="text-xl font-bold mb-4 text-center px-20">
        Find quality renters, fill vacancies faster
      </Text>
      <Text className="text-base mb-8 text-center">
        We have marketing solutions for landlords, agents, and multifamily
        professionals.
      </Text>

      <InfoCard
        title="Landlords and Agents"
        content={
          "Manage your rentals with our free leasing tools. \n \nReach over 13 million high-quality renters actively searching on our network. \n \nScreen renters with credit reports, background checks, and applications. \n \nCollect rent online for seamless and secure payments."
        }
        buttonText="Learn More"
        onButtonPress={handleLearnMorePress}
      />
      <InfoCard
        title="Multifamily Communities"
        content={
          "Advertise with us to optimize your leasing success.\n\nReach over 13 million high-quality renters actively searching on our network\n\nGet exposure across our broad network of leading apartment search sites\n\nReceive ongoing support from a dedicated Account Manager"
        }
        buttonText="Learn More"
        onButtonPress={handleLearnMorePress}
      />

      {/* ... More buttons and text ... */}
    </View>
  );
};
const HomeScreen = () => {
  const navigation = useNavigation(); // Hook to access navigation prop

  // Replace the handleLoadMore function with navigation to the Listings screen
  const goToAllListings = () => {
    navigation.navigate("Listings"); // Use the name of the screen you want to navigate to
  };

  // A function to render two items side by side
  const renderTwoColumnGrid = () => {
    const rows = [];
    for (let i = 0; i < listings.length; i += 2) {
      rows.push(
        <View key={i} className="flex-row justify-between px-6 pb-4">
          <ListingItem {...listings[i]} />
          {listings[i + 1] ? (
            <ListingItem {...listings[i + 1]} />
          ) : (
            <View style={{ width: "49%" }} />
          )}
        </View>
      );
    }
    return rows;
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <ListHeader />
        <View className="pb-6">
          <Text className="text-xl font-bold mb-4 text-start px-6">
            Check out these listings
          </Text>
          {renderTwoColumnGrid()}

          <View className="items-center">
            <TouchableOpacity
              className="m-4 bg-teal-500 justify-center rounded-md w-44 h-12 mb-24 mt-8"
              onPress={goToAllListings}
            >
              <Text className="text-black text-lg font-semibold text-center">
                Load More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ListFooter />
        <View className="w-full bg-gray-300 p-12 items-center mt-20">
          <Text className="text-lg font-bold text-center">{`22,473\nrentals matched and counting`}</Text>
        </View>
      </ScrollView>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Listings" component={ListingsScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
