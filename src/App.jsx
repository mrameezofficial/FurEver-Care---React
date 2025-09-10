import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./Welcome";
import PetOwnerHome from "./dashboards/PetOwner/PetOwnerHome";
import ShelterHome from "./dashboards/shelter/ShelterHome";
import VartenianHome from "./dashboards/vartienian/VartenianHome";
import { AuthProvider, useAuth } from "./context/AuthContext";
import HeroSection3 from "./assets/animationNew2";
import PetOwnerPetCare from "./dashboards/PetOwner/PetOwnerPetCare";

// Protected Route Component
const ProtectedRoute = ({ children, role }) => {
  const { category } = useAuth();

  if (!category) {
    return <Navigate to="/" replace />; // agar kuch select nahi kiya
  }

  if (category !== role) {
    return <Navigate to={`/${category.toLowerCase()}`} replace />; // force redirect
  }

  return children;
};

const App = () => {
  return (
   
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/petowner"
          element={
            <ProtectedRoute role="PetOwner">
              <PetOwnerHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shelter"
          element={
            <ProtectedRoute role="Shelter">
              <ShelterHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vartenian"
          element={
            <ProtectedRoute role="Vartenian">
              <VartenianHome />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/pet-care"
          element={<PetOwnerPetCare/>}
        />
      </Routes>
      <HeroSection3 />
    </AuthProvider>

    
   
  );
};

export default App;