import './App.css';
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  return (navigate("/signin"))
}

export default App;
