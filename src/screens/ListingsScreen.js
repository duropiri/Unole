// ListingsScreen.js
import React from "react";
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
import Svg, { Path } from "react-native-svg";
import ListingItem from "../components/ListingItem";
import { useNavigation } from "@react-navigation/native";

const listings = [
  {
    id: "9",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image9.png"),
  },
  {
    id: "10",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image10.png"),
  },
  {
    id: "11",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image11.png"),
  },
  {
    id: "12",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image12.png"),
  },
  {
    id: "13",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image13.png"),
  },
  {
    id: "14",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image14.png"),
  },
  {
    id: "15",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image15.png"),
  },
  {
    id: "16",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image16.png"),
  },
  {
    id: "17",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image17.png"),
  },
  {
    id: "18",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image18.png"),
  },
  {
    id: "19",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image19.png"),
  },
  {
    id: "20",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image20.png"),
  },
  {
    id: "21",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image21.png"),
  },
  {
    id: "22",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image22.png"),
  },
  {
    id: "23",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image23.png"),
  },
  {
    id: "24",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image24.png"),
  },
  {
    id: "25",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image25.png"),
  },
  {
    id: "26",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image26.png"),
  },
  {
    id: "27",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image27.png"),
  },
  {
    id: "28",
    address: "25A Street SW Belmont",
    price: "$1200",
    type: "Basement",
    beds: "2 Bed",
    baths: "2 baths",
    area: "900sqft",
    imageUrl: require("../../assets/images/listing-image28.png"),
  },

  // ... more listings
];

const ListingsScreen = () => {
  const navigation = useNavigation(); // Hook to access navigation prop

  // Replace the handleLoadMore function with navigation to the Listings screen
  const goToFilters = () => {
    navigation.navigate("Filters"); // Use the name of the screen you want to navigate to
  };

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
      <View className="flex flex-row w-full justify-end items-center h-[70px] px-6 bg-white shadow-2xl">
        <TouchableOpacity className="mx-3" onPress={goToFilters}>
          <Svg width="23" height="20" viewBox="0 0 23 20" fill="none">
            <Path
              d="M21.3793 0H0.689655C0.506747 0 0.331331 0.07266 0.201995 0.201995C0.0726599 0.331331 0 0.506747 0 0.689655V1.84138C0.000128953 2.00427 0.0324924 2.16552 0.0952254 2.31584C0.157958 2.46616 0.24982 2.60258 0.365517 2.71724L8.27586 10.7448V17.7793L9.65517 18.3034V10.3448C9.6557 10.2541 9.6383 10.1641 9.60398 10.0801C9.56966 9.99604 9.51909 9.91961 9.45517 9.85517L1.37931 1.78621V1.37931H20.6897V1.8L12.6414 9.85517C12.5725 9.91728 12.5168 9.99266 12.4777 10.0768C12.4386 10.1609 12.4168 10.2521 12.4138 10.3448V19.4552L13.7931 20V10.6897L21.7034 2.75862C21.821 2.64105 21.9139 2.50119 21.9767 2.34723C22.0394 2.19327 22.0708 2.02832 22.069 1.86207V0.689655C22.069 0.506747 21.9963 0.331331 21.867 0.201995C21.7376 0.07266 21.5622 0 21.3793 0Z"
              fill="black"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={goToFilters}>
          <Svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <Path
              d="M11.037 12.8097L6.35268 18.3711V1.01591C6.35268 0.900434 6.30605 0.789691 6.22305 0.70804C6.14005 0.626389 6.02748 0.580518 5.9101 0.580518C5.79272 0.580518 5.68015 0.626389 5.59715 0.70804C5.51415 0.789691 5.46752 0.900434 5.46752 1.01591V18.3467L0.783215 12.8091C0.746056 12.7651 0.700454 12.7288 0.649013 12.7021C0.597571 12.6755 0.541298 12.6591 0.483405 12.6538C0.425512 12.6485 0.367133 12.6546 0.311603 12.6715C0.256072 12.6884 0.204477 12.716 0.159762 12.7525C0.115048 12.7891 0.0780906 12.8339 0.0509999 12.8845C0.0239092 12.9351 0.00721602 12.9905 0.00187333 13.0475C-0.00346937 13.1044 0.00264311 13.1618 0.0198618 13.2165C0.0370804 13.2711 0.065068 13.3219 0.102227 13.3658L5.58141 19.8427C5.62293 19.8919 5.67497 19.9315 5.73382 19.9587C5.79267 19.9859 5.85689 20 5.9219 20H5.92249C6.05409 20 6.1786 19.9419 6.26299 19.8427L11.7192 13.3658C11.7941 13.2769 11.8301 13.1622 11.8191 13.0471C11.8082 12.9321 11.7512 12.826 11.6607 12.7522C11.5703 12.6785 11.4537 12.6431 11.3368 12.6539C11.2198 12.6647 11.112 12.7207 11.037 12.8097ZM21.898 6.63416L16.4194 0.15732C16.3779 0.10824 16.3259 0.0687161 16.2672 0.0415342C16.2085 0.0143523 16.1444 0.000174343 16.0795 0H16.0789C15.9473 0 15.8222 0.0580519 15.739 0.15732L10.2822 6.63416C10.2084 6.72318 10.1733 6.83732 10.1846 6.95169C10.196 7.06605 10.2528 7.17137 10.3428 7.24468C10.4327 7.318 10.5485 7.35336 10.6648 7.34306C10.7811 7.33277 10.8886 7.27764 10.9638 7.18971L15.6481 1.62893V18.9841C15.6481 19.0996 15.6947 19.2103 15.7777 19.292C15.8607 19.3736 15.9733 19.4195 16.0907 19.4195C16.2081 19.4195 16.3207 19.3736 16.4037 19.292C16.4867 19.2103 16.5333 19.0996 16.5333 18.9841V1.65273L21.2176 7.19029C21.2545 7.23452 21.2999 7.27111 21.3513 7.29794C21.4026 7.32477 21.4589 7.34131 21.5168 7.3466C21.5747 7.35189 21.6331 7.34583 21.6886 7.32876C21.7441 7.3117 21.7956 7.28397 21.8401 7.24718C21.9304 7.17343 21.9873 7.06741 21.9981 6.95245C22.0089 6.83749 21.9729 6.723 21.898 6.63416Z"
              fill="black"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text className="text-xl font-bold my-4 text-start px-6">
          {listings.length} Listings
        </Text>
        <View className="pb-6 justify-center">{renderTwoColumnGrid()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListingsScreen;
