import React from 'react';
import './Css/main.css';
import ReactDOM from 'react-dom/client';
import StarPage from './Pages/startPage';
import SliderPage from './components/slider';
import AboutPage from './Pages/about';
import FooterPage from './Pages/footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarPage />
    <SliderPage />
    <AboutPage />
    <FooterPage />
  </React.StrictMode>
);

