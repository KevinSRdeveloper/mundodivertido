import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './Css/main.css';
import ReactDOM from 'react-dom/client';
import StarPage from './Pages/startPage';
import SliderPage from './components/slider';
import AboutPage from './Pages/about';
import FooterPage from './Pages/footer';
import NavigationPage from './components/navigation';
import SobrePage from './Pages/sobreNosotros';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/mundodivertido">
      <NavigationPage />
        <Routes>
          <Route path="/" element={
              <>
                <StarPage />
                <SliderPage />
                <AboutPage />
              </>
          }/>
          <Route path="/nosotros" element={<SobrePage /> }/>
        </Routes>
      <FooterPage />
    </BrowserRouter>

  </React.StrictMode>
);



