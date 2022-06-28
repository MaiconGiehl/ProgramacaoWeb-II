import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './Home.css';

import { Home } from './Home'

import Catalog from './pages/Catalog/Catalog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalogo" element={<Catalog />} />
        </Routes>
      </BrowserRouter>,
    </>
  );
}

export default App;
