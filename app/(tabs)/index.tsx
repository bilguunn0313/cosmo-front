import ButtonGrid from "@/features/home/_components/ButtonGrid";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Толгой хэсэг */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-gray-900">Cosmo App</Text>
          <Text className="text-gray-500 mt-1">
            Та доорх үйлдлүүдээс сонгоно уу
          </Text>
        </View>

        {/* 6 товчтой grid */}
        <ButtonGrid />
      </ScrollView>
    </SafeAreaView>
  );
}
