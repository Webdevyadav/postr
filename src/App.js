import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Loader from './components/common/Loader';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Network = lazy(() => import('./pages/Network'));
const Jobs = lazy(() => import('./pages/Jobs'));
const Messages = lazy(() => import('./pages/Messages'));
const Communities = lazy(() => import('./pages/Communities'));
const CommunityDetail = lazy(() => import('./pages/CommunityDetail'));
const Notifications = lazy(() => import('./pages/Notifications'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Futuristic page transitions
const pageVariants = {
  initial: { 
    opacity: 0,
    y: 20,
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { 
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Suspense fallback={<Loader />}>
            <Routes location={location} key={location.pathname}>
              <Route 
                path="/" 
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                } 
              />
              <Route 
                path="/profile/:id" 
                element={
                  <PageTransition>
                    <Profile />
                  </PageTransition>
                } 
              />
              <Route 
                path="/network" 
                element={
                  <PageTransition>
                    <Network />
                  </PageTransition>
                } 
              />
              <Route 
                path="/jobs" 
                element={
                  <PageTransition>
                    <Jobs />
                  </PageTransition>
                } 
              />
              <Route 
                path="/messages" 
                element={
                  <PageTransition>
                    <Messages />
                  </PageTransition>
                } 
              />
              <Route 
                path="/communities" 
                element={
                  <PageTransition>
                    <Communities />
                  </PageTransition>
                } 
              />
              <Route 
                path="/communities/:id" 
                element={
                  <PageTransition>
                    <CommunityDetail />
                  </PageTransition>
                } 
              />
              <Route 
                path="/notifications" 
                element={
                  <PageTransition>
                    <Notifications />
                  </PageTransition>
                } 
              />
              <Route 
                path="*" 
                element={
                  <PageTransition>
                    <NotFound />
                  </PageTransition>
                } 
              />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

// Wrapper component for page transitions
const PageTransition = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          zIndex: 1,
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </div>
    </AnimatePresence>
  );
};

export default App; 