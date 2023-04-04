import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from "./components/Footer/Footer"
import Header from './components/Header/Header';
const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;