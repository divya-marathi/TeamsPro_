import "./App.css";
import Navigator from "./components/Navigator";
import HomePage from "./pages/Homepage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    
      <BrowserRouter>
      <Navigator />
        <Routes>
          <Route path="/" element={<HomePage />} />      
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
