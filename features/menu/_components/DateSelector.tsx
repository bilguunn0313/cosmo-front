import { DateSelectorProps } from "@/types/types";
import React from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function DateSelector({
  days,
  selectedDate,
  onSelect,
}: DateSelectorProps) {
  const buttonWidth = (screenWidth - 32 - 16) / 5; // padding*2 + gap*4

  return (
    <View className="h-[90px]">
      <FlatList
        data={days}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.date}
        contentContainerStyle={{ paddingHorizontal: 1, alignItems: "center" }}
        snapToInterval={buttonWidth + 4}
        decelerationRate="fast"
        renderItem={({ item }) => {
          const isSelected = item.date === selectedDate;

          return (
            <TouchableOpacity
              className={`rounded-lg py-2 px-1 mr-1 items-center ${
                isSelected ? "bg-blue-500" : "bg-white"
              }`}
              style={{ width: buttonWidth }}
              onPress={() => onSelect(item.date)}
            >
              <Text
                className={`text-xs ${
                  isSelected ? "text-indigo-100" : "text-gray-500"
                }`}
              >
                {item.dayName}
              </Text>
              <Text
                className={`text-base font-bold ${
                  isSelected ? "text-white" : "text-gray-900"
                }`}
              >
                {item.dayNum}
              </Text>
              <Text
                className={`text-xs ${
                  isSelected ? "text-indigo-100" : "text-gray-500"
                }`}
              >
                {item.month}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
