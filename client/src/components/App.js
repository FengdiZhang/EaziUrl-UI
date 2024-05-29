import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Sidebar from './Sidebar';
import Header from './Header';
import HomePage from './HomePage';
import Analytics from './Analytic';
import Links from './Links';
import Profile from './Profile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/links" element={<Links />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
