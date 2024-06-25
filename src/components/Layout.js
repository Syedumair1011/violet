import React from 'react';
import Header from './Header';
import Footer from './footer-white';

export default function Layout({ children }) {
  return (
    <>
      <Header />
       {children}
      <Footer  />
    </>
  );
}
