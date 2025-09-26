import React, { useState } from 'react';
import { Calendar, Clock, Bell, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const Timeline = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const timelineEvents = [
    {
      month: 0, // January
      events: [
        {
          title: "B.Tech Admission Applications Open",
          date: "January 15, 2025",
          type: "admission",
          priority: "high",
          description: "Application forms available for various engineering colleges",
          colleges: ["NIT Srinagar", "IUST", "Government Engineering Colleges"]
        },
        {
          title: "Scholarship Applications Due",
          date: "January 31, 2025",
          type: "scholarship",
          priority: "urgent",
          description: "Last date for merit-based scholarship applications",
          amount: "₹50,000 - ₹2,00,000"
        }
      ]
    },
    {
      month: 1, // February
      events: [
        {
          title: "Class 12 Board Exams Begin",
          date: "February 15, 2025",
          type: "exam",
          priority: "high",
          description: "JKBOSE Class 12 examinations commence"
        },
        {
          title: "College Counseling Sessions",
          date: "February 20, 2025",
          type: "counseling",
          priority: "medium",
          description: "Career guidance sessions at government colleges"
        }
      ]
    },
    {
      month: 2, // March
      events: [
        {
          title: "JEE Main Registration Closes",
          date: "March 10, 2025",
          type: "exam",
          priority: "urgent",
          description: "Last date for JEE Main registration"
        },
        {
          title: "B.A./B.Sc./B.Com Applications Open",
          date: "March 25, 2025",
          type: "admission",
          priority: "high",
          description: "Undergraduate course applications begin"
        }
      ]
    },
    {
      month: 3, // April
      events: [
        {
          title: "JEE Main Exam",
          date: "April 8-12, 2025",
          type: "exam",
          priority: "high",
          description: "Joint Entrance Examination Main"
        },
        {
          title: "Merit Lists Published",
          date: "April 30, 2025",
          type: "result",
          priority: "medium",
          description: "First merit lists for various courses"
        }
      ]
    },
    {
      month: 4, // May
      events: [
        {
          title: "Board Results Declaration",
          date: "May 15, 2025",
          type: "result",
          priority: "high",
          description: "JKBOSE Class 12 results announced"
        },
        {
          title: "Counseling Begins",
          date: "May 25, 2025",
          type: "counseling",
          priority: "high",
          description: "Document verification and seat allotment"
        }
      ]
    },
    {
      month: 5, // June
      events: [
        {
          title: "Admission Process Begins",
          date: "June 1-15, 2025",
          type: "admission",
          priority: "high",
          description: "Fee payment and final admission confirmations"
        },
        {
          title: "Classes Begin",
          date: "June 20, 2025",
          type: "academic",
          priority: "medium",
          description: "New academic session starts"
        }
      ]
    }
  ];

  const getEventIcon = (type: string) => {
    const icons = {
      admission: CheckCircle,
      exam: Calendar,
      scholarship: Bell,
      result: Info,
      counseling: Clock,
      academic: CheckCircle
    };
    return icons[type as keyof typeof icons] || Info;
  };

  const getEventColor = (priority: string) => {
    const colors = {
      urgent: "from-red-500 to-red-600",
      high: "from-orange-500 to-orange-600",
      medium: "from-blue-500 to-blue-600",
      low: "from-green-500 to-green-600"
    };
    return colors[priority as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === 'urgent') return <AlertTriangle className="h-4 w-4" />;
    if (priority === 'high') return <Bell className="h-4 w-4" />;
    return <Info className="h-4 w-4" />;
  };

  const currentMonthEvents = timelineEvents.find(item => item.month === selectedMonth)?.events || [];

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-kashmir-blue-50 to-mountain-green-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideInUp">
          <h1 className="text-4xl lg:text-5xl font-bold text-kashmir-blue-900 mb-6">
            Academic
            <span className="block bg-gradient-to-r from-saffron-600 to-chinar-orange-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </h1>
          <p className="text-xl text-kashmir-blue-700 max-w-3xl mx-auto">
            Never miss important dates for admissions, exams, scholarships, and application deadlines
          </p>
        </div>

        {/* Month Selector */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8 animate-slideInUp delay-100">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="h-6 w-6 text-saffron-600 mr-3" />
            <h2 className="text-xl font-semibold text-kashmir-blue-900">Select Month</h2>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {months.map((month, index) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(index)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedMonth === index
                    ? 'bg-gradient-to-r from-saffron-500 to-chinar-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-kashmir-blue-700 hover:bg-saffron-50 hover:text-saffron-600'
                }`}
              >
                {month.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        {/* Events for Selected Month */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-kashmir-blue-900 mb-6 animate-slideInUp delay-200">
            {months[selectedMonth]} 2025 Events
          </h3>

          {currentMonthEvents.length > 0 ? (
            <div className="space-y-6">
              {currentMonthEvents.map((event, index) => {
                const EventIcon = getEventIcon(event.type);
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slideInUp"
                    style={{ animationDelay: `${index * 100 + 300}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Event Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-br ${getEventColor(event.priority)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <EventIcon className="h-6 w-6 text-white" />
                      </div>

                      {/* Event Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xl font-bold text-kashmir-blue-900">{event.title}</h4>
                          <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${
                            event.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                            event.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                            event.priority === 'medium' ? 'bg-blue-100 text-blue-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {getPriorityIcon(event.priority)}
                            <span className="capitalize">{event.priority}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 mb-3">
                          <Clock className="h-4 w-4 text-kashmir-blue-600" />
                          <span className="text-sm font-medium text-kashmir-blue-600">{event.date}</span>
                        </div>

                        <p className="text-kashmir-blue-700 mb-4">{event.description}</p>

                        {/* Additional Info */}
                        {(event as any).colleges && (
                          <div className="mb-3">
                            <h5 className="text-sm font-semibold text-kashmir-blue-800 mb-2">Participating Colleges:</h5>
                            <div className="flex flex-wrap gap-2">
                              {(event as any).colleges.map((college: string, idx: number) => (
                                <span key={idx} className="px-3 py-1 bg-mountain-green-100 text-mountain-green-700 text-sm rounded-full">
                                  {college}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {(event as any).amount && (
                          <div className="flex items-center space-x-2 p-3 bg-saffron-50 rounded-lg">
                            <span className="text-sm font-medium text-saffron-700">Amount:</span>
                            <span className="font-bold text-saffron-700">{(event as any).amount}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 animate-slideInUp delay-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-kashmir-blue-900 mb-2">No events scheduled</h3>
              <p className="text-kashmir-blue-600">Check other months for upcoming important dates</p>
            </div>
          )}
        </div>

        {/* Notification Settings */}
        <div className="mt-12 bg-gradient-to-r from-saffron-500 to-chinar-orange-500 rounded-2xl p-8 text-white animate-slideInUp delay-400">
          <div className="text-center">
            <Bell className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Never Miss Important Dates</h3>
            <p className="mb-6 opacity-90">Get personalized notifications for events relevant to your academic journey</p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-saffron-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg">
              <Bell className="h-5 w-5 mr-2" />
              Enable Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;