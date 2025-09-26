import React from 'react';
import { Mountain, BookOpen, Users, TrendingUp } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-kashmir-blue-600 via-kashmir-blue-700 to-mountain-green-600 flex items-center justify-center">
      <div className="text-center text-white">
        {/* Government Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-4 animate-pulse">
            <Mountain className="h-10 w-10 text-kashmir-blue-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Government of Jammu & Kashmir</h1>
          <p className="text-kashmir-blue-100">Higher Education Department</p>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-4">
            <BookOpen className="h-8 w-8 animate-bounce" />
            <Users className="h-8 w-8 animate-bounce delay-100" />
            <TrendingUp className="h-8 w-8 animate-bounce delay-200" />
          </div>
          <div className="w-64 mx-auto bg-white/20 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-white rounded-full animate-loading-bar"></div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2">One-Stop Career & Education Advisor</h2>
        <p className="text-sm text-kashmir-blue-100">Empowering students with informed decisions</p>
      </div>
    </div>
  );
};

export default LoadingScreen;