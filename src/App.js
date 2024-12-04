import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import PricesSection from './pages/PricingPage';
import { logoList, plansData } from './data';


function App() {
  return (
    <main className='main'>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/pricing' element={<PricesSection plansData={plansData} logosList={logoList}/>}/>
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
