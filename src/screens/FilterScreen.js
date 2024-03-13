import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import Svg, { Path, Rect, Line } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
// import Slider from "@react-native-community/slider";
import { Button, Slider } from "@rneui/base";
import { Picker } from "@react-native-picker/picker";
import { FilterContext  } from "../context/FilterContext";

const FilterScreen = () => {
  const navigation = useNavigation(); // Hook to access navigation prop

  // Replace the handleLoadMore function with navigation to the Listings screen
  const goBack = () => {
    navigation.goBack(); // This will take you back to the previous screen in the stack
  };

  const [selectedLocation, setSelectedLocation] = useState("community");
  const [monthlyRent, setMonthlyRent] = useState(4500);
  const [bedrooms, setBedrooms] = useState(5);
  const [bathrooms, setBathrooms] = useState(2.5);

  const { selectedFilters, setSelectedFilters } = useContext(FilterContext);

  const handleFilterSelect = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const applyFilters = () => {
    goBack();
    console.log("Applied Filters: " + selectedFilters.join(", "));
  };

  return (
    <SafeAreaView className="flex-1 justify-between">
      <View className="flex flex-row w-full justify-start items-center h-[70px] px-6 bg-white shadow-2xl">
        <TouchableOpacity className="" onPress={goBack}>
          <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <Rect width="50" height="50" rx="25" fill="#D9D9D9" />
            <Line
              x1="29.3536"
              y1="17.3536"
              x2="21.3536"
              y2="25.3536"
              stroke="black"
            />
            <Line
              x1="21.3536"
              y1="24.6464"
              x2="29.3536"
              y2="32.6464"
              stroke="black"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <ScrollView className="">
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">Location</Text>
          <View className="border rounded-lg bg-white h-9 justify-center">
            <Picker
              selectedValue={selectedLocation}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLocation(itemValue)
              }
              // style={styles.picker}
              // className="text-2xl"
              dropdownIconColor={"#000000"}
            >
              <Picker.Item label="Select Community" value="community" />
              {/* Add more Picker.Item components here for each option you want to show */}
            </Picker>
          </View>
        </View>
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">
            Monthly Rent
          </Text>
          <View className="">
            <View className="flex-row justify-between">
              <Text>0</Text>
              <Text>{monthlyRent.toFixed(0)}</Text>
              <Text>6000</Text>
            </View>
            <Slider
              style={styles.slider}
              trackStyle={{ height: 10 }}
              minimumValue={0}
              maximumValue={6000}
              minimumTrackTintColor="#60BFAA"
              maximumTrackTintColor="#FFFFFF" // light grey color for the maximum track tint color
              value={monthlyRent.toFixed(2)}
              onValueChange={(value) => setMonthlyRent(value)}
              thumbStyle={styles.thumb}
            />
          </View>
        </View>
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">Bedrooms</Text>
          <View className="flex-row justify-between">
            <Text>0</Text>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <Text>5+</Text>
          </View>
          <Slider
            style={styles.slider}
            trackStyle={{ height: 10 }}
            minimumValue={0}
            maximumValue={5}
            minimumTrackTintColor="#60BFAA"
            maximumTrackTintColor="#FFFFFF" // light grey color for the maximum track tint color
            value={bedrooms.toFixed(0)}
            onValueChange={(value) => setBedrooms(value)}
            thumbStyle={styles.thumb}
            step={1}
          />
        </View>
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">Bathrooms</Text>
          <View className="flex-row justify-between">
            <Text className=" flex text-center">0</Text>
            <Text className="flex text-right">1</Text>
            <Text className="flex text-center">2</Text>
            <Text className="flex text-center">3</Text>
            <Text className="flex text-center">4</Text>
            <Text className="flex text-center">5+</Text>
          </View>
          <Slider
            style={styles.slider}
            trackStyle={{ height: 10 }}
            minimumValue={0}
            maximumValue={5}
            minimumTrackTintColor="#60BFAA"
            maximumTrackTintColor="#FFFFFF" // light grey color for the maximum track tint color
            value={bathrooms.toFixed(0)}
            onValueChange={(value) => setBathrooms(value)}
            thumbStyle={styles.thumb}
            step={0.5}
          />
        </View>
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">Type</Text>
          <View className="flex flex-row flex-wrap justify-between gap-4">
            {["House", "Condo", "Basement", "Room", "Studio", "Others"].map(
              (filter) => (
                <TouchableOpacity
                  key={filter}
                  onPress={() => handleFilterSelect("Type:" + filter)}
                  className={`justify-center rounded-md w-24 h-8 ${
                    selectedFilters.includes("Type:" + filter)
                      ? "bg-teal-500"
                      : "bg-teal-500/10"
                  }`}
                >
                  <Text className="text-black text-base text-center">
                    {filter}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">Furnishing</Text>
          <View className="flex flex-row flex-wrap justify-start gap-4">
            {["Furnished", "Non-furnished"].map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() => handleFilterSelect("Furnishing:" + filter)}
                className={`justify-center rounded-md px-7 h-8 ${
                  selectedFilters.includes("Furnishing:" + filter)
                    ? "bg-teal-500"
                    : "bg-teal-500/10"
                }`}
              >
                <Text className="text-black text-base text-center">
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">Lease</Text>
          <View className="flex flex-row flex-wrap justify-start gap-4">
            {["Weekly", "Monthly", "Yearly"].map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() => handleFilterSelect("Lease:" + filter)}
                className={`justify-center rounded-md px-7 h-8 ${
                  selectedFilters.includes("Lease:" + filter)
                    ? "bg-teal-500"
                    : "bg-teal-500/10"
                }`}
              >
                <Text className="text-black text-base text-center">
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">Length</Text>
          <View className="flex flex-row flex-wrap justify-start gap-4">
            {["Short term", "Long term"].map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() => handleFilterSelect("Length:" + filter)}
                className={`justify-center rounded-md w-32 h-8 ${
                  selectedFilters.includes("Length:" + filter)
                    ? "bg-teal-500"
                    : "bg-white border"
                }`}
              >
                <Text className="text-black text-base text-center">
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">Utilities</Text>
          <View className="flex flex-row flex-wrap justify-start gap-4">
            {["No preference", "None", "Hydro", "Heat", "Water"].map(
              (filter) => (
                <TouchableOpacity
                  key={filter}
                  onPress={() => handleFilterSelect("Utilities:" + filter)}
                  className={`justify-center rounded-md px-6 h-8 ${
                    selectedFilters.includes("Utilities:" + filter)
                      ? "bg-teal-500"
                      : "bg-teal-500/10"
                  }`}
                >
                  <Text className="text-black text-base text-center">
                    {filter}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">Appliances</Text>
          <View className="flex flex-row flex-wrap justify-start gap-4">
            {[
              "No preference",
              "None",
              "Laundry (In unit)",
              "Laundry (In building)",
            ].map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() => handleFilterSelect("Appliances:" + filter)}
                className={`justify-center rounded-md px-5 h-8 ${
                  selectedFilters.includes("Appliances:" + filter)
                    ? "bg-teal-500"
                    : "bg-teal-500/10"
                }`}
              >
                <Text className="text-black text-base text-center">
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">
            Pet friendly
          </Text>
          <View className="flex flex-row flex-wrap justify-start gap-4">
            {["No preference", "Yes", "No"].map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() => handleFilterSelect("Pet friendly:" + filter)}
                className={`justify-center rounded-md px-7 h-8 ${
                  selectedFilters.includes("Pet friendly:" + filter)
                    ? "bg-teal-500"
                    : "bg-teal-500/10"
                }`}
              >
                <Text className="text-black text-base text-center">
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">Amenities</Text>

          <View className="flex flex-row flex-wrap justify-start gap-4">
            {[
              "No preference",
              "None",
              "Gym",
              "Pool",
              "Concierge",
              "24 Hour Security",
              "Building Elevator",
              "Storage Space",
            ].map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() => handleFilterSelect("Amenities:" + filter)}
                className={`justify-center rounded-md px-4 h-8 ${
                  selectedFilters.includes("Amenities:" + filter)
                    ? "bg-teal-500"
                    : "bg-teal-500/10"
                }`}
              >
                <Text className="text-black text-base text-center">
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="w-full px-6">
          <Text className="text-lg font-bold mt-4 text-start">
            Accessibility
          </Text>
        </View>
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">
            Barrier-free Entrances and Ramps
          </Text>
          <View className="flex flex-row flex-wrap justify-start gap-4">
            {["No preference", "Yes", "No"].map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() =>
                  handleFilterSelect(
                    "Barrier-free Entrances and Ramps:" + filter
                  )
                }
                className={`justify-center rounded-md px-7 h-8 ${
                  selectedFilters.includes(
                    "Barrier-free Entrances and Ramps:" + filter
                  )
                    ? "bg-teal-500"
                    : "bg-teal-500/10"
                }`}
              >
                <Text className="text-black text-base text-center">
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="w-full mb-4 px-6">
          <Text className="text-lg font-bold my-4 text-start">Visual Aids</Text>
          <View className="flex flex-row flex-wrap justify-start gap-4">
            {["No preference", "Yes", "No"].map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() => handleFilterSelect("Visual Aids:" + filter)}
                className={`justify-center rounded-md px-7 h-8 ${
                  selectedFilters.includes("Visual Aids:" + filter)
                    ? "bg-teal-500"
                    : "bg-teal-500/10"
                }`}
              >
                <Text className="text-black text-base text-center">
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="w-full mb-16 px-6">
          <Text className="text-lg font-bold my-4 text-start">
            Accessibility Washrooms in Suite
          </Text>
          <View className="flex flex-row flex-wrap justify-start gap-4">
            {["No preference", "Yes", "No"].map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() =>
                  handleFilterSelect(
                    "Accessibility Washrooms in Suite:" + filter
                  )
                }
                className={`justify-center rounded-md px-7 h-8 ${
                  selectedFilters.includes(
                    "Accessibility Washrooms in Suite:" + filter
                  )
                    ? "bg-teal-500"
                    : "bg-teal-500/10"
                }`}
              >
                <Text className="text-black text-base text-center">
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View className="flex flex-row w-full justify-center items-center py-3 px-6 bg-white shadow-2xl">
        <TouchableOpacity
          className="bg-teal-500 justify-center rounded-md w-full h-12"
          onPress={applyFilters}
        >
          <Text className="text-black text-lg font-semibold text-center">
            Apply Filter
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  slider: {
    height: 40, // Increase the height for a larger touch area
  },
  thumb: {
    width: 20, // Width of the thumb
    height: 20, // Height of the thumb
    borderRadius: 10, // Make it circle
    backgroundColor: "#60BFAA",
  },
});

export default FilterScreen;
