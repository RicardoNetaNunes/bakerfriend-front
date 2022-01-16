
import './App.css';
import FrontButtons from './Components/FrontButtons';
import {Routes, Route} from 'react-router-dom';
import CalcConv from './Components/CalcConv';
import NavBar from './Components/NavBar';
import Waiting from './Components/Waiting';



function App() {
  return (
    <div className="App">
<NavBar />
      <p>Hi</p>
    <FrontButtons />
     

     <Routes>
	<Route path="/calcconv" element={<CalcConv />} />
  <Route path="*" element={<Waiting/>} />
</Routes>
    </div>
  );
}

export default App;
