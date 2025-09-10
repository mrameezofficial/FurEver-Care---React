import { useAuth } from "../../context/AuthContext";
const PetOwnerHome = () => {
  const { name } = useAuth();

  return (
    <div>
      <h2>Welcome to Pet Owner Dashboard</h2>
      <p>Hello, {name} 👋</p>
    </div>
  )
}

export default PetOwnerHome