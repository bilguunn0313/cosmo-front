import { Stack, useRouter } from "expo-router";
import "./global.css";
import BackButton from "@/components/BackButton";
import { Image, Pressable } from "react-native";
import { Bell } from "lucide-react-native";

export default function RootLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: true,
          title: "",
          headerStyle: { backgroundColor: "#0d4f9d" },
          headerLeft: () => (
            <Image
              source={require("../assets/images/cosmo-logo.png")}
              style={{
                width: 110,
                height: 20,
                marginLeft: 2,
                tintColor: "",
              }}
              resizeMode="contain"
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => router.push("/notification")}
              style={{
                // marginRight: ,
                alignItems: "center",
                width: 35,
              }}
            >
              <Bell color="#fff" size={24} />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="menu/index"
        options={{
          title: "Хоолний Цэс",
          headerLeft: () => <BackButton />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="inventory/index"
        options={{
          title: "Агуулах",
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="ac/index"
        options={{
          title: "Агааржуулалт",
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="power-cut/index"
        options={{
          title: "Тог Тасралт",
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="printer/index"
        options={{
          title: "Принтэр",
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="thermometer/index"
        options={{
          title: "Термометр",
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
        name="notification/index"
        options={{
          title: "Мэдэгдэл",
          headerShown: true,
          headerLeft: () => <BackButton />,
        }}
      />
    </Stack>
  );
}
