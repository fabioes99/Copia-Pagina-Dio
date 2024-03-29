import Home from "./pages/home";
import Login from "./pages/login";
import { useEffect, useState } from 'react';
import SignUp from "./pages/sign-up";
import { AuthContextProvider } from "./context/auth";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <AuthContextProvider>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={ <Home /> } />
        </Routes>
      </AuthContextProvider>
    </Router>
   
    
  );
}

export default App;
