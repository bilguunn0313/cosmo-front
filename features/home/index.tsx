import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonGrid from "./_components/ButtonGrid";

export default function HomeScreen() {
  return (
    <SafeAreaView
      className="flex-1 bg-white"
      edges={["bottom", "left", "right"]}
    >
      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <ButtonGrid />
      </ScrollView>
    </SafeAreaView>
  );
}
