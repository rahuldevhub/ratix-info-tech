
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CollapsibleExample from './components/header/Navbar';
import Home from './sections/Home';
import ServiceWeoffer from './sections/ServiceWeoffer';
import About from './sections/About';
import ClientFeedback from './sections/ClientFeedback';

import DesignDevApp from './sections/DesignDevApp';
import JoinWithUs from './sections/JoinWithUs';
// import Footer from './components/footer/Footer';


function App() {
  return (
    <div> 

      <CollapsibleExample/>
      <Home/>
      <ServiceWeoffer/>
    <About/>
    <ClientFeedback/>

    <DesignDevApp/>
    <JoinWithUs/>
    {/* <Footer/> */}
    </div>
   
  );
}

export default App;
