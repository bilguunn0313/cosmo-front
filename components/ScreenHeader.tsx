import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

type Props = {
  title: string;
  showBack?: boolean; // true бол back button харуулах
};

export default function ScreenHeader({ title, showBack = false }: Props) {
  const router = useRouter();

  return (
    <View className="flex-row items-center py-3 px-2 mb-4">
      {showBack && (
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-2 rounded-full bg-gray-200"
        >
          <ArrowLeft size={10} color="#1F2937" />
        </TouchableOpacity>
      )}
      <Text className={`text-xl font-bold ml-${showBack ? 3 : 0}`}>
        {title}
      </Text>
    </View>
  );
}
