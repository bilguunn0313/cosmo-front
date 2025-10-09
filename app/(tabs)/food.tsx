import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodMenuSwipe from "@/features/menu/FoodMenySwipe";

const food = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <FoodMenuSwipe />
    </ScrollView>
  );
};

export default food;

const styles = StyleSheet.create({});
