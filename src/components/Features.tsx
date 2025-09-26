import React from 'react';
import { Brain, Map, School, Calendar, User, BarChart3, Smartphone, Globe, ArrowRight } from 'lucide-react';

interface FeaturesProps {
  onNavigate: (section: string) => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Aptitude Assessment',
      description: 'AI-powered personality and interest evaluation to match you with perfect career paths',
      color: 'from-purple-500 to-purple-600',
      section: 'aptitude',
      stats: '15-min assessment'
    },
    {
      icon: Map,
      title: 'Visual Career Mapping',
      description: 'Interactive charts showing degree-to-career progressions with salary insights',
      color: 'from-blue-500 to-blue-600',
      section: 'careers',
      stats: '50+ career paths'
    },
    {
      icon: School,
      title: 'Government College Directory',
      description: 'Comprehensive database of nearby colleges with admission requirements and facilities',
      color: 'from-green-500 to-green-600',
      section: 'colleges',
      stats: '500+ colleges'
    },
    {
      icon: Calendar,
      title: 'Timeline Tracker',
      description: 'Never miss important dates for admissions, scholarships, and entrance exams',
      color: 'from-orange-500 to-orange-600',
      section: 'timeline',
      stats: 'Real-time updates'
    },
    {
      icon: User,
      title: 'Personalized Dashboard',
      description: 'Custom recommendations based on your profile, interests, and academic performance',
      color: 'from-pink-500 to-pink-600',
      section: 'dashboard',
      stats: 'AI-powered'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Insights into enrollment trends, career outcomes, and educational statistics',
      color: 'from-teal-500 to-teal-600',
      section: 'analytics',
      stats: 'Live data'
    }
  ];

  const highlights = [
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Works seamlessly across all devices with offline capabilities'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Available in English, Hindi, Urdu, and Kashmiri languages'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-kashmir-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-kashmir-blue-900 mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-saffron-600 to-chinar-orange-500 bg-clip-text text-transparent">
              Educational Success
            </span>
          </h2>
          <p className="text-xl text-kashmir-blue-700 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform combines artificial intelligence, government resources, 
            and local expertise to guide your educational journey.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border border-gray-100 animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => onNavigate(feature.section)}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-kashmir-blue-900 group-hover:text-saffron-600 transition-colors">
                    {feature.title}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-saffron-600 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-kashmir-blue-700 leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-saffron-100 to-chinar-orange-100 text-saffron-700 text-sm font-medium rounded-full">
                  {feature.stats}
                </span>
                <div className="w-8 h-1 bg-gradient-to-r from-saffron-400 to-chinar-orange-400 rounded-full group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-saffron-200 animate-slideInUp"
              style={{ animationDelay: `${(features.length + index) * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-mountain-green-400 to-mountain-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <highlight.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-kashmir-blue-900 mb-1">{highlight.title}</h4>
                <p className="text-sm text-kashmir-blue-700">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slideInUp" style={{ animationDelay: `${(features.length + highlights.length) * 100}ms` }}>
          <div className="bg-gradient-to-r from-saffron-500 to-chinar-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Shape Your Future?</h3>
            <p className="mb-6 opacity-90">Join thousands of students who have found their perfect career path</p>
            <button
              onClick={() => onNavigate('aptitude')}
              className="inline-flex items-center px-8 py-3 bg-white text-saffron-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;