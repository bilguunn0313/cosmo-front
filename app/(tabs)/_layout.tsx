import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen
        name="food"
        options={{ headerShown: false, title: "Food" }}
      />
    </Tabs>
  );
};

export default _Layout;

const styles = StyleSheet.create({});
