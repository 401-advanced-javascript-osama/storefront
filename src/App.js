import React from 'react';
import './style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/storefront/Categories';
import Products from './components/storefront/Products';
import CssBaseline from '@material-ui/core/CssBaseline';
function App() {
  return (
    <>
      <CssBaseline >
        <Header />
        <Categories />
        <Products />
        <Footer />
      </CssBaseline>
    </>
  );
}

export default App;