import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./Welcome";
import PetOwnerHome from "./dashboards/PetOwner/PetOwnerHome";
import ShelterHome from "./dashboards/shelter/ShelterHome";
import VartenianHome from "./dashboards/vartienian/VartenianHome";
import { AuthProvider, useAuth } from "./context/AuthContext";
import PetOwnerFeedback from "./dashboards/PetOwner/PetOwnerFeedback";
import PetOwnerVetHelp from "./dashboards/PetOwner/PetOwnerVetHelp";
import PetOwnerAbout from "./dashboards/PetOwner/PetOwnerAbout";
import PetOwnerForm from "./dashboards/PetOwner/PetOwnerForm";
import PetProductShowcase from "./ components/PetProductShowcase";
import Header from "./ components/Header";
import { useLocation } from "react-router-dom";
import PetOwnerPetProfile from "./dashboards/PetOwner/PetOwnerPetProfile";
import PetOwnerFeedingGuide from "./dashboards/PetOwner/PetOwnerFeedingGuide";
import PetOwnerGroomingVideos from "./dashboards/PetOwner/PetOwnerGroomingVideos";
import PetOwnerHealthTips from "./dashboards/PetOwner/PetOwnerHealthTips";
import PetOwnerTraningTips from "./dashboards/PetOwner/PetOwnerTrainingTips";


// Protected Route Component
const ProtectedRoute = ({ children, role }) => {
  const { category } = useAuth();

  if (!category) {
    return <Navigate to="/" replace />; 
  }

  if (category !== role) {
    return <Navigate to={`/${category.toLowerCase()}`} replace />;
  }

  return children;
};

const App = () => {
  const location = useLocation();
  return (

    <div>
    <AuthProvider>
    {location.pathname !== "/" && <Header/>}
      <Routes>
        <Route 
          path="/" 
          element={<Welcome />} 
        />
        <Route
          path="/petowner"
          element= {<PetOwnerHome />}
        />
        <Route 
          path="/pet-profile"
          element={<PetOwnerPetProfile/>}
        />
        <Route 
          path="/feedback"
          element={<PetOwnerFeedback/>}
        />
        <Route 
          path="/vet-help"
          element={<PetOwnerVetHelp />}
        />
        <Route 
          path="/about"
          element={<PetOwnerAbout />}
        />
        <Route 
          path="/form"
          element={<PetOwnerForm />}
        />
        <Route 
          path="/feeding-guide" 
          element={<PetOwnerFeedingGuide />}
        />
        <Route 
          path="/grooming-videos" 
          element={<PetOwnerGroomingVideos />} 
        />
        <Route 
          path="/health-tips" 
          element={<PetOwnerHealthTips />} 
        />
        <Route 
          path="/training-tips" 
          element={<PetOwnerTraningTips/>} 
        />
        <Route 
          path="/products" 
          element={<PetProductShowcase />} 
        />
         <Route 
          path="/vartenian" 
          element={<VartenianHome />} 
        />
        <Route 
          path="/shelter" 
          element={<ShelterHome />} 
        />

      </Routes>
      
    </AuthProvider>

    </div>

  );
};

export default App;