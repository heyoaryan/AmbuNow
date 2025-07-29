import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import UserFlow from './components/UserFlow';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EmergencyRequestPage from './components/EmergencyRequestPage';

function MinimalHeader({ timer, fixed }: { timer: number, fixed?: boolean }) {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  return (
    <header className={`flex items-center justify-between px-8 py-4 bg-white shadow-md border-b border-gray-100 z-50${fixed ? ' fixed top-0 left-0 right-0' : ''}`} style={fixed ? {zIndex: 1000} : {}}>
      <div className="flex items-center space-x-3">
        <img src="/ambunowlogo.png" alt="AmbuNow Logo" className="w-10 h-10 object-contain drop-shadow-lg" />
        <div>
          <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">AmbuNow</span>
          <div className="text-xs text-gray-500 font-medium">AI Emergency Response</div>
        </div>
      </div>
      <div className="text-lg font-bold bg-gradient-to-r from-red-600 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg" style={fixed ? {position: 'fixed', top: 18, right: 32, zIndex: 1100} : {}}>
        {minutes}:{seconds.toString().padStart(2, '0')} left
      </div>
    </header>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [emergencyTimer, setEmergencyTimer] = useState(120); // 2 minutes
  const isEmergencyPage = window.location.pathname === '/emergency';

  // Persistent timer logic
  useEffect(() => {
    if (!isEmergencyPage) return;
    let start = localStorage.getItem('emergency_start');
    let startTime = start ? parseInt(start) : null;
    if (!startTime || isNaN(startTime)) {
      startTime = Date.now();
      localStorage.setItem('emergency_start', startTime.toString());
    }
    const updateTimer = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(0, 120 - elapsed);
      setEmergencyTimer(remaining);
      if (remaining <= 0) {
        localStorage.removeItem('emergency_start');
        window.location.href = '/';
      }
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [isEmergencyPage]);

  // Clear timer on leaving emergency page
  useEffect(() => {
    if (!isEmergencyPage) localStorage.removeItem('emergency_start');
  }, [isEmergencyPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-['Poppins',sans-serif] overflow-x-hidden">
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <>
          {isEmergencyPage ? (
            <>
              <MinimalHeader timer={emergencyTimer} fixed />
              <main>
                <EmergencyRequestPage onTimeout={() => window.location.href = '/'} timer={emergencyTimer} />
              </main>
            </>
          ) : (
            <>
              <Header />
              <main>
                <Hero />
                <UserFlow />
                <Impact />
                <Contact />
              </main>
              <Footer />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;