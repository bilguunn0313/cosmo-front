import React from "react";
import { View } from "react-native";

import { useRouter } from "expo-router";
import {
  Utensils,
  Calendar,
  ShoppingBag,
  UserRound,
  Star,
  MessageSquare,
  PrinterCheck,
  BatteryCharging,
  PlugZap,
  Thermometer,
  PackageMinus,
} from "lucide-react-native";
import MenuButton from "./MenuButton";

type ButtonItem = {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  label: string;
  screen:
    | "/food"
    | "/inventory"
    | "/thermometer"
    | "/ac"
    | "/power-cut"
    | "/printer";
};

export default function ButtonGrid() {
  const router = useRouter();

  const buttons: ButtonItem[] = [
    { icon: Utensils, label: "Хоол", screen: "/food" },
    { icon: PackageMinus, label: "Барааны устгал", screen: "/inventory" },
    { icon: Thermometer, label: "Агуулахын градус", screen: "/thermometer" },
    { icon: UserRound, label: "AC цэнэглэлт", screen: "/ac" },
    { icon: PlugZap, label: "Тог тасралт", screen: "/power-cut" },
    { icon: BatteryCharging, label: "Принтерийн хор", screen: "/printer" },
  ];

  return (
    <View className="flex-row flex-wrap justify-between">
      {buttons.map((btn, index) => (
        <MenuButton
          key={index}
          icon={btn.icon}
          label={btn.label}
          onPress={() => router.push(btn.screen)}
        />
      ))}
    </View>
  );
}
