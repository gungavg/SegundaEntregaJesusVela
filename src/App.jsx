
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Form from './Components/Form';
import Home from './Routes/Home'
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
<>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
   
    {/* <Route path="/favs" element={}></Route>
    <Route path="/contact" element={}></Route> */}

  </Routes>
</>
  );
}

export default App;
