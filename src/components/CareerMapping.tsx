import React, { useState } from 'react';
import { TrendingUp, DollarSign, Clock, Users, BookOpen, ArrowRight } from 'lucide-react';

const CareerMapping = () => {
  const [selectedStream, setSelectedStream] = useState('science');

  const careerPaths = {
    science: {
      title: "Science Stream",
      color: "from-blue-500 to-blue-600",
      branches: [
        {
          name: "Physics, Chemistry, Mathematics (PCM)",
          degrees: [
            {
              name: "B.Tech/B.E.",
              duration: "4 years",
              careers: [
                { title: "Software Engineer", salary: "₹6-15 LPA", growth: "95%", demand: "Very High" },
                { title: "Data Scientist", salary: "₹8-25 LPA", growth: "92%", demand: "High" },
                { title: "Civil Engineer", salary: "₹4-12 LPA", growth: "85%", demand: "High" },
              ]
            },
            {
              name: "B.Sc. Computer Science",
              duration: "3 years",
              careers: [
                { title: "System Analyst", salary: "₹5-12 LPA", growth: "88%", demand: "High" },
                { title: "Web Developer", salary: "₹4-10 LPA", growth: "90%", demand: "Very High" },
              ]
            }
          ]
        },
        {
          name: "Physics, Chemistry, Biology (PCB)",
          degrees: [
            {
              name: "MBBS",
              duration: "5.5 years",
              careers: [
                { title: "Doctor", salary: "₹8-30 LPA", growth: "95%", demand: "Very High" },
                { title: "Medical Specialist", salary: "₹15-50 LPA", growth: "98%", demand: "Very High" },
              ]
            },
            {
              name: "B.Sc. Biology",
              duration: "3 years",
              careers: [
                { title: "Biotechnologist", salary: "₹4-8 LPA", growth: "82%", demand: "Medium" },
                { title: "Lab Technician", salary: "₹3-6 LPA", growth: "75%", demand: "Medium" },
              ]
            }
          ]
        }
      ]
    },
    commerce: {
      title: "Commerce Stream",
      color: "from-green-500 to-green-600",
      branches: [
        {
          name: "Commerce with Mathematics",
          degrees: [
            {
              name: "B.Com (Hons)",
              duration: "3 years",
              careers: [
                { title: "Chartered Accountant", salary: "₹7-20 LPA", growth: "90%", demand: "High" },
                { title: "Financial Analyst", salary: "₹5-15 LPA", growth: "88%", demand: "High" },
              ]
            },
            {
              name: "BBA",
              duration: "3 years",
              careers: [
                { title: "Business Manager", salary: "₹4-12 LPA", growth: "85%", demand: "High" },
                { title: "Marketing Executive", salary: "₹3-10 LPA", growth: "82%", demand: "Medium" },
              ]
            }
          ]
        }
      ]
    },
    arts: {
      title: "Arts Stream",
      color: "from-purple-500 to-purple-600",
      branches: [
        {
          name: "Humanities",
          degrees: [
            {
              name: "B.A. English Literature",
              duration: "3 years",
              careers: [
                { title: "Content Writer", salary: "₹3-8 LPA", growth: "78%", demand: "Medium" },
                { title: "Journalist", salary: "₹4-12 LPA", growth: "75%", demand: "Medium" },
              ]
            },
            {
              name: "B.A. Psychology",
              duration: "3 years",
              careers: [
                { title: "Clinical Psychologist", salary: "₹5-15 LPA", growth: "88%", demand: "High" },
                { title: "Counselor", salary: "₹3-10 LPA", growth: "85%", demand: "Medium" },
              ]
            }
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-kashmir-blue-50 to-mountain-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideInUp">
          <h1 className="text-4xl lg:text-5xl font-bold text-kashmir-blue-900 mb-6">
            Career Path
            <span className="block bg-gradient-to-r from-saffron-600 to-chinar-orange-500 bg-clip-text text-transparent">
              Visualization
            </span>
          </h1>
          <p className="text-xl text-kashmir-blue-700 max-w-3xl mx-auto">
            Explore detailed career progressions from degree to profession with salary insights and growth potential
          </p>
        </div>

        {/* Stream Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 animate-slideInUp delay-100">
            {Object.entries(careerPaths).map(([key, stream]) => (
              <button
                key={key}
                onClick={() => setSelectedStream(key)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  selectedStream === key
                    ? `bg-gradient-to-r ${stream.color} text-white shadow-lg transform scale-105`
                    : 'text-kashmir-blue-700 hover:bg-kashmir-blue-50'
                }`}
              >
                {stream.title}
              </button>
            ))}
          </div>
        </div>

        {/* Career Paths */}
        <div className="space-y-12">
          {careerPaths[selectedStream as keyof typeof careerPaths].branches.map((branch, branchIndex) => (
            <div key={branchIndex} className="animate-slideInUp" style={{ animationDelay: `${branchIndex * 200}ms` }}>
              <h2 className="text-2xl font-bold text-kashmir-blue-900 mb-8 text-center">
                {branch.name}
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {branch.degrees.map((degree, degreeIndex) => (
                  <div key={degreeIndex} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    {/* Degree Header */}
                    <div className={`bg-gradient-to-r ${careerPaths[selectedStream as keyof typeof careerPaths].color} rounded-xl p-6 mb-6 text-white`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{degree.name}</h3>
                          <div className="flex items-center space-x-4 text-sm opacity-90">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{degree.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <BookOpen className="h-4 w-4" />
                              <span>Undergraduate</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                          <TrendingUp className="h-8 w-8" />
                        </div>
                      </div>
                    </div>

                    {/* Career Options */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-kashmir-blue-800 mb-4">Career Opportunities</h4>
                      {degree.careers.map((career, careerIndex) => (
                        <div key={careerIndex} className="p-4 bg-gradient-to-r from-gray-50 to-kashmir-blue-50 rounded-xl border border-gray-100">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="font-semibold text-kashmir-blue-900">{career.title}</h5>
                            <ArrowRight className="h-4 w-4 text-saffron-600" />
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="text-center">
                              <div className="flex items-center justify-center space-x-1 text-green-600 font-semibold">
                                <DollarSign className="h-4 w-4" />
                                <span>{career.salary}</span>
                              </div>
                              <p className="text-gray-600 text-xs">Salary Range</p>
                            </div>
                            
                            <div className="text-center">
                              <div className="flex items-center justify-center space-x-1 text-blue-600 font-semibold">
                                <TrendingUp className="h-4 w-4" />
                                <span>{career.growth}</span>
                              </div>
                              <p className="text-gray-600 text-xs">Job Growth</p>
                            </div>
                            
                            <div className="text-center">
                              <div className="flex items-center justify-center space-x-1 text-purple-600 font-semibold">
                                <Users className="h-4 w-4" />
                                <span>{career.demand}</span>
                              </div>
                              <p className="text-gray-600 text-xs">Market Demand</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slideInUp delay-400">
          <div className="bg-gradient-to-r from-saffron-500 to-chinar-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Found Your Perfect Path?</h3>
            <p className="mb-6 opacity-90">Explore colleges offering these courses in your area</p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-saffron-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
              Find Colleges
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerMapping;