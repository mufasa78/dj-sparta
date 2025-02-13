import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Music = lazy(() => import('./pages/Music'));
const Events = lazy(() => import('./pages/Events'));
const Merchandise = lazy(() => import('./pages/Merchandise'));
const Contact = lazy(() => import('./pages/Contact'));
const Academy = lazy(() => import('./pages/Academy'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <ScrollToTopOnMount />
        <Navbar />
        <main className="flex-grow pt-16">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/music" element={<Music />} />
              <Route path="/events" element={<Events />} />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/academy" element={<Academy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;