import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Navigation from './navbar';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
