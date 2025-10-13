import React, { useState } from "react";
import { View } from "react-native";
import FoodList from "./_components/FoodList";
import DateSelector from "./_components/DateSelector";

const today = new Date();

const getDays = (count: number) =>
  Array.from({ length: count }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return {
      date: d.toISOString().slice(0, 10),
      dayName: d.toLocaleDateString("mn-MN", { weekday: "short" }),
      dayNum: d.getDate(),
      month: d.toLocaleDateString("mn-MN", { month: "short" }),
      isToday: i === 0,
    };
  });

const days = getDays(30);

const menuByDate: Record<string, { name: string }[]> = {
  [days[0].date]: [{ name: "Бууз" }, { name: "Гуляш" }],
  [days[1].date]: [{ name: "Хуушуур" }, { name: "Цуйван" }],
  [days[2].date]: [{ name: "Гахайн хуурга" }, { name: "Шөл" }],
};

export default function MenuScreen() {
  const [selectedDate, setSelectedDate] = useState(days[0].date);
  const foods = menuByDate[selectedDate] || [];

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <DateSelector
        days={days}
        selectedDate={selectedDate}
        onSelect={setSelectedDate}
      />
      <FoodList selectedDate={selectedDate} foods={foods} />
    </View>
  );
}
