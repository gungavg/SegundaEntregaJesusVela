
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Form from './Components/Form';
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import {Routes, Route} from 'react-router-dom';
import { routes } from "./Components/utils/routes";
import Detail from './Routes/Detail'
function App() {
  return (
<>
  <Navbar></Navbar>
  <Routes>
    <Route path={routes.home} element={<Home></Home>}/>
    <Route path={routes.contact} element={<Form></Form>}/>
    
    <Route path={routes.favs} element={<Favs></Favs>}/>
    <Route path="/detail/:id" element={<Detail></Detail>}/>

  </Routes>
</>
  );
}

export default App;
