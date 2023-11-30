import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes  
} from "react-router-dom";

// Components
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/error/ErrorPage"; 
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "../src/pages/profile/ProfilePage";
import {Mispropiedades} from "../src/pages/MisPropiedades/Mispropiedades";
import { Procesodeventa } from "./pages/ProcesodeVenta/ProcesodeVenta";
import Property from "./pages/property/Property";

function App() {  
  return(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path ="/profilePage" element={<ProfilePage />} />
          <Route path ="/mispropiedades" element={<Mispropiedades />} />
          <Route path ="/procesodeventa" element={<Procesodeventa />} />
          <Route path="/property/:id" element={<Property />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App/>);

export default App;