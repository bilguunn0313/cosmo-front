import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

function BackButton() {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.back()}
      style={{
        padding: 8,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor-г устгасан → headershown-тай ижил
      }}
    >
      <ArrowLeft size={20} color="#1F2937" />
    </Pressable>
  );
}

export default BackButton;
