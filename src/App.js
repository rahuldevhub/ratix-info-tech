
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CollapsibleExample from './components/header/Navbar';

import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MoreService from './pages/MoreService';
import Footer from './components/footer/Footer';
import Careers from './pages/Careers';






function App() {
  return (
    <div>

      <CollapsibleExample />

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/service' element={<MoreService/>}></Route>
        <Route path='/careers' element={<Careers/>}></Route>
        

      </Routes>
      </BrowserRouter>

      <Footer/>

      
      
      
    </div>

  );
}

export default App;
