type AuthContextType = {
  user: User | null; // auth state null эсвэл user
  login: (user: User) => void;
  logout: () => void;
};

export interface Meal {
  id: string;
  name: string;
  category: string;
  image?: string;
}

export interface MealsState {
  meals: Meal[];
  loading: boolean;
  error: string | null;
  images: Record<string, string>; // mealId to uri
  setMealImage: (mealId: string, uri: string) => void;
  fetchMeals: () => Promise<void>;
  addMeal: (newMeal: Meal) => Promise<void>;
  deleteMeal: (id: string) => Promise<void>;
}

export interface Meal {
  id: string;
  name: string;
  category: string;
  date: string; // "2025-10-14"
}

type Role = "admin" | "user" | "chef"; // Add or adjust roles as needed

export interface User {
  id: string;
  name: string;
  role: Role;
}

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

// src/types/index.ts

export interface Day {
  date: string; // "2025-10-14"
  dayName: string; // "Mon"
  dayNum: number; // 14
  month: string; // "Oct"
  isToday: boolean;
}

// DateSelector-д ашиглах props
export interface DateSelectorProps {
  days: Day[];
  selectedDate: string;
  onSelect: (date: string) => void;
}

// FoodList-д ашиглах props
export interface FoodListProps {
  selectedDate: string;
  foods: Meal[];
  onAddFood: (meal: Meal) => void;
  userRole?: "chef" | "admin" | "user";
}
