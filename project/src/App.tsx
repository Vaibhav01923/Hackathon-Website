import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Prizes from "./components/Prizes";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Timeline />
          <Prizes />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
