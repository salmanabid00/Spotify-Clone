import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import DisplayHome from './DisplayHome'; 
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

function Display() {
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const albumId = isAlbum ? Number(location.pathname.split('/').pop()) : null;
  const [bgColor, setBgColor] = useState('#121212');

  useEffect(() => {
    if (isAlbum && albumsData[albumId]) {
      setBgColor(`linear-gradient(${albumsData[albumId].bgColor}, #121212)`);
    } else {
      setBgColor('#121212');
    }
  }, [isAlbum, albumId]);

  return (
    <div
      style={{ background: bgColor }}
      className="w-full m-2 px-6 pt-4 rounded text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;
