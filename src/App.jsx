import Form from './Components/Form';
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { routes } from './Components/utils/routes';
import Detail from './Routes/Detail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Form />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
