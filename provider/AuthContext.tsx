// // context/AuthContext.tsx
// import React, { createContext, useState, useContext, ReactNode } from "react";

// type User = { email: string } | null;

// type AuthContextType = {
//   user: User;
//   login: (email: string) => void;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User>(null);

//   const login = (email: string) => setUser({ email });
//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within AuthProvider");
//   return context;
// }
