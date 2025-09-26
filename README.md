# 🎓 Smart Career Guidance Platform - Jammu & Kashmir

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://smart-career-guidanc-k2ol.bolt.host)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**A comprehensive One-Stop Personalized Career & Education Advisor platform specifically designed for the Government of Jammu & Kashmir's Smart India Hackathon initiative.**

🌐 **[Visit Live Demo](https://smart-career-guidanc-k2ol.bolt.host)**

</div>

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

This platform addresses the critical need for personalized career guidance and educational counseling in Jammu & Kashmir. Built with modern web technologies, it offers beautiful animations, robust functionality, and accessibility for all users. The platform serves as a comprehensive solution for students, educators, and career counselors to make informed decisions about educational and career paths.

### 🏆 Smart India Hackathon Initiative

Specifically developed to tackle the challenges outlined in the Government of Jammu & Kashmir's Smart India Hackathon problem statement, focusing on:
- Personalized career guidance
- Educational pathway mapping
- Government college directory
- Data-driven insights
- Accessible user interface

## ✨ Features

### 🧠 **Intelligent Assessment**
- **Comprehensive Aptitude Test**: Multi-dimensional assessment covering logical reasoning, verbal ability, quantitative aptitude, and spatial intelligence
- **Personality Profiling**: Understanding individual strengths and preferences
- **Skill Gap Analysis**: Identifying areas for improvement

### 🗺️ **Career Mapping**
- **Personalized Career Paths**: AI-driven recommendations based on assessment results
- **Industry Insights**: Current market trends and job opportunities
- **Salary Projections**: Expected earnings across different career paths
- **Growth Trajectories**: Long-term career advancement possibilities

### 🏫 **Educational Resources**
- **Government College Directory**: Comprehensive database of educational institutions in J&K
- **Course Information**: Detailed curriculum and admission requirements
- **Scholarship Opportunities**: Financial aid and scholarship programs
- **Admission Timeline**: Important dates and deadlines

### 📊 **Analytics & Insights**
- **Educational Trends**: Enrollment patterns and popular courses
- **Employment Statistics**: Job placement rates and industry demands
- **District-wise Analysis**: Regional educational and employment data
- **Performance Metrics**: Success rates and outcome tracking

### 👤 **Personalized Dashboard**
- **Progress Tracking**: Monitor application status and milestones
- **Recommendations**: Tailored suggestions based on profile
- **Notifications**: Important updates and deadlines
- **Document Management**: Store and manage application documents

### 🎨 **User Experience**
- **Beautiful Animations**: Smooth transitions and engaging interactions
- **Responsive Design**: Optimized for all device types
- **Accessibility**: WCAG compliant for inclusive access
- **Regional Theming**: Colors inspired by Kashmir's natural beauty

## 🌐 Live Demo

**🔗 [https://smart-career-guidanc-k2ol.bolt.host](https://smart-career-guidanc-k2ol.bolt.host)**

Experience the full functionality of the platform with our live demo. The application showcases all features including the aptitude test, career mapping, college directory, and analytics dashboard.

### Key Platform Features Demonstrated:
- **🎨 Beautiful UI/UX**: Kashmir-inspired color palette with smooth animations
- **📱 Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices  
- **🏛️ Government Integration**: Official J&K government branding and portal links
- **📊 Data-Driven Insights**: Real-time statistics and analytics dashboard
- **🎯 Personalized Experience**: Tailored recommendations based on user profiles
- **🔍 Advanced Search**: Smart filtering and search capabilities across all features

## 📸 Screenshots

### Home Page - Hero Section
Beautiful landing page with government initiative branding, call-to-action buttons, and key statistics.

![Home Page](https://github.com/user-attachments/assets/aa81ad70-7cf2-4aa8-baaa-04b11b4173c3)

### Aptitude Assessment
Interactive 15-question aptitude test with progress tracking and modern UI design.

![Aptitude Test](https://github.com/user-attachments/assets/46b09a25-8f30-48e5-b6bb-c6585730cbed)

### Government College Directory
Comprehensive searchable database of government colleges with advanced filtering options by district and stream.

![College Directory](https://github.com/user-attachments/assets/608513a0-3055-4afe-82ea-716036d4e289)

### Career Path Visualization
Interactive career mapping showing degree-to-profession progressions with salary insights and market demand analysis.

![Career Paths](https://github.com/user-attachments/assets/5017c99f-17ef-43e1-bebd-2714a68f9542)

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with Hooks and functional components
- **TypeScript 5.5.3** - Type-safe development
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React** - Beautiful and consistent icons

### Development Tools
- **Vite 5.4.2** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixing

### Design System
- **Custom Color Palette** - Inspired by Jammu & Kashmir's natural beauty
  - Saffron: Traditional spice color variations
  - Kashmir Blue: Mountain sky and lakes
  - Mountain Green: Valley and forest tones
  - Chinar Orange: Autumn leaf colors

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18.0.0 or higher)
- **npm** or **yarn** package manager
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aastha7078/Career-Education-Advisor.git
   cd Career-Education-Advisor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Career-Education-Advisor/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Analytics.tsx     # Data visualization and insights
│   │   ├── AptitudeTest.tsx  # Assessment questionnaire
│   │   ├── CareerMapping.tsx # Career path recommendations
│   │   ├── CollegeDirectory.tsx # Educational institutions
│   │   ├── Dashboard.tsx     # User personalized dashboard
│   │   ├── Features.tsx      # Platform feature showcase
│   │   ├── Footer.tsx        # Site footer with links
│   │   ├── Header.tsx        # Navigation and user menu
│   │   ├── Hero.tsx          # Landing page hero section
│   │   ├── LoadingScreen.tsx # Application loading state
│   │   └── Timeline.tsx      # Educational timeline
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles
│   └── vite-env.d.ts      # Vite type definitions
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🧩 Components Overview

### Core Components

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| **Analytics** | Data visualization | Enrollment trends, career outcomes, district analysis |
| **AptitudeTest** | Assessment system | Multi-section testing, scoring, recommendations |
| **CareerMapping** | Career guidance | Personalized paths, industry insights, skill matching |
| **CollegeDirectory** | Educational database | Government colleges, courses, admission info |
| **Dashboard** | User interface | Progress tracking, recommendations, notifications |

### Layout Components

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| **Header** | Navigation | User authentication, section navigation, responsive menu |
| **Hero** | Landing page | Call-to-action, feature highlights, statistics |
| **Features** | Platform overview | Feature cards, animations, user benefits |
| **Footer** | Site information | Quick links, government portals, contact info |

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

### Code Style

The project follows:
- **TypeScript** for type safety
- **ESLint** for code quality
- **Tailwind CSS** for consistent styling
- **Component-based architecture** for maintainability

### Customization

#### Colors
Modify the color palette in `tailwind.config.js`:
```javascript
colors: {
  'saffron': { /* Saffron variations */ },
  'kashmir-blue': { /* Blue variations */ },
  'mountain-green': { /* Green variations */ },
  'chinar-orange': { /* Orange variations */ }
}
```

#### Animations
Custom animations are defined in the Tailwind config and can be extended for additional effects.

## 🤝 Contributing

We welcome contributions to improve the platform! Here's how you can help:

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Update documentation for significant changes
- Test your changes thoroughly
- Ensure responsive design compatibility

### Areas for Contribution

- 🐛 Bug fixes and improvements
- ✨ New features and enhancements
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- 🧪 Test coverage expansion
- 🌐 Accessibility improvements

## 📄 License

This project is developed for the Government of Jammu & Kashmir's Smart India Hackathon initiative. Please respect the intended use and attribution requirements.

---

<div align="center">

**Built with ❤️ for the students and educators of Jammu & Kashmir**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://smart-career-guidanc-k2ol.bolt.host)

*Empowering careers, enabling futures*

</div>
