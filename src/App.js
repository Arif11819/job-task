import './App.css';
import Header from './pages/Header/Header';
import { Routes, Route } from "react-router-dom";
import CompleteTasks from './pages/CompleteTasks';
import Calender from './pages/Calender';
import Home from './pages/Home/Home';
import ToDo from './pages/ToDo';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/completetasks' element={<CompleteTasks></CompleteTasks>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
