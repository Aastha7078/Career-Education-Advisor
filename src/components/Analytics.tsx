import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, GraduationCap, MapPin, Clock } from 'lucide-react';

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('enrollment');

  const enrollmentData = [
    { year: '2020', science: 45, commerce: 30, arts: 25 },
    { year: '2021', science: 48, commerce: 28, arts: 24 },
    { year: '2022', science: 52, commerce: 27, arts: 21 },
    { year: '2023', science: 55, commerce: 25, arts: 20 },
    { year: '2024', science: 58, commerce: 24, arts: 18 }
  ];

  const careerOutcomes = [
    { field: 'Software Engineering', employed: 92, salary: '12.5', growth: '+15%' },
    { field: 'Medical', employed: 88, salary: '18.2', growth: '+8%' },
    { field: 'Teaching', employed: 75, salary: '6.8', growth: '+5%' },
    { field: 'Business/Commerce', employed: 70, salary: '8.5', growth: '+12%' },
    { field: 'Government Services', employed: 65, salary: '7.2', growth: '+3%' }
  ];

  const districtData = [
    { district: 'Srinagar', colleges: 45, students: 12500, enrollment: 78 },
    { district: 'Jammu', colleges: 38, students: 11200, enrollment: 82 },
    { district: 'Baramulla', colleges: 25, students: 6800, enrollment: 65 },
    { district: 'Anantnag', colleges: 22, students: 5900, enrollment: 70 },
    { district: 'Kupwara', colleges: 18, students: 4200, enrollment: 58 }
  ];

  const tabs = [
    { id: 'enrollment', label: 'Enrollment Trends', icon: TrendingUp },
    { id: 'careers', label: 'Career Outcomes', icon: GraduationCap },
    { id: 'districts', label: 'District Analysis', icon: MapPin }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-kashmir-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-kashmir-blue-900 mb-6">
            Educational
            <span className="block bg-gradient-to-r from-saffron-600 to-chinar-orange-500 bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>
          <p className="text-xl text-kashmir-blue-700 max-w-3xl mx-auto">
            Data-driven insights into educational trends, career outcomes, and enrollment patterns across Jammu & Kashmir
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Users, label: 'Total Students', value: '50,000+', change: '+12%', color: 'from-blue-500 to-blue-600' },
            { icon: GraduationCap, label: 'Government Colleges', value: '500+', change: '+8%', color: 'from-green-500 to-green-600' },
            { icon: TrendingUp, label: 'Employment Rate', value: '78%', change: '+5%', color: 'from-purple-500 to-purple-600' },
            { icon: Clock, label: 'Avg. Time to Job', value: '6 months', change: '-2 months', color: 'from-orange-500 to-orange-600' }
          ].map((metric, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mb-4`}>
                <metric.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-kashmir-blue-900 mb-1">{metric.value}</div>
              <div className="text-sm text-kashmir-blue-600 mb-2">{metric.label}</div>
              <div className={`text-xs font-medium flex items-center ${
                metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className="h-3 w-3 mr-1" />
                {metric.change} from last year
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 animate-slideInUp delay-400">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all ${
                  activeTab === tab.id
                    ? 'text-saffron-600 border-b-2 border-saffron-500'
                    : 'text-kashmir-blue-700 hover:text-saffron-600'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Enrollment Trends */}
            {activeTab === 'enrollment' && (
              <div>
                <h3 className="text-2xl font-bold text-kashmir-blue-900 mb-6">Stream-wise Enrollment Trends</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Chart Visualization */}
                  <div className="bg-gradient-to-br from-saffron-50 to-chinar-orange-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-kashmir-blue-800 mb-4">5-Year Enrollment Distribution (%)</h4>
                    <div className="space-y-4">
                      {enrollmentData.map((data, index) => (
                        <div key={data.year} className="flex items-center space-x-4">
                          <span className="w-12 text-sm font-medium text-kashmir-blue-700">{data.year}</span>
                          <div className="flex-1 flex space-x-1">
                            <div 
                              className="bg-blue-500 h-6 rounded-l flex items-center justify-center text-white text-xs font-medium"
                              style={{ width: `${data.science}%` }}
                            >
                              {data.science}%
                            </div>
                            <div 
                              className="bg-green-500 h-6 flex items-center justify-center text-white text-xs font-medium"
                              style={{ width: `${data.commerce}%` }}
                            >
                              {data.commerce}%
                            </div>
                            <div 
                              className="bg-purple-500 h-6 rounded-r flex items-center justify-center text-white text-xs font-medium"
                              style={{ width: `${data.arts}%` }}
                            >
                              {data.arts}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center space-x-6 mt-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded"></div>
                        <span>Science</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded"></div>
                        <span>Commerce</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded"></div>
                        <span>Arts</span>
                      </div>
                    </div>
                  </div>

                  {/* Insights */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-mountain-green-50 to-mountain-green-100 p-4 rounded-xl">
                      <h5 className="font-semibold text-mountain-green-800 mb-2">Key Insights</h5>
                      <ul className="text-sm text-mountain-green-700 space-y-1">
                        <li>• Science stream enrollment increased by 13% over 5 years</li>
                        <li>• Commerce stream shows declining trend (-6%)</li>
                        <li>• Arts enrollment dropped significantly (-7%)</li>
                        <li>• Technology awareness driving science preference</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-kashmir-blue-50 to-kashmir-blue-100 p-4 rounded-xl">
                      <h5 className="font-semibold text-kashmir-blue-800 mb-2">Recommendations</h5>
                      <ul className="text-sm text-kashmir-blue-700 space-y-1">
                        <li>• Promote interdisciplinary courses</li>
                        <li>• Enhance commerce curriculum with digital skills</li>
                        <li>• Create awareness about arts career opportunities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Career Outcomes */}
            {activeTab === 'careers' && (
              <div>
                <h3 className="text-2xl font-bold text-kashmir-blue-900 mb-6">Career Outcome Analysis</h3>
                <div className="space-y-4">
                  {careerOutcomes.map((career, index) => (
                    <div key={career.field} className="bg-gradient-to-r from-gray-50 to-kashmir-blue-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-kashmir-blue-900">{career.field}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          career.growth.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {career.growth} YoY
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{career.employed}%</div>
                          <div className="text-sm text-kashmir-blue-600">Employment Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">₹{career.salary}L</div>
                          <div className="text-sm text-kashmir-blue-600">Avg. Starting Salary</div>
                        </div>
                        <div className="text-center">
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div 
                              className="bg-gradient-to-r from-saffron-400 to-chinar-orange-400 h-2 rounded-full"
                              style={{ width: `${career.employed}%` }}
                            ></div>
                          </div>
                          <div className="text-sm text-kashmir-blue-600">Market Demand</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* District Analysis */}
            {activeTab === 'districts' && (
              <div>
                <h3 className="text-2xl font-bold text-kashmir-blue-900 mb-6">District-wise Educational Infrastructure</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  {districtData.map((district, index) => (
                    <div key={district.district} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-kashmir-blue-900">{district.district}</h4>
                        <MapPin className="h-5 w-5 text-saffron-600" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-gradient-to-br from-saffron-50 to-chinar-orange-50 rounded-lg">
                          <div className="text-xl font-bold text-saffron-600">{district.colleges}</div>
                          <div className="text-sm text-kashmir-blue-600">Colleges</div>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-mountain-green-50 to-mountain-green-100 rounded-lg">
                          <div className="text-xl font-bold text-mountain-green-600">{district.students.toLocaleString()}</div>
                          <div className="text-sm text-kashmir-blue-600">Students</div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="flex justify-between text-sm text-kashmir-blue-700 mb-1">
                          <span>Enrollment Rate</span>
                          <span>{district.enrollment}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-kashmir-blue-400 to-kashmir-blue-600 h-2 rounded-full"
                            style={{ width: `${district.enrollment}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;