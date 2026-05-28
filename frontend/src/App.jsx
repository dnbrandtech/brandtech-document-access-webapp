import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
function ProtectedRoute({
  children,
  role
}) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== role) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/dashboard"} replace />;
  }
  return <>{children}</>;
}
function AppRoutes() {
  const { user } = useAuth();
  return <Routes>
      <Route
    path="/"
    element={user ? <Navigate to={user.role === "admin" ? "/admin" : "/dashboard"} replace /> : <Navigate to="/login" replace />}
  />
      <Route path="/login" element={user ? <Navigate to={user.role === "admin" ? "/admin" : "/dashboard"} replace /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/dashboard" replace /> : <Register />} />
      <Route
    path="/admin"
    element={<ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>}
  />
      <Route
    path="/dashboard"
    element={<ProtectedRoute role="customer">
            <CustomerDashboard />
          </ProtectedRoute>}
  />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>;
}
function App() {
  return <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>;
}
export {
  App as default
};
