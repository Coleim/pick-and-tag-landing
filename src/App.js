import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Leaderboard from './components/Leaderboard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import './App.css';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Leaderboard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function LegalPage({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={
            <LegalPage>
              <Privacy />
            </LegalPage>
          } />
          <Route path="/terms" element={
            <LegalPage>
              <Terms />
            </LegalPage>
          } />
          <Route path="/cookies" element={
            <LegalPage>
              <Cookies />
            </LegalPage>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;