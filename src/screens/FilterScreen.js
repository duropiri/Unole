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
import Svg, { Path, Rect, Line } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import Slider from "@react-native-community/slider";

const FilterScreen = () => {
  const navigation = useNavigation(); // Hook to access navigation prop

  // Replace the handleLoadMore function with navigation to the Listings screen
  const goBack = () => {
    navigation.goBack(); // This will take you back to the previous screen in the stack
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
      <ScrollView>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Location
          </Text>
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Monthly Rent
          </Text>
          <Slider
            className="w-full outline"
            minimumValue={0}
            maximumValue={6000}
            minimumTrackTintColor="#60BFAA"
            maximumTrackTintColor="#FFFFFF"
            value={4500}
          />
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Bedrooms
          </Text>
          <Slider
            className="w-full outline"
            minimumValue={0}
            maximumValue={5}
            minimumTrackTintColor="#60BFAA"
            maximumTrackTintColor="#FFFFFF"
            value={5}
          />
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Bathrooms
          </Text>
          <Slider
            style={{ height: "50px" }}
            minimumValue={0}
            maximumValue={5}
            minimumTrackTintColor="#60BFAA"
            maximumTrackTintColor="#FFFFFF"
            value={2.5}
          />
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">Type</Text>
          <View className="flex-col px-6 w-full justify-between gap-4">
            <View className="flex-row w-full justify-between">
              <TouchableOpacity className="bg-teal-500/10 justify-center rounded-md w-24 h-8">
                <Text className="text-black text-base text-center">House</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-teal-500/10 justify-center rounded-md w-24 h-8">
                <Text className="text-black text-base text-center">Condo</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-teal-500/10 justify-center rounded-md w-24 h-8">
                <Text className="text-black text-base text-center">
                  Basement
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row w-full justify-between">
              <TouchableOpacity className="bg-teal-500/10 justify-center rounded-md w-24 h-8">
                <Text className="text-black text-base text-center">Room</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-teal-500/10 justify-center rounded-md w-24 h-8">
                <Text className="text-black text-base text-center">Studio</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-teal-500/10 justify-center rounded-md w-24 h-8">
                <Text className="text-black text-base text-center">Others</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Furnishing
          </Text>
          <View className="flex-row px-6 w-full justify-start gap-4">
            <TouchableOpacity className="bg-teal-500/10 justify-center rounded-md w-32 h-8">
              <Text className="text-black text-base text-center">
                Furnished
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-teal-500/10 justify-center rounded-md w-32 h-8">
              <Text className="text-black text-base text-center">
                Non-furnished
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">Lease</Text>
          <View className="flex-row px-6 w-full justify-between">
            <TouchableOpacity className="bg-teal-500/10 justify-center rounded-md w-24 h-8">
              <Text className="text-black text-base text-center">Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-teal-500/10 justify-center rounded-md w-24 h-8">
              <Text className="text-black text-base text-center">Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-teal-500/10 justify-center rounded-md w-24 h-8">
              <Text className="text-black text-base text-center">Yearly</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">Length</Text>
          <View className="flex-col px-6 w-full justify-start">
            <View className="flex-row w-full gap-4">
              <TouchableOpacity className="bg-white justify-center rounded-md w-32 h-8 border">
                <Text className="text-black text-base text-center">
                  Short term
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white justify-center rounded-md w-32 h-8 border">
                <Text className="text-black text-base text-center">
                  Long term
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Utilities
          </Text>
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Appliances
          </Text>
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Pet friendly
          </Text>
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Amenities
          </Text>
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Accessibility
          </Text>
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Barrier-free Entrances and Ramps
          </Text>
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Visual Aids
          </Text>
        </View>
        <View className="w-full mb-4">
          <Text className="text-lg font-bold my-4 text-start px-6">
            Accessibility Washrooms in Suite
          </Text>
        </View>
      </ScrollView>
      <View className="flex flex-row w-full justify-center items-center py-3 px-6 bg-white shadow-2xl">
        <TouchableOpacity
          className="bg-teal-500 justify-center rounded-md w-full h-12"
          onPress={goBack}
        >
          <Text className="text-black text-lg font-semibold text-center">
            Apply Filter
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;
