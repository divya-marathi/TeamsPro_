import "./App.css";
import Navigator from "./components/Navigator";
import HomePage from "./pages/Homepage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamView from './pages/TeamVeiw/TeamView'

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Navigator />
        <Routes>
          <Route path="/" element={<HomePage />} />      
          
          <Route path="/team" element={<TeamView/>} />      
  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
