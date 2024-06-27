import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import GlobalStyle from './GlobalStyles';
import Sidebar from './Sidebar';
import Header from './Header';
import HomePage from './HomePage';
import Analytics from './Analytic';
import Links from './Links';
import Profile from './Profile';
import NewLink from './NewLink';
import GeneratedLink from './GeneratedLink';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import OAuthCallback from './OAuthCallback';

const App = () => {
  return (
    <UserProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/links" element={<Links />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newlink" element={<NewLink />} />
          <Route path="/generatedlink" element={<GeneratedLink />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth/callback" element={<OAuthCallback />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
