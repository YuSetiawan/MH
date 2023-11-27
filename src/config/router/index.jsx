import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import ArtikelMenu from '../../pages/ArtikelMenu';
import Cdakb from '../../pages/Cdakb';
import ContactUs from '../../pages/ContactUs';
import Fcca from '../../pages/Fcca';
import Gallery from '../../pages/Gallery';
import Iso14001 from '../../pages/Iso14001';
import Iso22000 from '../../pages/Iso22000';
import Iso27001 from '../../pages/Iso27001';
import Iso37001 from '../../pages/Iso37001';
import Iso45001 from '../../pages/Iso45001';
import Iso9001 from '../../pages/Iso9001';
import News from '../../pages/News';
import SedexSmeta from '../../pages/SedexSmeta';
import Sni from '../../pages/Sni';
import Training from '../../pages/Training';
import Artikel1 from '../../pages/subArtikel/Artikel1';
import Artikel2 from '../../pages/subArtikel/Artikel2';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/artikel" element={<ArtikelMenu />} />
          <Route path="/artikel/24-juni-2022" element={<Artikel1 />} />
          <Route path="/artikel/23-juni-2022" element={<Artikel2 />} />
          <Route path="/cdakb" element={<Cdakb />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/fcca" element={<Fcca />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/iso14001" element={<Iso14001 />} />
          <Route path="/iso22000" element={<Iso22000 />} />
          <Route path="/iso27001" element={<Iso27001 />} />
          <Route path="/iso37001" element={<Iso37001 />} />
          <Route path="/iso45001" element={<Iso45001 />} />
          <Route path="/iso9001" element={<Iso9001 />} />
          <Route path="/news" element={<News />} />
          <Route path="/sedexSmeta" element={<SedexSmeta />} />
          <Route path="/sni" element={<Sni />} />
          <Route path="/training" element={<Training />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
