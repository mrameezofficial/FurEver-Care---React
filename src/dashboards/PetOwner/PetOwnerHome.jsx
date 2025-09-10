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
      <h2>Welcome to Pet Owner Dashboard</h2>
      <p>Hello, {name} 👋</p>

    <div className="dashboard">
      <h1>Welcome, {name}!</h1>
      <PetProfile />
      <FeedingGuide />
      <GroomingVideos />
      <HealthTips />
      <TrainingTips />
    </div>

    </div>
  )
}

export default PetOwnerHome