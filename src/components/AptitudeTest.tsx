import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Circle, Brain, Star, Target } from 'lucide-react';

interface AptitudeTestProps {
  onComplete: (results: any) => void;
}

const AptitudeTest: React.FC<AptitudeTestProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "I enjoy solving complex mathematical problems",
      category: "analytical"
    },
    {
      question: "I like working with my hands and creating things",
      category: "practical"
    },
    {
      question: "I prefer working in teams rather than alone",
      category: "social"
    },
    {
      question: "I enjoy reading and writing stories",
      category: "creative"
    },
    {
      question: "I'm interested in understanding how things work",
      category: "investigative"
    },
    {
      question: "I like helping people solve their problems",
      category: "social"
    },
    {
      question: "I enjoy public speaking and presentations",
      category: "enterprising"
    },
    {
      question: "I prefer following detailed instructions",
      category: "conventional"
    },
    {
      question: "I like experimenting and trying new approaches",
      category: "investigative"
    },
    {
      question: "I enjoy organizing events and activities",
      category: "enterprising"
    },
    {
      question: "I'm interested in art, music, or design",
      category: "creative"
    },
    {
      question: "I like working with numbers and data",
      category: "analytical"
    },
    {
      question: "I enjoy outdoor activities and nature",
      category: "realistic"
    },
    {
      question: "I prefer jobs with clear structure and routine",
      category: "conventional"
    },
    {
      question: "I like teaching and mentoring others",
      category: "social"
    }
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        calculateResults();
      }, 500);
    }
  };

  const calculateResults = () => {
    const categories = {
      analytical: [],
      practical: [],
      social: [],
      creative: [],
      investigative: [],
      enterprising: [],
      conventional: [],
      realistic: []
    };

    questions.forEach((q, index) => {
      if (!categories[q.category as keyof typeof categories]) {
        categories[q.category as keyof typeof categories] = [];
      }
      categories[q.category as keyof typeof categories].push(answers[index] || 0);
    });

    const scores = Object.entries(categories).map(([category, values]) => ({
      category,
      score: values.reduce((sum, val) => sum + val, 0) / values.length
    }));

    scores.sort((a, b) => b.score - a.score);
    setShowResults(true);
    onComplete(scores);
  };

  const getRecommendations = () => {
    return [
      {
        stream: "Science (PCM)",
        courses: ["B.Tech/B.E.", "B.Sc. Physics/Mathematics", "BCA"],
        careers: ["Software Engineer", "Data Scientist", "Research Scientist"],
        match: "95%",
        color: "from-blue-500 to-blue-600"
      },
      {
        stream: "Science (PCB)",
        courses: ["MBBS", "B.Sc. Biology", "Nursing"],
        careers: ["Doctor", "Biotechnologist", "Medical Researcher"],
        match: "87%",
        color: "from-green-500 to-green-600"
      },
      {
        stream: "Commerce",
        courses: ["B.Com", "BBA", "CA Foundation"],
        careers: ["Chartered Accountant", "Business Analyst", "Finance Manager"],
        match: "78%",
        color: "from-orange-500 to-orange-600"
      }
    ];
  };

  if (showResults) {
    return (
      <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-kashmir-blue-50 to-mountain-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slideInUp">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-kashmir-blue-900 mb-4">Assessment Complete!</h1>
            <p className="text-xl text-kashmir-blue-700">Here are your personalized recommendations</p>
          </div>

          <div className="grid gap-6">
            {getRecommendations().map((rec, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-slideInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${rec.color} rounded-xl flex items-center justify-center`}>
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-kashmir-blue-900">{rec.stream}</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-saffron-500 fill-current" />
                        <span className="text-saffron-600 font-semibold">{rec.match} Match</span>
                      </div>
                    </div>
                  </div>
                  <div className={`px-4 py-2 bg-gradient-to-r ${rec.color} text-white rounded-full font-semibold`}>
                    Recommended
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-kashmir-blue-800 mb-3">Suggested Courses</h4>
                    <ul className="space-y-2">
                      {rec.courses.map((course, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-saffron-500 rounded-full"></div>
                          <span className="text-kashmir-blue-700">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-kashmir-blue-800 mb-3">Career Opportunities</h4>
                    <ul className="space-y-2">
                      {rec.careers.map((career, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-mountain-green-500 rounded-full"></div>
                          <span className="text-kashmir-blue-700">{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-saffron-500 to-chinar-orange-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Explore Colleges for These Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-purple-50 to-kashmir-blue-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slideInUp">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-kashmir-blue-900 mb-4">Aptitude Assessment</h1>
          <p className="text-xl text-kashmir-blue-700">Discover your interests and find the perfect career path</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-kashmir-blue-700">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-kashmir-blue-700">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 animate-scaleIn">
          <h2 className="text-2xl font-semibold text-kashmir-blue-900 mb-8 text-center leading-relaxed">
            {questions[currentQuestion]?.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-4">
            {[
              { value: 5, label: "Strongly Agree", color: "from-green-500 to-green-600" },
              { value: 4, label: "Agree", color: "from-green-400 to-green-500" },
              { value: 3, label: "Neutral", color: "from-gray-400 to-gray-500" },
              { value: 2, label: "Disagree", color: "from-orange-400 to-orange-500" },
              { value: 1, label: "Strongly Disagree", color: "from-red-400 to-red-500" }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between group hover:scale-102 ${
                  answers[currentQuestion] === option.value
                    ? `bg-gradient-to-r ${option.color} text-white border-transparent shadow-lg`
                    : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-md'
                }`}
              >
                <span className={`font-medium ${
                  answers[currentQuestion] === option.value ? 'text-white' : 'text-kashmir-blue-800'
                }`}>
                  {option.label}
                </span>
                {answers[currentQuestion] === option.value ? (
                  <CheckCircle className="h-6 w-6 text-white" />
                ) : (
                  <Circle className="h-6 w-6 text-gray-400 group-hover:text-purple-400" />
                )}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border-2 border-gray-200 text-kashmir-blue-700 hover:border-purple-300'
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => {
                if (answers[currentQuestion]) {
                  if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                  } else {
                    calculateResults();
                  }
                }
              }}
              disabled={!answers[currentQuestion]}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                !answers[currentQuestion]
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
              }`}
            >
              <span>{currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AptitudeTest;