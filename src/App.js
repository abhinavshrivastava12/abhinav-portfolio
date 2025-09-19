import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Database, 
  Globe, 
  Cpu, 
  Award, 
  Calendar, 
  ChevronRight, 
  Menu, 
  X, 
  Star, 
  GitBranch, 
  Users, 
  Eye,
  Download,
  Send,
  ArrowUp,
  BookOpen,
  Trophy,
  Target,
  Briefcase
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Rotating titles with smooth animation
  const titles = [
    'Full-Stack Developer',
    'Software Developer', 
    'UI/UX Designer',
    'AI Enthusiast',
    'MERN Stack Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    // Scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = {
    languages: [
      { name: 'Java', level: 85, color: 'from-orange-500 to-red-500' },
      { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' },
      { name: 'Python', level: 70, color: 'from-blue-500 to-green-500' }
    ],
    web: [
      { name: 'React', level: 88, color: 'from-blue-400 to-blue-600' },
      { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
      { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-pink-500' },
      { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-blue-500' },
      { name: 'Express', level: 80, color: 'from-gray-600 to-gray-800' }
    ],
    databases: [
      { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-800' },
      { name: 'MySQL', level: 75, color: 'from-blue-600 to-indigo-600' }
    ],
    tools: [
      { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'GitHub', level: 90, color: 'from-gray-700 to-black' },
      { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-700' },
      { name: 'Postman', level: 85, color: 'from-orange-400 to-red-500' },
      { name: 'Compass', level: 80, color: 'from-green-500 to-green-700' },
      { name: 'Vercel', level: 85, color: 'from-black to-gray-800' },
      { name: 'Netlify', level: 80, color: 'from-teal-500 to-cyan-500' },
      { name: 'Render', level: 75, color: 'from-purple-500 to-pink-500' },
      { name: 'Agora', level: 70, color: 'from-indigo-500 to-purple-500' },
      { name: 'Clerk', level: 75, color: 'from-violet-500 to-purple-600' }
    ]
  };

  const mainProjects = [
    {
      title: 'Global Connect',
      subtitle: 'Professional Networking Platform',
      description: 'A comprehensive LinkedIn-like platform featuring user profiles, job postings, real-time peer-to-peer messaging, and live audio/video calls. Built during my internship with advanced AI integration for enhanced user experience.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Agora SDK', 'Socket.io', 'Clerk'],
      github: 'https://github.com/abhinavshrivastava12/professional-networking-platform',
      demo: '#',
      period: 'Apr 2025 – Jul 2025',
      status: 'Internship Project',
      features: ['User Profiles', 'Job Board', 'Real-time Messaging', 'Video Calls', 'AI Integration', 'Advanced Search'],
      highlights: [
        'Built complete social networking platform',
        'Implemented real-time communication',
        'Integrated AI-powered features',
        'Optimized database queries with indexing'
      ]
    },
    {
      title: 'E-Commerce Platform',
      subtitle: 'Full-Featured Online Store',
      description: 'A complete MERN stack e-commerce application with secure payment integration, comprehensive product catalog, user authentication, and admin dashboard for inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Stripe API', 'Cloudinary'],
      github: 'https://github.com/abhinavshrivastava12/E-commerce-Website',
      demo: '#',
      period: 'Sep 2023 – Feb 2024',
      status: 'Completed',
      features: ['Product Catalog', 'Secure Checkout', 'User Authentication', 'Admin Dashboard', 'Order Management'],
      highlights: [
        'Implemented secure payment processing',
        'Built responsive product catalog',
        'Created admin management system',
        'Optimized for mobile devices'
      ]
    },
    {
      title: 'Helmet Detection System',
      subtitle: 'AI-Powered Safety Solution',
      description: 'An advanced computer vision system using YOLOv8 for real-time helmet detection, achieving 91% accuracy on custom datasets. Features GPU-accelerated training and real-time inference pipeline.',
      tech: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'Google Colab', 'NumPy'],
      github: 'https://github.com/abhinavshrivastava12/Helmet_Detection_System',
      demo: '#',
      period: 'Sep 2024 – Present',
      status: 'In Development',
      features: ['Real-time Detection', 'Custom Dataset', 'High Accuracy', 'GPU Training', 'Video Processing'],
      highlights: [
        'Achieved 91% detection accuracy',
        'Custom dataset preparation',
        'Real-time video processing',
        'GPU-optimized training pipeline'
      ]
    }
  ];

  const additionalProjects = [
    {
      title: 'Customer Feedback Application',
      description: 'A comprehensive feedback management system with analytics dashboard, sentiment analysis, and automated response features for businesses.',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      github: 'https://github.com/abhinavshrivastava12/customer-feedback-application',
      category: 'Web Application'
    },
    {
      title: 'Expense Manager',
      description: 'Personal finance management tool with budget tracking, expense categorization, financial reports, and spending insights.',
      tech: ['React', 'Node.js', 'MongoDB', 'D3.js'],
      github: 'https://github.com/abhinavshrivastava12/expense-manager-website',
      category: 'Finance App'
    },
    {
      title: 'Inventory Management System',
      description: 'Enterprise-level inventory tracking system with stock management, supplier integration, and automated reorder alerts.',
      tech: ['React', 'Node.js', 'MySQL', 'Express'],
      github: 'https://github.com/abhinavshrivastava12/inventory-management-system',
      category: 'Enterprise Software'
    }
  ];

  const certifications = [
    { name: 'Google: Foundations of Cybersecurity', issuer: 'Google', year: '2024', icon: '🔐' },
    { name: 'Microsoft: Intro to VS Code & GitHub Copilot', issuer: 'Microsoft', year: '2024', icon: '💻' },
    { name: 'O\'Level Certificate', issuer: 'NIELIT', year: '2023', icon: '📜' },
    { name: 'CCC Certificate', issuer: 'NIELIT', year: '2023', icon: '🎓' },
    { name: 'LeetCode 200-Days Badge', issuer: 'LeetCode', year: '2024', icon: '🏆' },
    { name: 'CodeChef: Multiple Badges', issuer: 'CodeChef', year: '2024', icon: '👨‍💻' }
  ];

  const experience = {
    company: 'Global Next Consulting',
    role: 'Full-Stack Developer Intern',
    period: 'Apr 2025 – Jul 2025',
    location: 'Remote',
    responsibilities: [
      'Developed Global Connect platform from UI to API layer with comprehensive AI integration',
      'Implemented secure JWT authentication and authorization system',
      'Optimized MongoDB queries using indexing and aggregation pipelines',
      'Built real-time communication features using Socket.io and Agora SDK',
      'Collaborated with cross-functional teams to deliver high-quality features'
    ],
    achievements: [
      'Successfully delivered major networking platform',
      'Improved application performance by 40%',
      'Implemented scalable architecture patterns',
      'Received positive feedback from senior developers'
    ]
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:abhinavshrivastava182@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  const downloadCV = () => {
    window.open('https://drive.google.com/file/d/1XPVmIT8id7gzd_ffV1Z81rG3LewYlDXs/view?usp=drive_link', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abhinav Shrivastava
            </div>
            
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-400 transition-colors relative ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 bg-black/40 backdrop-blur-lg rounded-lg p-4">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Abhinav Shrivastava
              </h1>
              <div className="flex justify-center items-center space-x-4 mb-6">
                <span className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1 max-w-xs"></span>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 px-4">Full-Stack Developer & AI Enthusiast</p>
                <span className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1 max-w-xs"></span>
              </div>
            </div>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate about building scalable applications with MERN stack and exploring AI-driven solutions. 
              Experienced in creating secure, responsive web applications with modern technologies and best practices.
              Currently pursuing B.Tech in Information Technology with hands-on industry experience.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/abhinavshrivastava12" target="_blank" rel="noopener noreferrer" 
                 className="group p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Github size={28} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://linkedin.com/in/abhinav-shrivastava" target="_blank" rel="noopener noreferrer"
                 className="group p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Linkedin size={28} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="mailto:abhinavshrivastava182@gmail.com"
                 className="group p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Mail size={28} className="group-hover:text-blue-400 transition-colors" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/30 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="prose prose-lg">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a passionate Full-Stack Developer with expertise in the MERN stack and Java. I specialize in 
                    creating scalable applications, building secure REST APIs, and implementing robust authentication systems. 
                    My journey in technology is driven by curiosity and a constant desire to learn and innovate.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Currently pursuing my Bachelor's in Information Technology at Dr. Ambedkar Institute of Technology 
                    for Divyangjan, Kanpur. I've gained valuable industry experience through internships and have worked 
                    on diverse projects ranging from e-commerce platforms to AI-powered computer vision systems.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Beyond coding, I'm actively involved in college activities, including leading media teams and 
                    participating in cultural events. I also have a passion for cricket and have represented my school 
                    at district-level tournaments.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors">
                    <MapPin size={20} className="flex-shrink-0" />
                    <span>Jhansi, U.P., India</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors">
                    <Phone size={20} className="flex-shrink-0" />
                    <span>+91-9696400628</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors col-span-2">
                    <Mail size={20} className="flex-shrink-0" />
                    <span>abhinavshrivastava182@gmail.com</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center">
                    <BookOpen className="mr-3" size={24} />
                    Education
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-400 pl-6">
                      <h4 className="text-lg font-semibold text-white">Bachelor of Technology (Information Technology)</h4>
                      <p className="text-gray-300 font-medium">Dr. Ambedkar Institute of Technology for Divyangjan</p>
                      <p className="text-gray-400">2023 – Present • SGPA: 7.65</p>
                      <p className="text-sm text-gray-500 mt-2">Focus: Software Development, Database Systems, AI/ML</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-6">
                      <h4 className="text-lg font-semibold text-white">Diploma (Computer Science and Engineering)</h4>
                      <p className="text-gray-300 font-medium">S R Group of Institutions, Jhansi</p>
                      <p className="text-gray-400">2020 – 2023 • CGPA: 7.3</p>
                      <p className="text-sm text-gray-500 mt-2">Foundation in Programming, Web Development, Databases</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all">
                  <h3 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center">
                    <Trophy className="mr-3" size={24} />
                    Quick Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">3+</div>
                      <div className="text-sm text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">6+</div>
                      <div className="text-sm text-gray-400">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">91%</div>
                      <div className="text-sm text-gray-400">AI Model Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400">200+</div>
                      <div className="text-sm text-gray-400">LeetCode Problems</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all group">
                <Code className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-semibold mb-6 text-white">Languages</h3>
                <div className="space-y-4">
                  {skills.languages.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all group">
                <Globe className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-semibold mb-6 text-white">Web Technologies</h3>
                <div className="space-y-4">
                  {skills.web.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all group">
                <Database className="text-green-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-semibold mb-6 text-white">Databases</h3>
                <div className="space-y-4">
                  {skills.databases.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-green-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-all group">
                <Cpu className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-semibold mb-6 text-white">Tools</h3>
                <div className="space-y-4">
                  {skills.tools.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-yellow-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            {/* Main Projects */}
            <div className="space-y-8 mb-16">
              {mainProjects.map((project, index) => (
                <div key={index} className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all group">
                  <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-blue-400 text-lg mb-2">{project.subtitle}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center"><Calendar size={16} className="mr-1" /> {project.period}</span>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          project.status === 'Completed' ? 'bg-green-400/20 text-green-400' :
                          project.status === 'In Development' ? 'bg-yellow-400/20 text-yellow-400' :
                          'bg-blue-400/20 text-blue-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-3 mt-4 lg:mt-0">
                      {project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all group-hover:scale-110">
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all group-hover:scale-110">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm hover:bg-blue-400/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Star className="mr-2" size={16} />
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Target className="mr-2" size={16} />
                        Highlights
                      </h4>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-gray-300 text-sm flex items-start">
                            <ChevronRight size={14} className="text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Projects */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-purple-400">Additional Projects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalProjects.map((project, index) => (
                  <div key={index} className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{project.title}</h4>
                        <span className="text-xs text-purple-400 bg-purple-400/20 px-2 py-1 rounded">{project.category}</span>
                      </div>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all group-hover:scale-110">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-purple-400/20 text-purple-400 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience & Achievements
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Work Experience */}
              <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all">
                <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
                  <Briefcase className="mr-3" size={24} />
                  Work Experience
                </h3>
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-xl font-semibold text-white">{experience.role}</h4>
                  <p className="text-purple-400 text-lg font-medium">{experience.company}</p>
                  <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                    <span>{experience.period}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((resp, index) => (
                        <li key={index} className="text-gray-300 flex items-start text-sm">
                          <ChevronRight size={16} className="text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-white font-semibold mb-3">Achievements:</h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-300 flex items-start text-sm">
                          <Star size={16} className="text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications & Extracurricular */}
              <div className="space-y-8">
                {/* Certifications */}
                <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all">
                  <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                    <Award className="mr-3" size={24} />
                    Certifications
                  </h3>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start space-x-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <span className="text-2xl">{cert.icon}</span>
                        <div className="flex-1">
                          <h4 className="text-white font-medium">{cert.name}</h4>
                          <div className="flex justify-between items-center">
                            <p className="text-gray-400 text-sm">{cert.issuer}</p>
                            <span className="text-xs text-purple-400 bg-purple-400/20 px-2 py-1 rounded">{cert.year}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extracurricular */}
                <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all">
                  <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                    <Users className="mr-3" size={24} />
                    Extracurricular
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="text-white font-semibold">District-Level Cricket Champion</h4>
                      <p className="text-gray-300 text-sm">Represented school at district tournaments, developed teamwork and leadership skills</p>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-4">
                      <h4 className="text-white font-semibold">SHANKHNAAD Fest (AITD Kanpur)</h4>
                      <p className="text-gray-300 text-sm">Led Media & Photography team, managed coverage and coordination for cultural events</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h4 className="text-white font-semibold">College Event Management</h4>
                      <p className="text-gray-300 text-sm">Volunteered in tech/cultural events providing logistics, compering, and media support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg mb-12 text-center leading-relaxed">
                I'm always open to discussing new opportunities, collaborating on interesting projects, 
                or just having a chat about technology and development. Feel free to reach out!
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                  
                  <a href="mailto:abhinavshrivastava182@gmail.com" className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all group block">
                    <div className="flex items-center space-x-4">
                      <Mail className="text-blue-400 group-hover:scale-110 transition-transform" size={32} />
                      <div>
                        <h3 className="text-white font-semibold">Email</h3>
                        <p className="text-gray-300">abhinavshrivastava182@gmail.com</p>
                      </div>
                    </div>
                  </a>
                  
                  <a href="tel:+919696400628" className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all group block">
                    <div className="flex items-center space-x-4">
                      <Phone className="text-purple-400 group-hover:scale-110 transition-transform" size={32} />
                      <div>
                        <h3 className="text-white font-semibold">Phone</h3>
                        <p className="text-gray-300">+91-9696400628</p>
                      </div>
                    </div>
                  </a>
                  
                  <a href="https://linkedin.com/in/abhinav-shrivastava" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all group block">
                    <div className="flex items-center space-x-4">
                      <Linkedin className="text-green-400 group-hover:scale-110 transition-transform" size={32} />
                      <div>
                        <h3 className="text-white font-semibold">LinkedIn</h3>
                        <p className="text-gray-300">Connect with me professionally</p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Contact Form */}
                <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
                  <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                        rows="5"
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 mt-12">
                <a href="https://github.com/abhinavshrivastava12" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/abhinav-shrivastava" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="https://leetcode.com/abhinavshrivastava" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                  <Code size={24} />
                </a>
                <a href="https://www.codechef.com/users/abhinav_182" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                  <Trophy size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Abhinav Shrivastava. Built with React and Tailwind CSS.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Made with</span>
              <span className="text-red-400">♥</span>
              <span>in India</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Portfolio;