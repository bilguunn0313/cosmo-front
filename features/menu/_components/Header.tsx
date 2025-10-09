import React from "react";
import { View, Text } from "react-native";
import { ChefHat } from "lucide-react-native";

export default function Header() {
  return (
    <View className="flex-row items-center mb-4">
      <ChefHat size={28} color="#4F46E5" />
      <Text className="text-[22px] font-bold ml-2 text-gray-800">
        Хоолны цэс
      </Text>
    </View>
  );
}
