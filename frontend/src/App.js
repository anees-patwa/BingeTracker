import './App.css';
import { useNavigate } from "react-router-dom";
import { fb_onAuthStateChanged } from './utils/firebase.js';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const navigate = useNavigate();
  fb_onAuthStateChanged((user) => {
    if (user) {
      console.log("user signed in...navigating home")
      navigate("/home");
    } else {
      console.log("no user signed in...navigating to sign-in")
      navigate("/signin", { replace: true });
    }
  });
}

export default App;
