import React from "react";
import { View } from "react-native";
import type { LucideIcon } from "lucide-react-native";

type TabIconProps = {
  icon: LucideIcon;
  focused: boolean;
};

export function TabIcon({ icon: Icon, focused }: TabIconProps) {
  return (
    <View>
      <Icon size={28} color={focused ? "#007AFF" : "#8E8E93"} />
    </View>
  );
}
