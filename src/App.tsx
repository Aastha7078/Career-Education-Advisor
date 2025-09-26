import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AptitudeTest from './components/AptitudeTest';
import CareerMapping from './components/CareerMapping';
import CollegeDirectory from './components/CollegeDirectory';
import Timeline from './components/Timeline';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'aptitude':
        return <AptitudeTest onComplete={(results) => console.log(results)} />;
      case 'careers':
        return <CareerMapping />;
      case 'colleges':
        return <CollegeDirectory />;
      case 'timeline':
        return <Timeline />;
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'analytics':
        return <Analytics />;
      default:
        return (
          <>
            <Hero onNavigate={setCurrentSection} />
            <Features onNavigate={setCurrentSection} />
            <Analytics />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-saffron-200 to-saffron-300 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-gradient-to-br from-kashmir-blue-200 to-kashmir-blue-300 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-mountain-green-200 to-mountain-green-300 rounded-full opacity-15 animate-bounce-slow"></div>
        <div className="absolute bottom-32 right-32 w-28 h-28 bg-gradient-to-br from-chinar-orange-200 to-chinar-orange-300 rounded-full opacity-20 animate-pulse-slow"></div>
      </div>

      <Header currentSection={currentSection} onNavigate={setCurrentSection} user={user} setUser={setUser} />
      
      <main className="relative z-10">
        {renderSection()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;