import { useAuth } from "../../context/AuthContext";
import PetProfile from "../../ components/PetProfile";
import FeedingGuide from '../../ components/FeedingGuide';
import GroomingVideos from '../../ components/GroomingVideos';
import HealthTips from '../../ components/HealthTips';
import TrainingTips from '../../ components/TrainingTips';

const PetOwnerHome = () => {
  const { name } = useAuth();

  return (
    <div>
      <div className="welcome-col container">
      <h2>Welcome <span className="name">{name}!</span> Pet Owner Dashboard</h2>
    </div>
    <div className="dashboard container">
      <div className="">
        <div className="dashboard-col">
          
        </div>
        <div className="dashboard-content">

        </div>
      </div>
      <section className="pet-owner-dash-section"><PetProfile /></section>
      <section className="pet-owner-dash-section"><FeedingGuide /></section>
      <section className="pet-owner-dash-section"><GroomingVideos /></section>
      <section className="pet-owner-dash-section"><HealthTips /></section>
      <section className="pet-owner-dash-section"><TrainingTips /></section>
    </div>

    </div>
  )
}

export default PetOwnerHome