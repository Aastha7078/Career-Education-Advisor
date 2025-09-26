import React from 'react';
import { User, Target, BookOpen, Calendar, TrendingUp, Award, Bell, Settings } from 'lucide-react';

interface DashboardProps {
  user: any;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-kashmir-blue-50 to-mountain-green-50 flex items-center justify-center">
        <div className="text-center">
          <User className="h-16 w-16 text-kashmir-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-kashmir-blue-900 mb-4">Login Required</h2>
          <p className="text-kashmir-blue-700 mb-6">Please login to access your personalized dashboard</p>
          <button className="px-8 py-3 bg-gradient-to-r from-saffron-500 to-chinar-orange-500 text-white rounded-xl font-semibold">
            Login to Continue
          </button>
        </div>
      </div>
    );
  }

  const recommendations = [
    {
      title: "Complete Your Profile",
      description: "Add more details to get better recommendations",
      progress: 70,
      action: "Update Profile",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Take Advanced Aptitude Test",
      description: "Unlock more detailed career insights",
      progress: 0,
      action: "Start Test",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Apply to Recommended Colleges",
      description: "5 colleges match your profile perfectly",
      progress: 20,
      action: "View Colleges",
      color: "from-green-500 to-green-600"
    }
  ];

  const upcomingEvents = [
    {
      title: "B.Tech Application Deadline",
      date: "March 15, 2025",
      type: "urgent"
    },
    {
      title: "Scholarship Form Submission",
      date: "March 20, 2025",
      type: "important"
    },
    {
      title: "Career Counseling Session",
      date: "March 25, 2025",
      type: "info"
    }
  ];

  const collegeMatches = [
    {
      name: "Government Degree College Srinagar",
      match: "95%",
      course: "B.Sc. Computer Science",
      status: "Recommended"
    },
    {
      name: "Islamic University of Science & Technology",
      match: "88%",
      course: "B.Tech CSE",
      status: "Good Match"
    },
    {
      name: "Government College for Women",
      match: "82%",
      course: "BCA",
      status: "Consider"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-kashmir-blue-50 to-mountain-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-slideInUp">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-kashmir-blue-900">Welcome back, {user.name}!</h1>
                  <p className="text-kashmir-blue-700">Class {user.class} • Interests: {user.interests.join(', ')}</p>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-kashmir-blue-100 text-kashmir-blue-700 rounded-xl hover:bg-kashmir-blue-200 transition-colors">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {recommendations.map((rec, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slideInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${rec.color} rounded-xl flex items-center justify-center`}>
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">{rec.progress}%</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-kashmir-blue-900 mb-2">{rec.title}</h3>
                  <p className="text-kashmir-blue-700 text-sm mb-4">{rec.description}</p>
                  
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${rec.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${rec.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button className={`w-full py-2 bg-gradient-to-r ${rec.color} text-white rounded-lg font-medium hover:shadow-lg transition-all`}>
                    {rec.action}
                  </button>
                </div>
              ))}
            </div>

            {/* College Matches */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-slideInUp delay-300">
              <h2 className="text-2xl font-bold text-kashmir-blue-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-3 text-saffron-600" />
                Top College Matches
              </h2>
              
              <div className="space-y-4">
                {collegeMatches.map((college, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-saffron-50 to-chinar-orange-50 rounded-xl border border-saffron-100">
                    <div className="flex-1">
                      <h4 className="font-semibold text-kashmir-blue-900">{college.name}</h4>
                      <p className="text-sm text-kashmir-blue-700">{college.course}</p>
                    </div>
                    <div className="text-center mx-4">
                      <div className="text-lg font-bold text-saffron-600">{college.match}</div>
                      <div className="text-xs text-kashmir-blue-600">Match Score</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      college.status === 'Recommended' ? 'bg-green-100 text-green-700' :
                      college.status === 'Good Match' ? 'bg-blue-100 text-blue-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {college.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Insights */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-slideInUp delay-400">
              <h2 className="text-2xl font-bold text-kashmir-blue-900 mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3 text-mountain-green-600" />
                Career Insights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-to-br from-mountain-green-50 to-mountain-green-100 rounded-xl">
                  <h4 className="font-semibold text-mountain-green-800 mb-2">Top Recommended Field</h4>
                  <p className="text-2xl font-bold text-mountain-green-900">Computer Science</p>
                  <p className="text-sm text-mountain-green-700">Based on your aptitude and interests</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-kashmir-blue-50 to-kashmir-blue-100 rounded-xl">
                  <h4 className="font-semibold text-kashmir-blue-800 mb-2">Salary Potential</h4>
                  <p className="text-2xl font-bold text-kashmir-blue-900">₹8-15 LPA</p>
                  <p className="text-sm text-kashmir-blue-700">Average starting salary range</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slideInUp delay-200">
              <h3 className="text-lg font-bold text-kashmir-blue-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-saffron-600" />
                Upcoming Events
              </h3>
              
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      event.type === 'urgent' ? 'bg-red-500' :
                      event.type === 'important' ? 'bg-orange-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-kashmir-blue-900 text-sm">{event.title}</p>
                      <p className="text-xs text-kashmir-blue-600">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-slideInUp delay-300">
              <h3 className="text-lg font-bold text-kashmir-blue-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-mountain-green-600" />
                Your Progress
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-kashmir-blue-700">Profile Completion</span>
                  <span className="font-semibold text-kashmir-blue-900">70%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-kashmir-blue-700">Tests Completed</span>
                  <span className="font-semibold text-kashmir-blue-900">1/3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-kashmir-blue-700">Colleges Shortlisted</span>
                  <span className="font-semibold text-kashmir-blue-900">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-kashmir-blue-700">Applications Started</span>
                  <span className="font-semibold text-kashmir-blue-900">0</span>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-gradient-to-r from-saffron-500 to-chinar-orange-500 rounded-2xl p-6 text-white animate-slideInUp delay-400">
              <div className="flex items-center mb-4">
                <Bell className="h-6 w-6 mr-2" />
                <h3 className="text-lg font-bold">Notifications</h3>
              </div>
              <p className="text-sm opacity-90 mb-4">Stay updated with personalized alerts for deadlines and opportunities</p>
              <button className="w-full bg-white text-saffron-600 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Manage Alerts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;