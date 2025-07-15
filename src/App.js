import React from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CollapsibleExample from './components/header/Navbar';

import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
// import MoreService from './pages/MoreService';
import Footer from './components/footer/Footer';
// import Careers from './pages/Careers';
// import About from './sections/About';

const LazyCareers = React.lazy(()=> import ('./pages/Careers'))




function App() {
  return (
    <div>

      <CollapsibleExample />

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/careers' element={<React.Suspense fallback= 'Loading...'> <LazyCareers/> </React.Suspense>}></Route>

        {/* <Route path='/service' element={<MoreService/>}></Route> */}      

      </Routes>
      </BrowserRouter>

      <Footer/>

      
      
      
    </div>

  );
}

export default App;
