import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaChartBar, FaBrain, FaChartLine } from 'react-icons/fa';

import profileImg from '../assets/my_image.jpeg';
import hotel_image from '../assets/hotel_image.webp';
import stock_trading from '../assets/stock_trading.png';
import portfolio from '../assets/portfolio.jpg';
import video_call from '../assets/video_call.avif';
import credit from '../assets/credit.jpg';
import customer from '../assets/customer.webp'

export const assets = {
    profileImg,
}

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Problem Solver',
    description: 'I enjoy solving real-world problems by building practical software and machine learning solutions.',
    color: 'text-yellow'
  },
  {
    icon: FaCode,
    title: 'Full-Stack Developer',
    description: 'Building responsive web applications with the MERN stack and modern development tools.',
    color: 'text-pink'
  },
  {
    icon: FaBrain,
    title: 'AI & ML Enthusiast',
    description: 'Exploring machine learning, deep learning, and data-driven technologies to create intelligent solutions.',
    color: 'text-blue'
  },
  {
    icon: FaChartLine,
    title: 'Data Science',
    description: 'Analyzing data, uncovering insights, and building data-driven solutions using Python and modern analytics tools.',
    color: 'text-green'
  }
];

export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap','Material UI'],
    color: 'text-cyan',
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'REST API','JWT Authentication','Socket.io','MVC Architecture'],
    color: 'text-green',
  },
  {
  title: 'Data Science',
  icon: FaChartBar,
  description: 'Analyzing data, visualizing insights, and building data-driven solutions.',
  tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
  color: 'text-amber',
},
{
  title: 'AI & Machine Learning',
  icon: FaBrain,
  description: 'Building intelligent systems using machine learning and deep learning techniques.',
  tags: [
    'Machine Learning',
    'Deep Learning',
    'PyTorch',
    'Scikit-learn'
  ],
  color: 'text-purple',
},
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL', 'CRUD Operations','Mongoose'],
    color: 'text-yellow',
  },
  {
  title: 'Deployment & Hosting',
  icon: FaCloud,
  description: 'Deploying and hosting full-stack applications on modern cloud platforms.',
  tags: [
    'Render',
    'Git',
    'GitHub',
    'Web Hosting',
    'Environment Variables'
  ],
  color: 'text-pink',
},
];

export const projects = [
  {
    title: "StayNova - Hotel Catalog Platform",
    description: "A full-stack hotel catalog platform featuring hotel listings, search, and responsive design",
    image: hotel_image,
    tech: ["Express.js", "Node.js", "MongoDB", "EJS"],
    demo: "https://delta-project-j8uf.onrender.com",
    code: null,
  },
  {
    title: "Zerodha - Stock Trading Platform",
    description: "A stock trading platform for managing portfolios, tracking market data, and executing trades.",
    image: stock_trading,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    demo: null,
    code: null,
  },
  {
    title: "Meetify - Real Time Video Calling Platform",
    description: "A real-time video calling application with group meetings, screen sharing, and chat functionality.",
    image: video_call,
    tech: ["Socket.io","React", "Node.js", "Express.js", "MongoDB"],
    demo: "https://meetify-frontend-48uw.onrender.com",
    code: null,
  },
  {
    title: "Personal Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with a clean and modern design.",
    image: portfolio,
    tech: ["React", "Tailwind CSS", "Framer Motion","MongoDB"],
    demo: "https://portfolio-kohl-one-v7sfueoexw.vercel.app/",
    code: "https://github.com/Riju-hub/portfolio",
  },
  
  {
    title: "Credify - CreditWise Loan System",
    description: "A machine learning system that predicts loan approval eligibility based on applicant data.",
    image: credit,
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML"],
    demo: null,
    code: null,
  },
  
  {
    title: "SmartCart - E-Commerce Customer Segmentation System",
    description: "An machine learning system that segments customers based on purchasing behavior for targeted marketing.",
    image: customer,
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML"],
    demo: null,
    code: null,
  }
];

export const workData = [
  {
    role: "AI Intern",
    company: "Samsung Inovation Campus",
    duration: "Sep 2025 - Nov 2025",
    description:
      "Completed hands-on training in AI and Machine Learning, working with Python, Pandas, NumPy, and scikit-learn. Built machine learning models, performed data preprocessing, and analyzed datasets through practical projects.",
    color: "purple"
  }
];

export const educationData = [
  {
    degree: "Secondary (10th)",
    institution: "Kaiti N.C High School, Purba Bardhaman",
    duration: "Passing Year: 2021",
    grade: "Marks: 89%"
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Kaiti N.C High School, Purba Bardhaman",
    duration: "Passing Year: 2023",
    grade: "Marks: 75%"
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Brainware University, Kolkata",
    duration: "2023 - 2027",
    grade: "CGPA: 9.16"
  }
];
