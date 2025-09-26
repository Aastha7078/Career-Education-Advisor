import React, { useState } from 'react';
import { Search, MapPin, Star, Users, BookOpen, Wifi, Home, ChevronRight, Filter } from 'lucide-react';

const CollegeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedStream, setSelectedStream] = useState('all');

  const districts = [
    'Srinagar', 'Jammu', 'Baramulla', 'Kupwara', 'Bandipora', 'Ganderbal',
    'Budgam', 'Anantnag', 'Kulgam', 'Pulwama', 'Shopian', 'Doda', 'Kishtwar',
    'Ramban', 'Reasi', 'Udhampur', 'Kathua', 'Samba', 'Rajouri', 'Poonch'
  ];

  const streams = ['Science', 'Commerce', 'Arts', 'Engineering', 'Medical'];

  const colleges = [
    {
      id: 1,
      name: "Government Degree College Srinagar",
      location: "Srinagar",
      district: "Srinagar",
      rating: 4.2,
      students: 2500,
      courses: ["B.A.", "B.Sc.", "B.Com", "M.A.", "M.Sc."],
      streams: ["Science", "Arts", "Commerce"],
      facilities: ["Library", "Computer Lab", "Hostel", "WiFi", "Sports"],
      cutoff: "65%",
      fees: "₹15,000/year",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Government College for Women",
      location: "M.A. Road, Srinagar",
      district: "Srinagar",
      rating: 4.0,
      students: 1800,
      courses: ["B.A.", "B.Sc.", "B.Com", "BBA"],
      streams: ["Science", "Arts", "Commerce"],
      facilities: ["Library", "Computer Lab", "Cafeteria", "WiFi"],
      cutoff: "60%",
      fees: "₹12,000/year",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Government Degree College Jammu",
      location: "Jammu",
      district: "Jammu",
      rating: 4.3,
      students: 3200,
      courses: ["B.A.", "B.Sc.", "B.Com", "BCA", "M.A."],
      streams: ["Science", "Arts", "Commerce"],
      facilities: ["Library", "Computer Lab", "Hostel", "WiFi", "Sports", "Auditorium"],
      cutoff: "70%",
      fees: "₹18,000/year",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Government Degree College Baramulla",
      location: "Baramulla",
      district: "Baramulla",
      rating: 3.8,
      students: 1500,
      courses: ["B.A.", "B.Sc.", "B.Com"],
      streams: ["Science", "Arts", "Commerce"],
      facilities: ["Library", "Computer Lab", "Sports"],
      cutoff: "55%",
      fees: "₹10,000/year",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Islamic University of Science & Technology",
      location: "Awantipora",
      district: "Pulwama",
      rating: 4.5,
      students: 4000,
      courses: ["B.Tech", "MBA", "B.Sc.", "M.Tech"],
      streams: ["Engineering", "Science", "Commerce"],
      facilities: ["Library", "Computer Lab", "Hostel", "WiFi", "Sports", "Research Labs"],
      cutoff: "80%",
      fees: "₹45,000/year",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    }
  ];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = selectedDistrict === 'all' || college.district === selectedDistrict;
    const matchesStream = selectedStream === 'all' || college.streams.includes(selectedStream);
    
    return matchesSearch && matchesDistrict && matchesStream;
  });

  const FacilityIcon = ({ facility }: { facility: string }) => {
    const icons = {
      'Library': BookOpen,
      'Computer Lab': Users,
      'Hostel': Home,
      'WiFi': Wifi,
      'Sports': Users,
      'Cafeteria': Users,
      'Auditorium': Users,
      'Research Labs': BookOpen
    };
    const IconComponent = icons[facility as keyof typeof icons] || Users;
    return <IconComponent className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-kashmir-blue-50 to-mountain-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideInUp">
          <h1 className="text-4xl lg:text-5xl font-bold text-kashmir-blue-900 mb-6">
            Government College
            <span className="block bg-gradient-to-r from-saffron-600 to-chinar-orange-500 bg-clip-text text-transparent">
              Directory
            </span>
          </h1>
          <p className="text-xl text-kashmir-blue-700 max-w-3xl mx-auto">
            Find the perfect government college in Jammu & Kashmir with detailed information about courses, facilities, and admission requirements
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8 animate-slideInUp delay-100">
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="h-5 w-5 text-kashmir-blue-700" />
            <h3 className="text-lg font-semibold text-kashmir-blue-900">Filter Colleges</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search colleges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
              />
            </div>

            {/* District Filter */}
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
            >
              <option value="all">All Districts</option>
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>

            {/* Stream Filter */}
            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
            >
              <option value="all">All Streams</option>
              {streams.map(stream => (
                <option key={stream} value={stream}>{stream}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 animate-slideInUp delay-200">
          <p className="text-kashmir-blue-700">
            Found <span className="font-semibold text-saffron-600">{filteredColleges.length}</span> colleges
          </p>
        </div>

        {/* College Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredColleges.map((college, index) => (
            <div 
              key={college.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* College Image */}
              <div className="h-48 bg-gradient-to-br from-kashmir-blue-400 to-mountain-green-400 relative overflow-hidden">
                <img 
                  src={college.image} 
                  alt={college.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-saffron-500 fill-current" />
                  <span className="text-sm font-semibold">{college.rating}</span>
                </div>
              </div>

              {/* College Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-kashmir-blue-900 mb-2">{college.name}</h3>
                  <div className="flex items-center space-x-2 text-kashmir-blue-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{college.location}</span>
                  </div>
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-gradient-to-br from-saffron-50 to-chinar-orange-50 rounded-lg">
                    <Users className="h-5 w-5 text-saffron-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-kashmir-blue-900">{college.students}</div>
                    <div className="text-xs text-kashmir-blue-600">Students</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-mountain-green-50 to-mountain-green-100 rounded-lg">
                    <BookOpen className="h-5 w-5 text-mountain-green-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-kashmir-blue-900">{college.cutoff}</div>
                    <div className="text-xs text-kashmir-blue-600">Cut-off</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-kashmir-blue-50 to-kashmir-blue-100 rounded-lg">
                    <span className="text-sm font-semibold text-kashmir-blue-900">{college.fees}</span>
                    <div className="text-xs text-kashmir-blue-600">Annual Fees</div>
                  </div>
                </div>

                {/* Courses */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-kashmir-blue-800 mb-2">Available Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.slice(0, 4).map((course, idx) => (
                      <span key={idx} className="px-3 py-1 bg-saffron-100 text-saffron-700 text-xs font-medium rounded-full">
                        {course}
                      </span>
                    ))}
                    {college.courses.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        +{college.courses.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-kashmir-blue-800 mb-2">Facilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.facilities.slice(0, 4).map((facility, idx) => (
                      <div key={idx} className="flex items-center space-x-1 px-2 py-1 bg-mountain-green-100 text-mountain-green-700 text-xs rounded-full">
                        <FacilityIcon facility={facility} />
                        <span>{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-saffron-500 to-chinar-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-102 transition-all">
                  <span>View Details</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-12 animate-slideInUp">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-kashmir-blue-900 mb-2">No colleges found</h3>
            <p className="text-kashmir-blue-600 mb-6">Try adjusting your search filters</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedDistrict('all');
                setSelectedStream('all');
              }}
              className="px-6 py-3 bg-saffron-500 text-white rounded-xl font-semibold hover:bg-saffron-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeDirectory;