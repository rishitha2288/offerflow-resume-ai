import {
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute
from "./components/ProtectedRoute";

import MainLayout
from "./layouts/MainLayout";

import Dashboard
from "./pages/Dashboard";

import Applications
from "./pages/Applications";

import Analytics
from "./pages/Analytics";

import Settings
from "./pages/Settings";

import Register
from "./pages/Register";

import Login
from "./pages/Login";

import AIResumeAnalyzer
from "./pages/AIResumeAnalyzer";

function App() {

  return (

    <Routes>

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"

        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="applications"
          element={<Applications />}
        />

        <Route
          path="analytics"
          element={<Analytics />}
        />

        <Route
          path="settings"
          element={<Settings />}
        />

        <Route
          path="ai-resume-analyzer"

          element={
            <AIResumeAnalyzer />
          }
        />

      </Route>

    </Routes>
  );
}

export default App;