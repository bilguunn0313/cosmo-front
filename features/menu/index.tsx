import React, { useState } from "react";
import { View } from "react-native";
import FoodList from "./_components/FoodList";
import DateSelector from "./_components/DateSelector";
import { Meal } from "@/types/types";

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

const menuByDate: Record<string, Meal[]> = {
  [days[0].date]: [
    { id: "1", name: "Бууз", category: "Main", date: days[0].date },
    { id: "2", name: "Гуляш", category: "Main", date: days[0].date },
  ],
  [days[1].date]: [
    { id: "3", name: "Хуушуур", category: "Main", date: days[1].date },
    { id: "4", name: "Цуйван", category: "Main", date: days[1].date },
  ],
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
      <FoodList
        selectedDate={selectedDate}
        foods={foods}
        onAddFood={function (meal: Meal): void {
          throw new Error("Function not implemented.");
        }}
      />
    </View>
  );
}
