import React, { useRef } from 'react';
import { Heart, Award, Zap, Shield, Globe, Activity, Clock, Home } from 'lucide-react';

const Impact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="impact" ref={sectionRef} className="pt-20 mt-8 py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-red-900 text-white relative overflow-hidden"> {/* extra top gap */}
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-3000"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* World's First Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold mb-12 mt-4 animate-pulse"> {/* more space above and below badge */}
            <Award className="w-6 h-6 mr-3" />
            WORLD'S FIRST AI-POWERED AMBULANCE ALLOCATION PLATFORM
            <Zap className="w-6 h-6 ml-3" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="text-transparent bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text">
              Revolutionary
            </span>
            <br />
            <span className="text-red-400">Impact</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-white font-semibold">AmbuNow</span> is the pioneering force transforming emergency healthcare delivery globally. 
            <span className="text-red-400 font-bold"> No other platform exists like this.</span> We're not just improving the system – we're revolutionizing it.
          </p>
        </div>

        {/* Informative Impact Blocks - Future Real-World Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Faster Help, More Lives Saved */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 text-center flex flex-col items-center">
            <Zap className="w-12 h-12 text-yellow-400 mb-4 animate-bounce" />
            <div className="text-2xl font-bold mb-2 text-white">Faster Help, More Lives Saved</div>
            <div className="text-lg text-gray-200 mb-2">AI ensures ambulances reach you <span className='text-white font-bold'>40% faster</span>, even in traffic or peak hours.</div>
            <div className="text-sm text-gray-400">Critical wait times drop, giving every patient a better chance.</div>
          </div>
          {/* No More Missed Emergencies */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 text-center flex flex-col items-center">
            <Heart className="w-12 h-12 text-red-400 mb-4 animate-pulse" />
            <div className="text-2xl font-bold mb-2 text-white">No More Missed Emergencies</div>
            <div className="text-lg text-gray-200 mb-2">24/7 AI monitoring means every call is answered, and no emergency is left behind.</div>
            <div className="text-sm text-gray-400">Instant response, day or night, for everyone in need.</div>
          </div>
          {/* Smarter City, Safer People */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 text-center flex flex-col items-center">
            <Home className="w-12 h-12 text-blue-400 mb-4 animate-pulse" />
            <div className="text-2xl font-bold mb-2 text-white">Smarter City, Safer People</div>
            <div className="text-lg text-gray-200 mb-2">AmbuNow learns from every incident, making your city safer every day.</div>
            <div className="text-sm text-gray-400">AI predicts hotspots and improves routes for future emergencies.</div>
          </div>
          {/* Stress-Free for Families */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 text-center flex flex-col items-center">
            <Shield className="w-12 h-12 text-green-400 mb-4 animate-pulse" />
            <div className="text-2xl font-bold mb-2 text-white">Stress-Free for Families</div>
            <div className="text-lg text-gray-200 mb-2">Families get live updates and accurate ETAs, reducing anxiety in critical moments.</div>
            <div className="text-sm text-gray-400">Peace of mind when it matters most.</div>
          </div>
        </div>

        {/* Innovation Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> {/* reduced gap and margin */}
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold mb-4">First-of-Its-Kind</h3>
            <p className="text-gray-300">The world's only AI-powered real-time ambulance allocation system. Nothing like this has ever existed before.</p>
          </div>
          
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8">
            <Activity className="w-16 h-16 text-blue-400 mx-auto mb-4 animate-spin" />
            <h3 className="text-2xl font-bold mb-4">Global Pioneer</h3>
            <p className="text-gray-300">Leading the emergency response revolution across continents. Setting the standard for intelligent healthcare delivery.</p>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8">
            <Clock className="w-16 h-16 text-green-400 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold mb-4">Always On Time</h3>
            <p className="text-gray-300">Our system guarantees timely response, ensuring help is always on the way when you need it most.</p>
          </div>
        </div>

        {/* Success Stories - Future Impact Blocks */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-12">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text">
              How AmbuNow Will Change Lives
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Every Second Counts */}
            <div className="text-center">
              <Zap className="w-20 h-20 text-yellow-400 mx-auto mb-6 animate-bounce" />
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">Every Second Counts</h4>
              <p className="text-gray-300 text-lg">AI-driven dispatch will reduce average response times by up to <span className="text-white font-bold">40%</span>, giving every patient a better chance at survival.</p>
            </div>
            {/* Seamless City Coordination */}
            <div className="text-center">
              <Globe className="w-20 h-20 text-blue-400 mx-auto mb-6 animate-spin" />
              <h4 className="text-2xl font-bold mb-4 text-blue-400">Seamless City Coordination</h4>
              <p className="text-gray-300 text-lg">AmbuNow will connect ambulances, hospitals, and control rooms for smooth, city-wide emergency management—no more resource clashes or delays.</p>
            </div>
            {/* Peace of Mind for Families */}
            <div className="text-center">
              <Heart className="w-20 h-20 text-red-400 mx-auto mb-6 animate-pulse" />
              <h4 className="text-2xl font-bold mb-4 text-red-400">Peace of Mind for Families</h4>
              <p className="text-gray-300 text-lg">Families will receive live updates and accurate ETAs, reducing anxiety and uncertainty during emergencies.</p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold animate-pulse">
              <Heart className="w-6 h-6 mr-3" />
              Join the Emergency Response Revolution
              <Zap className="w-6 h-6 ml-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;