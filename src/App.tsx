import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ChatBot } from "./ChatBot";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from "@chakra-ui/react";
import Home from './pages/Home';
import Categories from './pages/Categories';
import Listings from './pages/Listings';
import Sell from './pages/Sell';
import Cart from './pages/Cart';
import Account from './pages/Account';

export const App = () => {
  const baseUrl = process.env.NODE_ENV === 'production' ? '/cssg-project/' : '/';
  return (
    <Router basename={baseUrl}>
      <Navbar />
      <Box height="80px" w="100%" backgroundColor="transparent"></Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <ChatBot />
      <Footer />
    </Router>
  );
};
