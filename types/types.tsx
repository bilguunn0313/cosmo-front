type User = {
  id: string;
  email: string;
};

type AuthContextType = {
  user: User | null; // auth state null эсвэл user
  login: (user: User) => void;
  logout: () => void;
};

export type Day = {
  date: string;
  dayName: string;
  dayNum: number;
  month: string;
  isToday: boolean;
};

export type Meal = {
  name: string;
  image?: string;
};
