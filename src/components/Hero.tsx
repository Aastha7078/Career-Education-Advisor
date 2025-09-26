import React from 'react';
import { ArrowRight, BookOpen, Target, TrendingUp, Users } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-30.036-7.071c.549-8.157 7.535-14.464 15.886-14.464 8.351 0 15.337 6.307 15.886 14.464L20 12.929 9.964 12.929z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium mb-6 animate-slideInUp">
              <span className="w-2 h-2 bg-saffron-500 rounded-full mr-2 animate-pulse"></span>
              Government of Jammu & Kashmir Initiative
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-kashmir-blue-900 mb-6 leading-tight animate-slideInUp delay-100">
              Your Future Starts with the
              <span className="block text-saffron-600 bg-gradient-to-r from-saffron-600 to-chinar-orange-500 bg-clip-text text-transparent">
                Right Choice
              </span>
            </h1>
            
            <p className="text-xl text-kashmir-blue-700 mb-8 leading-relaxed animate-slideInUp delay-200">
              Discover personalized career paths, explore government colleges, and make informed decisions 
              about your education with our AI-powered guidance platform.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slideInUp delay-300">
              <button
                onClick={() => onNavigate('aptitude')}
                className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-saffron-500 to-chinar-orange-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Target className="h-5 w-5 mr-2 group-hover:animate-spin" />
                Take Aptitude Test
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => onNavigate('colleges')}
                className="flex items-center justify-center px-8 py-4 bg-white text-kashmir-blue-700 rounded-xl font-semibold border-2 border-kashmir-blue-200 hover:border-saffron-300 hover:bg-saffron-50 transition-all duration-300"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Explore Colleges
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-slideInUp delay-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron-600 mb-1">500+</div>
                <div className="text-sm text-kashmir-blue-600">Government Colleges</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mountain-green-600 mb-1">50+</div>
                <div className="text-sm text-kashmir-blue-600">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-kashmir-blue-600 mb-1">10K+</div>
                <div className="text-sm text-kashmir-blue-600">Students Guided</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative animate-slideInRight">
            <div className="relative z-10 bg-gradient-to-br from-white to-kashmir-blue-50 rounded-3xl p-8 shadow-2xl">
              {/* Mock Dashboard Preview */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-kashmir-blue-800">Your Career Journey</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Progress Steps */}
                <div className="space-y-3">
                  {[
                    { label: 'Complete Aptitude Test', status: 'completed', color: 'bg-green-500' },
                    { label: 'Explore Recommendations', status: 'active', color: 'bg-saffron-500' },
                    { label: 'Apply to Colleges', status: 'upcoming', color: 'bg-gray-300' },
                    { label: 'Track Applications', status: 'upcoming', color: 'bg-gray-300' },
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3 animate-slideInRight" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className={`w-4 h-4 ${step.color} rounded-full ${step.status === 'active' ? 'animate-pulse' : ''}`}></div>
                      <span className="text-sm text-kashmir-blue-700">{step.label}</span>
                    </div>
                  ))}
                </div>

                {/* Mock Chart */}
                <div className="mt-6 p-4 bg-gradient-to-r from-saffron-50 to-mountain-green-50 rounded-lg">
                  <div className="text-sm font-medium text-kashmir-blue-700 mb-2">Career Match Score</div>
                  <div className="flex items-end space-x-2 h-12">
                    {[40, 65, 85, 70, 90].map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-saffron-400 to-saffron-600 rounded-t flex-1 animate-growUp"
                        style={{ height: `${height}%`, animationDelay: `${index * 100}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-mountain-green-400 to-mountain-green-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-chinar-orange-400 to-chinar-orange-600 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;