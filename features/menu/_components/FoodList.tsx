import React from "react";
import { View, Text, Image, Pressable, Alert } from "react-native";
import { Calendar, ChefHat, Camera } from "lucide-react-native";

import * as ImagePicker from "expo-image-picker";
import { Meal } from "@/types/types";

type Props = {
  selectedDate: string;
  foods: Meal[];
};

export default function FoodList({ selectedDate, foods }: Props) {
  const [images, setImages] = React.useState<Record<string, string>>({});

  const formattedDate = new Date(selectedDate).toLocaleDateString("mn-MN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const pickImage = async (mealName: string) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Зөвшөөрөл шаардлагатай",
        "Зураг оруулахын тулд зөвшөөрөл өгнө үү."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      // TypeScript-д result.assets[0].uri нь string гэж тодорхойлогдсон байх ёстой
      const uri = result.assets[0].uri;
      setImages((prev) => ({ ...prev, [mealName]: uri }));
    }
  };

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
            <Text className="text-base font-bold text-gray-900 mb-2">
              {meal.name}
            </Text>

            {images[meal.name] ? (
              <Image
                source={{ uri: images[meal.name] }}
                style={{ width: "100%", height: 180, borderRadius: 12 }}
              />
            ) : (
              <Pressable
                onPress={() => pickImage(meal.name)}
                className="bg-gray-100 p-4 rounded-xl items-center justify-center border border-dashed border-gray-400"
              >
                <Camera color="#6B7280" size={28} />
                <Text className="text-gray-500 mt-2">Зураг оруулах</Text>
              </Pressable>
            )}
          </View>
        ))
      ) : (
        <View className="items-center py-10">
          <ChefHat size={40} color="#9CA3AF" />
          <Text className="mt-3 text-base text-gray-500">
            Энэ өдөрт хоолны мэдээлэл алга 🍵
          </Text>
        </View>
      )}
    </View>
  );
}
