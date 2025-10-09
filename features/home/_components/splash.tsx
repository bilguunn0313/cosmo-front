// app/splash.tsx
import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(0)).current;

  // Animated.Image-г Tailwind-д ашиглахад
  const AnimatedImage = Animated.createAnimatedComponent(
    require("react-native").Image
  );

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      router.replace("./index.tsx");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-[#0d4f9d]">
      <AnimatedImage
        source={require("../assets/images/cosmo-logo.png")}
        className="w-36 h-36" // Tailwind width/height
        style={{ transform: [{ scale: scaleAnim }] }}
      />
    </View>
  );
}
