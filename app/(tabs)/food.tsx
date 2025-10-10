import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuScreen from "@/features/menu";

const food = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <MenuScreen />
    </ScrollView>
  );
};

export default food;

const styles = StyleSheet.create({});
