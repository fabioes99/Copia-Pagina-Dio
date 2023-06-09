import Home from "./pages/home";
import Login from "./pages/login";
import Teste from "./pages/home/Carrousel";
import React, { useEffect, useState } from 'react';
import SignUp from "./pages/sign-up";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import FontFaceObserver from 'fontfaceobserver'; 

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const font = new FontFaceObserver('Open Sans');

    font.load().then(() => {
      setFontsLoaded(true);
    });
  }, []);

  if (!fontsLoaded) {
    return <div>Carregando as fontes...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
