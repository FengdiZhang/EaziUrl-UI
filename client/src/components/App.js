import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import HomePage from './HomePage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
