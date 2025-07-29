import React from 'react';
import { Heart, Activity, Zap } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Enhanced Animated Ambulance */}
        <div className="relative mb-12 flex items-center justify-center">
          <img
            src="/ambunowlogo.png"
            alt="AmbuNow Logo"
            className="w-28 h-28 object-contain animate-bounce drop-shadow-xl"
          />
        </div>
        
        {/* Enhanced ECG Line */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Activity className="w-6 h-6 text-red-500 animate-pulse" />
            <div className="flex space-x-1">
              <div className="w-1 h-8 bg-red-500 animate-pulse"></div>
              <div className="w-1 h-12 bg-red-600 animate-pulse delay-100"></div>
              <div className="w-1 h-6 bg-red-400 animate-pulse delay-200"></div>
              <div className="w-1 h-10 bg-red-500 animate-pulse delay-300"></div>
              <div className="w-1 h-4 bg-red-600 animate-pulse delay-400"></div>
            </div>
            <Heart className="w-6 h-6 text-red-500 animate-pulse delay-500" />
          </div>
        </div>
        
        {/* Enhanced Loading Text */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-800 animate-pulse">
            <span className="text-red-600">Ambu</span>Now
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-5 h-5 text-yellow-500 animate-bounce" />
            <p className="text-gray-600 text-lg">Connecting you to life-saving care...</p>
            <Zap className="w-5 h-5 text-yellow-500 animate-bounce delay-300" />
          </div>
        </div>
        
        {/* Enhanced Loading Bar */}
        <div className="w-80 h-3 bg-gray-200 rounded-full mx-auto mt-8 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full animate-pulse loading-bar"></div>
        </div>
        
        {/* Loading Percentage */}
        <div className="mt-4">
          <span className="text-red-600 font-bold text-lg animate-pulse">Initializing Emergency System...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;