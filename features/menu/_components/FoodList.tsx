import React from "react";
import { View, Text } from "react-native";
import { Calendar, ChefHat } from "lucide-react-native";

type Props = {
  selectedDate: string;
  foods: { name: string }[];
};

export default function FoodList({ selectedDate, foods }: Props) {
  const formattedDate = new Date(selectedDate).toLocaleDateString("mn-MN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <View className="mt-4">
      {/* Header */}
      <View className="flex-row items-center mb-3">
        <Calendar size={18} color="#4F46E5" />
        <Text className="text-lg font-bold ml-1.5 text-gray-800">
          {formattedDate}
        </Text>
      </View>

      {/* Хоолны жагсаалт */}
      {foods.length > 0 ? (
        foods.map((meal, i) => (
          <View key={i} className="bg-white rounded-xl p-4 mb-3">
            <Text className="text-base font-bold text-gray-900">
              {meal.name}
            </Text>
          </View>
        ))
      ) : (
        <View className="items-center py-10">
          <ChefHat size={40} color="#9CA3AF" />
          <Text className="mt-3 text-base text-gray-500">
            Энэ өдөрт хоолын мэдээлэл алга 🍵
          </Text>
        </View>
      )}
    </View>
  );
}
