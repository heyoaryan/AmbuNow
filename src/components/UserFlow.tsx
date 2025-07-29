import React, { useState } from 'react';
import { Phone, Upload, Brain, MapPin, CheckCircle } from 'lucide-react';

const UserFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [animationPhase, setAnimationPhase] = useState('enter');

  const steps = [
    {
      icon: Phone,
      title: "Emergency Request",
      description: "User calls or uses app to request ambulance",
      details: "Quick voice or tap interface for immediate help"
    },
    {
      icon: Upload,
      title: "Upload Media",
      description: "Share photos/videos of the emergency situation",
      details: "AI analyzes visual data for better assessment"
    },
    {
      icon: Brain,
      title: "AI Severity Scoring",
      description: "AI evaluates emergency severity (1-10 scale)",
      details: "Machine learning determines priority level"
    },
    {
      icon: MapPin,
      title: "Smart Allocation",
      description: "Optimal ambulance assigned based on location & severity",
      details: "Real-time routing and resource optimization"
    },
    {
      icon: CheckCircle,
      title: "Live Tracking",
      description: "Real-time ambulance tracking and ETA updates",
      details: "Continuous updates until arrival"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase('exit');
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
        setAnimationPhase('enter');
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            How <span className="text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text">AmbuNow</span> Works
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our AI-powered system streamlines emergency response through intelligent automation and real-time decision making.
          </p>
        </div>

        {/* Center Stage Animation */}
        <div className="max-w-2xl mx-auto"> {/* reduced max width */}
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 min-h-[300px] flex items-center justify-center border border-gray-100"> {/* reduced padding and min-height */}
            {/* Current Step Display */}
            <div 
              className={`text-center transition-all duration-700 ${
                animationPhase === 'exit' 
                  ? 'opacity-0 transform scale-75 translate-y-12 rotate-3' 
                  : 'opacity-100 transform scale-100 translate-y-0 rotate-0'
              }`}
            >
              <div className="mb-8"> {/* reduced margin */}
                <div className="inline-block">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse"> {/* smaller icon */}
                    {React.createElement(steps[activeStep].icon, { className: "w-10 h-10 text-white" })}
                  </div>
                  {/* Removed yellow circle overlap */}
                </div>
              </div>
              
              <div className="space-y-4"> {/* reduced spacing */}
                <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-blue-100 text-red-600 px-4 py-2 rounded-full font-bold text-lg shadow-lg"> {/* smaller badge */}
                  Step {activeStep + 1}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight"> {/* smaller title */}
                  {steps[activeStep].title}
                </h3>
                <p className="text-base text-gray-600 mb-4 max-w-xl mx-auto leading-relaxed"> {/* smaller description */}
                  {steps[activeStep].description}
                </p>
                <p className="text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded-2xl inline-block shadow-lg"> {/* smaller details */}
                  {steps[activeStep].details}
                </p>
              </div>
            </div>

            {/* Progress Indicator */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFlow;