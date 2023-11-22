import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes  
} from "react-router-dom";

// Components
// import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/error/ErrorPage"; 

function App() {  
  return(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

//Reparar esta onda
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App/>);

export default App;