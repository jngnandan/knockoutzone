
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactUs from './views/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';


import Boxing from './views/Boxing'


function App() {
  return (
    <div className='h-screen mb-auto'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Boxing />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
