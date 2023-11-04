// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BrowsePage from "./pages/BrowsePage/BrowsePage";
import MovieListPage from "./pages/MovieListPage/MovieListPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MediaDetailsPage from "./pages/MediaDetailsPage/MediaDetailsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Navbar />
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/browse"
          element={
            <PrivateRoute>
              <Navbar />
              <BrowsePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/movielist"
          element={
            <PrivateRoute>
              <Navbar />
              <MovieListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/:user"
          element={
            <PrivateRoute>
              <Navbar />
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path=":mediaTitle/:mediaId"
          element={
            <PrivateRoute>
              <Navbar />
              <MediaDetailsPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
