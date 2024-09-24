import React from 'react';
import Home from './Home/Home';
import { Navigate, Route, Routes } from "react-router-dom"
import Cineprimes from './cineprimes/Cineprimes';
import Signup from './components/Signup';
import AboutUs from './aboutus/AboutUs';
import Contacts from './contacts/Contacts';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cineprime" element={authUser ? <Cineprimes /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App