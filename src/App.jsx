import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./Welcome";
import PetOwnerHome from "./dashboards/PetOwner/PetOwnerHome";
import ShelterHome from "./dashboards/shelter/ShelterHome";
import { AuthProvider, useAuth } from "./context/AuthContext";
import PetOwnerFeedback from "./dashboards/PetOwner/PetOwnerFeedback";
import PetOwnerVetHelp from "./dashboards/PetOwner/PetOwnerVetHelp";
import PetOwnerAbout from "./dashboards/PetOwner/PetOwnerAbout";
import PetOwnerForm from "./dashboards/PetOwner/PetOwnerForm";
import { useLocation } from "react-router-dom";
import Footer from "./ components/Footer";
import Contact from "./dashboards/shelter/Contact";
import ContactUs from "./ components/ContactUs";
import Scrolling from "./ components/Scrolling";
import AboutUs from "./ components/AboutUs";
import PetOwnerPetProfile from "./dashboards/PetOwner/PetOwnerPetProfile";
import PetOwnerFeedingGuide from "./dashboards/PetOwner/PetOwnerFeedingGuide";
import PetOwnerGroomingVideos from "./dashboards/PetOwner/PetOwnerGroomingVideos";
import PetOwnerProductsShowcase from "./dashboards/PetOwner/PetOwnerProductsShowcase";
import PetOwnerHealthTips from "./dashboards/PetOwner/PetOwnerHealthTips";
import PetOwnerTraningTips from "./dashboards/PetOwner/PetOwnerTrainingTips";
import PetOwnerContact from "./dashboards/PetOwner/PetOwnerContact";
import VetProfilePage from "./dashboards/Veterinarian/VetProfilePage";
import VetFormPage from "./dashboards/Veterinarian/VetFormPage";
import Header from "./components/Header";
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
    {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/vet-form" element={<VetFormPage />} />
      <Route path="/vet-profile" element={<VetProfilePage />} />
        <Route 
          path="/" 
          element={<Welcome />} 
        />
        <Route
          path="/pet-owner"
          element= {<PetOwnerHome />}
        />
        <Route 
          path="/pet-profile"
          element={<PetOwnerPetProfile />}
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
          path="/pet-form"
          element={<PetOwnerForm />}
        />
        <Route 
          path="/feeding-guide" 
          element={<PetOwnerFeedingGuide/>}
        />
        <Route 
          path="/grooming-videos" 
          element={<PetOwnerGroomingVideos />}
        />
        <Route 
          path="/health-tips" 
          element={<PetOwnerHealthTips/>} 
        />
        <Route 
          path="/training-tips" 
          element={<PetOwnerTraningTips/>}
        />
        <Route 
          path="/products" 
          element={<PetOwnerProductsShowcase/>}
        />
        <Route 
          path="/shelter" 
          element={<ShelterHome />} 
        />
        <Route 
          path="/contact" 
          element={<PetOwnerContact />}
        />
        <Route
         path="/vet-profile"
         element={<VetProfilePage />}
        />
        <Route
         path="/vet-form"
         element={<VetFormPage />}
        />
      </Routes>
    {location.pathname !== "/" && <Footer />}
     <Scrolling />
      
    </AuthProvider>

    </div>

  );
};

export default App;