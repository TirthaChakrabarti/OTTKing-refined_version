import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';


function App() {
  return (
    <main className='main'>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
