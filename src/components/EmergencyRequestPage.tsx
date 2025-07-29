import React, { useState, useRef, useEffect } from 'react';

const EmergencyRequestPage: React.FC = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [aiScore, setAiScore] = useState<number | null>(null);
  const [photoCountdown, setPhotoCountdown] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Camera setup
  useEffect(() => {
    if (step === 3 && videoRef.current) {
      const constraints = {
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };
      navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch(() => setCameraError('Unable to access camera.'));
    }
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      }
    };
  }, [step]);

  // Step 4: Take photo
  const handleTakePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, 320, 240);
        setPhoto(canvasRef.current.toDataURL('image/png'));
        setPhotoCountdown(10);
      }
    }
  };

  // Photo blur countdown logic
  useEffect(() => {
    if (photoCountdown === null) return;
    if (photoCountdown === 0) {
      setPhotoCountdown(null);
      setStep(4);
      return;
    }
    const interval = setTimeout(() => setPhotoCountdown(c => (c !== null ? c - 1 : null)), 1000);
    return () => clearTimeout(interval);
  }, [photoCountdown]);

  // After photo countdown, immediately show AI severity score
  useEffect(() => {
    if (step === 4) {
      setAiScore(Math.floor(Math.random() * 10) + 1); // Random 1-10
      setStep(5);
    }
  }, [step]);

  // Step 6: Confirmation
  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStep(6);
    }, 2000);
  };

  // Validation
  const isNameValid = name.trim().length > 1;
  const isPhoneValid = /^\d{10}$/.test(phone);
  const isLocationValid = !!location;

  // Location handler
  const handleGetLocation = () => {
    setLocationError(null);
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLocationError(null);
      },
      () => {
        setLocationError('Unable to get location. Please allow location access.');
      }
    );
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-red-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Animated Background Elements (match Hero) */}
      <div className="absolute inset-0 overflow-hidden z-0">
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
      {/* Animated Ambulance Icon (Horizontal spin) */}
      <div className="absolute left-1/2 top-16 -translate-x-1/2 z-20 flex flex-col items-center w-full pointer-events-none">
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          {/* Horizontally rotating ambulance */}
          <div className="w-full h-full animate-spin-horizontal-slow relative">
            <img
              src="/ambulance.png"
              alt="Ambulance"
              className="w-full h-full object-contain drop-shadow-lg"
            />
            {/* Siren lights */}
            <div className="absolute top-2 left-5 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
            <div className="absolute top-2 right-5 w-2 h-2 bg-red-500 rounded-full animate-ping delay-300"></div>
          </div>
        </div>
      </div>
      {/* Main Card */}
      <div className="w-full max-w-lg bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 border border-gray-200 animate-fade-in-up flex flex-col items-center z-10 mt-32 relative">
        {/* Progress Bar */}
        <div className="w-full flex items-center mb-8">
          <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-blue-500/80 transition-all duration-700"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        </div>
        {/* Step Content */}
        {step === 0 && (
          <div className="flex flex-col items-center animate-fade-in">
            <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text drop-shadow">What's your Name?</h2>
            <input
              type="text"
              className="w-full px-5 py-3 border-none rounded-2xl mb-6 focus:outline-none focus:ring-4 focus:ring-blue-300/40 text-lg shadow transition-all duration-300"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
              autoFocus
            />
            <button
              onClick={() => isNameValid && setStep(1)}
              disabled={!isNameValid}
              className={`px-8 py-3 bg-gradient-to-r from-red-600 to-blue-500 text-white rounded-full font-bold shadow-lg transition-transform duration-200 ${isNameValid ? 'hover:scale-105 active:scale-95' : 'opacity-50 cursor-not-allowed'}`}
            >
              Next
            </button>
          </div>
        )}
        {step === 1 && (
          <div className="flex flex-col items-center animate-fade-in">
            <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text drop-shadow">Your Phone Number</h2>
            <input
              type="tel"
              className="w-full px-5 py-3 border-none rounded-2xl mb-6 focus:outline-none focus:ring-4 focus:ring-red-300/40 text-lg shadow transition-all duration-300"
              placeholder="Enter 10-digit phone number"
              value={phone}
              onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
              maxLength={10}
              autoFocus
            />
            <button
              onClick={() => isPhoneValid && setStep(2)}
              disabled={!isPhoneValid}
              className={`px-8 py-3 bg-gradient-to-r from-red-600 to-blue-500 text-white rounded-full font-bold shadow-lg transition-transform duration-200 ${isPhoneValid ? 'hover:scale-105 active:scale-95' : 'opacity-50 cursor-not-allowed'}`}
            >
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col items-center animate-fade-in">
            <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text drop-shadow">Share Your Location</h2>
            <button
              onClick={handleGetLocation}
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-blue-400 text-white rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform mb-4"
            >
              Get Location
            </button>
            {location && (
              <div className="mb-2 text-blue-700 font-bold animate-fade-in">Lat: {location.lat.toFixed(5)}, Lng: {location.lng.toFixed(5)}</div>
            )}
            {locationError && <div className="text-red-600 font-bold mb-2 animate-shake">{locationError}</div>}
            <button
              onClick={() => isLocationValid && setStep(3)}
              disabled={!isLocationValid}
              className={`px-8 py-3 bg-gradient-to-r from-red-600 to-blue-500 text-white rounded-full font-bold shadow-lg transition-transform duration-200 ${isLocationValid ? 'hover:scale-105 active:scale-95' : 'opacity-50 cursor-not-allowed'}`}
            >
              Next
            </button>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col items-center pb-8 md:pb-0 animate-fade-in">
            <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text drop-shadow">Take a Photo</h2>
            <p className="mb-4 text-gray-600">Take a real-time photo of the emergency situation.</p>
            {cameraError ? (
              <div className="text-red-600 font-bold animate-shake">{cameraError}</div>
            ) : (
              <>
                {photo && photoCountdown !== null ? (
                  <div className="relative mb-4 animate-fade-in">
                    <img src={photo} alt="Captured" className="rounded-2xl border shadow-lg" style={{ width: 320, height: 240, filter: 'blur(6px) brightness(0.8)' }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-extrabold text-white drop-shadow-lg mb-2 animate-pulse">{photoCountdown}</span>
                      <span className="text-lg font-bold text-white drop-shadow animate-fade-in">AI is Analysing</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <video ref={videoRef} width={320} height={240} className="rounded-2xl border mb-4 shadow-lg animate-fade-in" autoPlay playsInline muted />
                    <canvas ref={canvasRef} width={320} height={240} style={{ display: 'none' }} />
                    <button onClick={handleTakePhoto} className="mt-2 px-8 py-3 bg-gradient-to-r from-red-600 to-blue-500 text-white rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform animate-bounce">Take Photo</button>
                  </>
                )}
              </>
            )}
          </div>
        )}
        {step === 5 && (
          <div className="flex flex-col items-center animate-fade-in">
            <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text drop-shadow">Confirm Details</h2>
            <div className="w-full mb-4 bg-white/60 rounded-xl p-4 shadow-inner border border-blue-100 animate-fade-in">
              <div className="mb-2"><span className="font-bold">Name:</span> {name}</div>
              <div className="mb-2"><span className="font-bold">Phone:</span> {phone}</div>
              <div className="mb-2"><span className="font-bold">Location:</span> {location ? `${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}` : ''}</div>
              <div className="mb-2"><span className="font-bold">Severity Score:</span> <span className="text-pink-600 font-bold animate-pulse">{aiScore}</span></div>
              {photo && <img src={photo} alt="Captured" className="rounded-xl border mb-4 shadow-lg" style={{ width: 120, height: 90 }} />}
            </div>
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-blue-500 text-white rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform animate-fade-in"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        )}
        {step === 6 && (
          <div className="flex flex-col items-center animate-fade-in">
            <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text drop-shadow">Request Submitted</h2>
            <div className="mb-4 text-green-600 font-bold flex items-center gap-2 animate-bounce"><span className="text-2xl">✔️</span> Your emergency request has been sent!</div>
            <p className="mb-4 text-gray-600">Help is on the way. Stay calm and safe.</p>
            <button onClick={() => window.location.href = '/'} className="px-8 py-3 bg-gradient-to-r from-red-600 to-blue-500 text-white rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform animate-fade-in">Go Home</button>
          </div>
        )}
      </div>
      {/* Custom Animations */}
      <style>{`
        .animate-spin-horizontal-slow {
          animation: spin-horizontal 6s linear infinite;
        }
        @keyframes spin-horizontal {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(48px); }
          to { opacity: 1; transform: none; }
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4,0,0.6,1) infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite alternate;
        }
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite alternate;
        }
        @keyframes float {
          from { transform: translateY(0); }
          to { transform: translateY(-32px); }
        }
        @keyframes float-reverse {
          from { transform: translateY(0); }
          to { transform: translateY(32px); }
        }
        .animate-shake {
          animation: shake 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-8px); }
          80% { transform: translateX(8px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default EmergencyRequestPage; 