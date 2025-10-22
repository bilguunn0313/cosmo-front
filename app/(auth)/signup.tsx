import { View, TextInput, Button, Text } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/authSlice";
import { useRouter } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Жишээ: Odoo REST API call
      const response = await fetch(`${process.env.API}/userP/createP`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        dispatch(setToken(data.token));
        router.replace("/(tabs)");
      } else {
        alert("Нэвтрэхэд алдаа гарлаа");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-white">
      <TextInput
        className="border w-full p-2 mb-4 rounded"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="border w-full p-2 mb-4 rounded"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text
        className="mt-4 text-blue-500"
        onPress={() => router.push("./(auth)/signup")}
      >
        Sign up
      </Text>
    </View>
  );
}
