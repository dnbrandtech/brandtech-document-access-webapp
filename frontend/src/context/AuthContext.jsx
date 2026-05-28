/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
const INITIAL_USERS = [
  { id: "1", name: "Admin User", email: "admin@brandsafway.com", role: "admin", password: "admin123" },
  { id: "2", name: "John Smith", email: "john@acmecorp.com", company: "Acme Corp", role: "customer", password: "customer123" },
  { id: "3", name: "Sarah Johnson", email: "sarah@buildtech.com", company: "BuildTech LLC", role: "customer", password: "customer123" }
];
const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(INITIAL_USERS);
  const login = (email, password) => {
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (found) {
      const userData = { ...found };
      delete userData.password;
      setUser(userData);
      return { success: true, role: found.role };
    }
    return { success: false, error: "Invalid email or password. Please try again." };
  };
  const register = (data) => {
    if (users.find((u) => u.email.toLowerCase() === data.email.toLowerCase())) {
      return { success: false, error: "An account with this email already exists." };
    }
    const newUser = {
      id: String(Date.now()),
      name: data.fullName,
      email: data.email,
      company: data.company,
      role: "customer",
      password: data.password
    };
    setUsers((prev) => [...prev, newUser]);
    const userData = { ...newUser };
    delete userData.password;
    setUser(userData);
    return { success: true };
  };
  const logout = () => setUser(null);
  return <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>;
}
function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
export {
  AuthProvider,
  useAuth
};
