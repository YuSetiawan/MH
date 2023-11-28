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
import TrainIso9 from '../../pages/subTraining/iso/TrainIso9';
import TrainIso13 from '../../pages/subTraining/iso/TrainIso13';
import TrainIso14 from '../../pages/subTraining/iso/TrainIso14';
import TrainIso17 from '../../pages/subTraining/iso/TrainIso17';
import TrainIso19 from '../../pages/subTraining/iso/TrainIso19';
import TrainIso31 from '../../pages/subTraining/iso/TrainIso31';
import TrainIso45 from '../../pages/subTraining/iso/TrainIso45';
import Traink3Klh from '../../pages/subTraining/k3/Traink3Klh';
import Traink3Limbah from '../../pages/subTraining/k3/Traink3Limbah';
import Traink3Loto from '../../pages/subTraining/k3/Traink3Loto';
import Traink3Mecha from '../../pages/subTraining/k3/Traink3Mecha';

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
          <Route path="/training/training-iso-9001" element={<TrainIso9 />} />
          <Route path="/training/training-iso-13485" element={<TrainIso13 />} />
          <Route path="/training/training-iso-14001" element={<TrainIso14 />} />
          <Route path="/training/training-iso-17025" element={<TrainIso17 />} />
          <Route path="/training/training-iso-19011" element={<TrainIso19 />} />
          <Route path="/training/training-iso-31000" element={<TrainIso31 />} />
          <Route path="/training/training-iso-45001" element={<TrainIso45 />} />
          <Route path="/training/training-k3-proper" element={<Traink3Klh />} />
          <Route path="/training/training-k3-limbah" element={<Traink3Limbah />} />
          <Route path="/training/training-k3-loto" element={<Traink3Loto />} />
          <Route path="/training/training-k3-mechanical-safety" element={<Traink3Mecha />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
