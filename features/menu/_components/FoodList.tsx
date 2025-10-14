import React from "react";
import { View, Text, Image, Pressable, Button } from "react-native";
import { Camera, ChefHat } from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";

import { useMealsStore } from "@/store/useMealStore";
import { FoodListProps } from "@/types/types";

export default function FoodList({
  selectedDate,
  foods,
  onAddFood,
  userRole,
}: FoodListProps) {
  const { setMealImage, images } = useMealsStore();

  const pickImage = async (mealId: string) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") return;

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.8,
    });
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setMealImage(mealId, uri);
    }
  };

  return (
    <View className="mt-4">
      {userRole === "chef" || userRole === "admin" ? (
        <Button
          title="Шинэ хоол нэмэх"
          onPress={() =>
            onAddFood({
              id: Date.now().toString(),
              name: "Шинэ хоол",
              category: "Main",
              date: selectedDate,
            })
          }
        />
      ) : null}

      {foods.length > 0 ? (
        foods.map((meal) => (
          <View key={meal.id} className="bg-white rounded-xl p-4 mb-3">
            <Text className="text-base font-bold mb-2">{meal.name}</Text>
            {images[meal.id] ? (
              <Image
                source={{ uri: images[meal.id] }}
                style={{ width: "100%", height: 180, borderRadius: 12 }}
              />
            ) : (
              <Pressable
                onPress={() => pickImage(meal.id)}
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
            Энэ өдөр хоол байхгүй 🍵
          </Text>
        </View>
      )}
    </View>
  );
}
