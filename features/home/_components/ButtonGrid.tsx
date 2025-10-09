// import React from "react";
// import { View } from "react-native";
// import MenuButton from "./MenuButton";
// import { useRouter } from "expo-router";
// import {
//   Utensils,
//   Calendar,
//   ShoppingBag,
//   UserRound,
//   Star,
//   MessageSquare,
//   Home,
//   Settings,
//   CreditCard,
//   Gift,
// } from "lucide-react-native";

// export default function ButtonGrid() {
//   const router = useRouter();

//   const buttons = [
//     { icon: Utensils, label: "Хоол", screen: "/food" },
//     { icon: Calendar, label: "Хуваарь", screen: "/schedule" },
//     { icon: ShoppingBag, label: "Захиалга", screen: "/orders" },
//     { icon: UserRound, label: "Профайл", screen: "/profile" },
//     { icon: Star, label: "Үнэлгээ", screen: "/rating" },
//     { icon: MessageSquare, label: "Санал", screen: "/feedback" },
//     { icon: Home, label: "Нүүр", screen: "/" },
//     { icon: Settings, label: "Тохиргоо", screen: "/settings" },
//     { icon: CreditCard, label: "Төлбөр", screen: "/orders" },
//     { icon: Gift, label: "Бонус", screen: "/feedback" },
//   ];

//   return (
//     <View className="flex-wrap flex-row justify-between">
//       {buttons.map((btn, index) => (
//         <MenuButton
//           key={index}
//           icon={btn.icon}
//           label={btn.label}
//           onPress={() => router.push(btn.screen)}
//         />
//       ))}
//     </View>
//   );
// }
