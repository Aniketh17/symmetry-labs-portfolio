import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background3D from './components/Background3D';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      {/* 3D Background wrapped in Suspense for loading fallback */}
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>

      {/* Main Content Overlay */}
      <div style={{ position: 'relative', zIndex: 10, backgroundColor: 'transparent', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <TopNav />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
