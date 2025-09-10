
import { useAuth } from "../../context/AuthContext";

const VartenianHome = () => {
  const { name } = useAuth();
  return (
    <div>
      <h2>Welcome to Vartenian Dashboard</h2>
      <p>Hello, {name} 👋</p>
    </div>
  )
}

export default VartenianHome