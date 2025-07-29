import React, { useEffect, useState } from 'react';
import { Play, Zap, Activity, Heart, Shield, TrendingUp, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [emergencyPulse, setEmergencyPulse] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ambulancePosition, setAmbulancePosition] = useState({ x: 0, y: 0 });
  const [showHindi, setShowHindi] = useState(false);

  const featureCards = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Life-Saving AI",
      description: "Real-time emergency assessment",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Smart Dispatch",
      description: "Intelligent ambulance allocation",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "60% Faster",
      description: "Reduced response times",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setEmergencyPulse(prev => !prev);
    }, 50);

    // Cycle through cards every 4 seconds
    const cardInterval = setInterval(() => {
      setCurrentCard(prev => (prev + 1) % featureCards.length);
    }, 4000);

    // Mouse movement for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    // Animated ambulance movement
    const ambulanceInterval = setInterval(() => {
      setAmbulancePosition({
        x: Math.sin(Date.now() * 0.001) * 100,
        y: Math.cos(Date.now() * 0.0008) * 50
      });
    }, 50);

    const textInterval = setInterval(() => {
      setShowHindi((prev) => !prev);
    }, 2200); // 2.2s for each text


    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      clearInterval(cardInterval);
      clearInterval(ambulanceInterval);
      clearInterval(textInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 pt-20 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-300 rounded-full animate-ping delay-1000 opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-300 rounded-full animate-pulse delay-2000 opacity-50"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-300 rounded-full animate-bounce delay-3000 opacity-70"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-red-400 rounded-full animate-ping delay-4000 opacity-80"></div>
        <div className="absolute top-1/4 right-1/3 w-5 h-5 bg-purple-300 rounded-full animate-spin delay-5000 opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-yellow-300 rounded-full animate-pulse delay-6000 opacity-60"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-red-200 rounded-lg animate-spin-slow opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-blue-200 rounded-full animate-bounce delay-1000 opacity-40"></div>
        <div className="absolute top-2/3 left-1/2 w-20 h-20 border-2 border-green-200 transform rotate-45 animate-pulse delay-2000 opacity-25"></div>
        
        {/* New floating elements */}
        <div className="absolute top-1/6 right-1/6 w-8 h-8 border-2 border-purple-200 rounded-full animate-spin delay-3000 opacity-30"></div>
        <div className="absolute bottom-1/6 left-1/3 w-10 h-10 border-2 border-orange-200 transform rotate-12 animate-bounce delay-4000 opacity-35"></div>
        <div className="absolute top-3/4 left-1/6 w-6 h-6 border-2 border-pink-200 rounded-lg animate-pulse delay-5000 opacity-40"></div>
        

      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up relative z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-blue-100 text-red-800 px-4 py-2 rounded-full text-xs font-semibold shadow-lg animate-bounce">
                <Activity className="w-4 h-4 mr-2 animate-pulse text-red-600" />
                <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  World's First AI-Powered Emergency Response
                </span>
                <Zap className="w-4 h-4 ml-2 animate-pulse text-blue-600" />
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="inline-block animate-fade-in-up">Save</span>{' '}
                <span className="inline-block animate-fade-in-up delay-200">Lives</span>{' '}
                <span className="inline-block animate-fade-in-up delay-400">with</span>
                <span className="relative-heading-swap" style={{ display: 'block', minHeight: 112, position: 'relative' }}>
                  <span className={`absolute left-0 top-0 w-full text-transparent bg-gradient-to-r from-red-600 via-red-500 to-blue-600 bg-clip-text transition-opacity duration-700 ${showHindi ? 'opacity-0' : 'opacity-100'}`}>AmbuNow</span>
                  <span
                    className={`absolute left-0 top-0 w-full text-transparent bg-gradient-to-r from-red-600 via-red-500 to-blue-600 bg-clip-text transition-opacity duration-700 ${showHindi ? 'opacity-100' : 'opacity-0'}`}
                    style={{ fontFamily: `'Noto Sans Devanagari', 'Hind', 'Mukta', 'Arial', sans-serif'`, WebkitFontSmoothing: 'antialiased', letterSpacing: '0.01em', lineHeight: 1.4 }}
                  >
                    ऐम्बु नाउ
                  </span>
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up delay-800">
                <span className="font-semibold text-red-600">Revolutionary</span> AI-powered platform that reduces ambulance response time by{' '}
                <span className="font-bold text-blue-600 text-xl">60%</span> through intelligent allocation and real-time severity assessment.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-1000">
              <button
                className={`bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl ${emergencyPulse ? 'animate-pulse' : ''}`}
                onClick={() => window.location.href = '/emergency'}
              >
                <Activity className="w-5 h-5 inline mr-2" />
                Emergency Request
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up delay-1200">
              <div className="text-center transform hover:scale-110 transition-transform group">
                <div className="text-3xl font-bold text-red-600 animate-pulse group-hover:animate-bounce">60%</div>
                <div className="text-sm text-gray-600 font-semibold">Faster Response</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform group">
                <div className="text-3xl font-bold text-blue-600 animate-pulse delay-300 group-hover:animate-bounce">24/7</div>
                <div className="text-sm text-gray-600 font-semibold">AI Monitoring</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform group">
                <div className="text-3xl font-bold text-green-600 animate-pulse delay-600 group-hover:animate-bounce">98%</div>
                <div className="text-sm text-gray-600 font-semibold">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated 3D Cards */}
          <div className="relative animate-fade-in-up delay-400" style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)`
          }}>
            {/* Main Feature Card */}
            <div className="relative mb-8">
              <div className={`${featureCards[currentCard].bgColor} rounded-2xl shadow-2xl p-8 transform transition-all duration-700 hover:scale-105 border border-gray-200 relative overflow-hidden`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-current to-transparent animate-pulse"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6 transform hover:scale-110 transition-transform">
                    {featureCards[currentCard].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{featureCards[currentCard].title}</h3>
                  <p className="text-gray-600">{featureCards[currentCard].description}</p>
                </div>
                
                {/* Floating elements around card */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-1/2 -right-3 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-60"></div>
              </div>
            </div>

            {/* Animated Ambulance Element */}
            <div className="relative mb-8">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-6 border border-gray-200 relative overflow-hidden">
                {/* Animated ambulance */}
                <div className="relative h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl mb-4 overflow-hidden">
                  {/* Road - dashed white center line */}
                  <div className="absolute bottom-0 left-0 w-full h-10 flex items-end">
                    <div className="w-full h-6 bg-gray-700 rounded-b-xl relative flex items-center">
                      <div className="absolute left-0 top-1/2 w-full flex justify-between px-2" style={{transform: 'translateY(-50%)'}}>
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="w-8 h-1 bg-white rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Moving ambulance */}
                  <div
                    className="absolute bottom-6 w-40 h-20 transform transition-all duration-1000"
                    style={{
                      left: `${50 + ambulancePosition.x}%`,
                      transform: `translateX(-50%) rotateY(${ambulancePosition.x > 0 ? 5 : -5}deg)`
                    }}
                  >
                    {/* Shadow under ambulance */}
                    <div className="absolute left-1/2 bottom-2 w-24 h-5 bg-black opacity-20 rounded-full blur-md -translate-x-1/2 z-0"></div>
                    {/* Ambulance image */}
                    <div className="relative h-full w-full z-10">
                      <img
                        src="/ambulance.png"
                        alt="Ambulance"
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                      {/* Siren lights */}
                      <div className="absolute top-2 left-8 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                      <div className="absolute top-2 right-8 w-2 h-2 bg-red-500 rounded-full animate-ping delay-300"></div>
                    </div>
                  </div>
                  
                  {/* Emergency pulse effect */}
                  <div className="absolute inset-0 border-2 border-red-300 rounded-xl animate-ping opacity-30"></div>
                </div>
                
                {/* Status indicators */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Animated Radar replacing En Route */}
                  <div className="flex items-center bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg relative overflow-hidden min-h-[64px]">
                    {/* Radar animation with MapPin icon */}
                    <div className="flex items-center justify-center relative mr-4">
                      {/* Pulsing circles */}
                      <span className="absolute w-12 h-12 rounded-full bg-green-400 opacity-20 animate-ping"></span>
                      <span className="absolute w-20 h-20 rounded-full bg-green-400 opacity-10 animate-ping delay-200"></span>
                      {/* MapPin Icon */}
                      <span className="relative z-10">
                        <MapPin className="w-8 h-8 text-green-500" />
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">Live Tracking</div>
                      <div className="text-xs text-gray-600">Ambulance location updated</div>
                    </div>
                  </div>
                  {/* Response Time card remains */}
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 animate-spin" />
                    <div>
                      <div className="text-sm font-bold text-gray-800">Response Time</div>
                      <div className="text-xs text-gray-600">Avg: 3.1 min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Emergency Button */}
            <div className="absolute -top-4 -right-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-2xl flex items-center justify-center animate-pulse cursor-pointer transform hover:scale-110 transition-transform">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 border-2 border-red-400 rounded-full animate-ping"></div>
                <div className="absolute inset-0 w-16 h-16 border-2 border-red-300 rounded-full animate-ping delay-300"></div>
              </div>
            </div>

            {/* Animated Connection Lines */}
            <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-dashed border-red-300 rounded-full animate-spin-slow opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 border-2 border-dashed border-blue-300 rounded-full animate-spin-slow-reverse opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-1/4 right-10 w-8 h-8 bg-yellow-400 rounded-full animate-bounce delay-1000 opacity-60"></div>
      <div className="absolute bottom-1/4 left-10 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-2000 opacity-50"></div>
      <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-green-400 rounded-full animate-ping delay-3000 opacity-70"></div>
      
      {/* New interactive elements */}
      <div className="absolute top-1/3 left-1/6 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-bounce delay-1500 opacity-40 cursor-pointer hover:scale-125 transition-transform"></div>
      <div className="absolute bottom-1/3 right-1/6 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-2500 opacity-50 cursor-pointer hover:scale-125 transition-transform"></div>
      <div className="absolute top-2/3 left-1/4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-spin delay-3500 opacity-60 cursor-pointer hover:scale-125 transition-transform"></div>
    </section>
  );
};

export default Hero;