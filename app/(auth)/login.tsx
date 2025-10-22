import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { login } from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store/store";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = async () => {
    const result = await dispatch(login({ email, password }));

    if (login.fulfilled.match(result)) {
      router.replace("/(tabs)");
    }
  };

  return (
    <View className="flex-1 justify-center p-4">
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border p-2 mb-4"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border p-2 mb-4"
      />
      {error && <Text className="text-red-500 mb-4">{error}</Text>}
      <Button title="Login" onPress={handleLogin} disabled={isLoading} />
    </View>
  );
}
