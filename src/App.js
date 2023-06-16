import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Teste from "./pages/teste.jsx";
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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </Router>
  );
}

export default App;
