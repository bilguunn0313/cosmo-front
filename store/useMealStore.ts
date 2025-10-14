// src/store/useMealsStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal, MealsState } from "@/types/types";

export const useMealsStore = create<MealsState>()(
  persist(
    (set, get) => ({
      meals: [], // Meal[] хадгалах
      loading: false,
      error: null,
      images: {}, // Record<mealId, uri>

      fetchMeals: async () => {
        // API байгаа бол энд fetch
        set({ loading: true });
        // Жишээ локал
        set({ meals: [], loading: false });
      },

      addMeal: async (meal: Meal): Promise<void> => {
        set((state) => ({
          meals: [...state.meals, meal],
        }));
      },

      setMealImage: (mealId: string, uri: string) => {
        set((state: MealsState) => ({
          images: { ...state.images, [mealId]: uri },
        }));
      },

      deleteMeal: async (id: string): Promise<void> => {
        set((state) => ({
          meals: state.meals.filter((m) => m.id !== id),
          images: Object.fromEntries(
            Object.entries(state.images).filter(([key]) => key !== id)
          ),
        }));
      },
    }),
    {
      name: "meals-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
