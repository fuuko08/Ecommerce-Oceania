import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Shop,
  Blog,
  About,
  Contact,
} from "./pages";
import { Navbar, Footer, Toast } from "./components";
import Cookies from 'universal-cookie'

const App = () => {
  const cookies = new Cookies()
  // Online state
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  let tkn = cookies.get('tkn');
  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener("online", handleStatusChange);

    // Listen to the offline status
    window.addEventListener("offline", handleStatusChange);

    if (tkn === undefined) {
      window.localStorage.clear();
    }

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]); // eslint-disable-line

  return (
    <>
      <div className="displayBody">
        <Navbar />
        <Toast />
        <Routes>
          <Route path="/Ecommerce-Oceania" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
