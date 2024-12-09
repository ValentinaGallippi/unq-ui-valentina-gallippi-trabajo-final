import Home from './componets/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import GamePage from './componets/GamePage';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/game' element={<GamePage/>} />
        </Routes>
    </BrowserRouter>
   
  );
}

export default App
