
import './App.css';
import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PLASMIC } from './plasmic-init';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* Your other routes... */}
          <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
        </Routes>
      </BrowserRouter>
  );
}