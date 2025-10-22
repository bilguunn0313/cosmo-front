import { useEffect } from "react";
import { View, Image, ActivityIndicator, Text } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { loadToken } from "../store/authSlice";

export default function SplashScreen() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const checkAuth = async () => {
      // Load token from AsyncStorage
      await dispatch(loadToken());

      setTimeout(() => {
        // Check token after loading
        if (token) {
          router.replace("/(tabs)");
        } else {
          router.replace("/(auth)/login");
        }
      }, 1500);
    };

    checkAuth();
  }, [token, dispatch]);

  return (
    <View className="flex-1 justify-center items-center bg-[#0d4f9d]">
      <Image
        source={require("../assets/images/cosmo-logo.png")}
        className="w-44 h-10 mb-8"
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#fff" />
      <Text className="text-white mt-4 text-base font-medium tracking-wide">
        COSMO APP
      </Text>
    </View>
  );
}
