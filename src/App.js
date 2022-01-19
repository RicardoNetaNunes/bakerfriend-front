
import './App.css';
import FrontButtons from './Components/FrontButtons';
import {Routes, Route} from 'react-router-dom';
import CalcConv from './Components/CalcConv';
import NavBar from './Components/NavBar';




function App() {
  return (
    <div className="App">
<NavBar />
      <p>Hi</p>
    
     

     <Routes>
	<Route path="/calcconv" element={<CalcConv />} />
  <Route path="/" element={<FrontButtons />} />
</Routes>
    </div>
  );
}

export default App;
