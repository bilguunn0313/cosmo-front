import React from "react";
import { Tabs } from "expo-router";
import { TabIcon } from "@/components/TabIcon";
import { House, UserRound, Utensils } from "lucide-react-native";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 2,
          left: 16,
          right: 16,
          height: 64,
          backgroundColor: "#fff",
          borderRadius: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 21 },
          // shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
          borderWidth: 0,
        },
        tabBarLabelStyle: {
          marginTop: 4,
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Нүүр",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={House} focused={focused} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="food"
        options={{
          title: "Хоол",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={Utensils} focused={focused} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профайл",
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={UserRound} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
