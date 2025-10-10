import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

type Props = {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  label: string;
  onPress: () => void;
};

export default function MenuButton({ icon: Icon, label, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-[47%] bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-100"
    >
      <View className="items-center">
        <View className="bg-blue-100 p-4 rounded-full mb-2">
          <Icon size={28} color="#2563EB" />
        </View>
        <Text className="text-gray-800 font-medium text-base text-center">
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
