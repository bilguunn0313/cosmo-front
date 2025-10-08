type User = {
  id: string;
  email: string;
};

type AuthContextType = {
  user: User | null; // auth state null эсвэл user
  login: (user: User) => void;
  logout: () => void;
};
