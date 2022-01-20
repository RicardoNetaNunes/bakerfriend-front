

import FrontButtons from './Components/FrontButtons';
import {Routes, Route} from 'react-router-dom';
import CalcConv from './Components/CalcConv';
import NavBar from './Components/NavBar';
import { LightMode, GlobalStyle } from '@chakra-ui/react'
import './App.css';



function App() {
  return (
    <div className="App">
      <LightMode>
      <GlobalStyle />
<NavBar />
      <p>Hi</p>
    
     

     <Routes>
	<Route path="/calcconv" element={<CalcConv />} />
  <Route path="/" element={<FrontButtons />} />
</Routes>

</LightMode>
    </div>
  );
}

export default App;
