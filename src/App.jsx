import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./Welcome";
import PetOwnerHome from "./dashboards/PetOwner/PetOwnerHome";
import ShelterHome from "./dashboards/shelter/ShelterHome";
import VartenianHome from "./dashboards/vartienian/VartenianHome";
import { AuthProvider, useAuth } from "./context/AuthContext";
import PetOwnerPetCare from "./dashboards/PetOwner/PetOwnerPetCare";
import PetOwnerFeedback from "./dashboards/PetOwner/PetOwnerFeedback";
import PetOwnerVetHelp from "./dashboards/PetOwner/PetOwnerVetHelp";
import PetOwnerAbout from "./dashboards/PetOwner/PetOwnerAbout";
import PetOwnerForm from "./dashboards/PetOwner/PetOwnerForm";
import FeedingGuide from "./ components/FeedingGuide";
import GroomingVideos from "./ components/GroomingVideos";
import HealthTips from "./ components/HealthTips";
import TrainingTips from "./ components/TrainingTips";
import PetProductShowcase from "./ components/PetProductShowcase";

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

    <div>

    <AuthProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/petowner"
          element= {
              <PetOwnerHome />
          }
        />
      
        <Route 
          path="/pet-care"
          element={<PetOwnerPetCare/>}
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
          element={<FeedingGuide />} 
        />
        <Route 
          path="/grooming-videos" 
          element={<GroomingVideos />} 
        />
        <Route 
          path="/health-tips" 
          element={<HealthTips />} 
        />
        <Route 
          path="/tranning-tips" 
          element={<TrainingTips />} 
        />
        <Route 
          path="/products" 
          element={<PetProductShowcase />} 
        />
         <Route path="/vartenian" element={<VartenianHome />} />
        <Route path="/shelter" element={<ShelterHome />} />

      </Routes>
      
    </AuthProvider>

    
    </div>

  );
};

export default App;