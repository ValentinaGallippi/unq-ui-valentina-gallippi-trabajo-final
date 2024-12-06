import Home from './componets/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import GamePage from './componets/GamePage';
import GameFinished from './componets/GameFinished';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/game' element={<GamePage/>} />
          <Route path='/finish' element={<GameFinished/>}/>
        </Routes>
    </BrowserRouter>
   
  );
}

export default App
