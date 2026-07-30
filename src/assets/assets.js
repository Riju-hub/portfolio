import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaChartBar, FaBrain, FaChartLine } from 'react-icons/fa';

import profileImg from '../assets/bhabasindhu_image.png';
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
    color: 'text-purple'
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
    code: "https://github.com/Riju-hub/StayNova",
  },
  {
    title: "Zerodha - Stock Trading Platform",
    description: "A stock trading platform for managing portfolios, tracking market data, and executing trades.",
    image: stock_trading,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    demo: "https://zerodha-frontend-sable.vercel.app/",
    code: "https://github.com/Riju-hub/Zerodha",
  },
  {
    title: "Meetify - Real Time Video Calling Platform",
    description: "A real-time video calling application with group meetings, screen sharing, and chat functionality.",
    image: video_call,
    tech: ["Socket.io","React", "Node.js", "Express.js", "MongoDB"],
    demo: "https://meetify-frontend-48uw.onrender.com",
    code: "https://github.com/Riju-hub/Meetify",
  },
  {
    title: "Personal Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with a clean and modern design.",
    image: portfolio,
    tech: ["React", "Tailwind CSS", "Framer Motion","EmailJS"],
    demo: "https://portfolio-kohl-one-v7sfueoexw.vercel.app/",
    code: "https://github.com/Riju-hub/portfolio",
  },
  
  {
    title: "Credify - CreditWise Loan System",
    description: "A machine learning system that predicts loan approval eligibility based on applicant data.",
    image: credit,
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Supervised Learning"],
    demo: null,
    code: null,
  },
  
  {
    title: "SmartCart - E-Commerce Customer Segmentation System",
    description: "An machine learning system that segments customers based on purchasing behavior for targeted marketing.",
    image: customer,
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Unsupervised Learning"],
    demo: null,
    code: null,
  }
];

export const workData = [
  {
    role: "Web Development Intern",
    company: "Zaalima Development Pvt. Ltd.",
    workType: "Remote",
    duration: "July 2025 - Oct 2025",
    description:
      "Engineered full-stack solutions and contributed to core client applications using React, Node.js, Express, and MongoDB. Key contributions included:",
    highlights: [
      "Built and deployed \"NovaCommerce\" — a SaaS \"Multi-Tenant E-Commerce Platform** engineered with **MERN Stack\" (React, Redux Toolkit, Node.js, Express, MongoDB) for isolated vendor environments.",
      "Engineered \"Role-Based Access Control (RBAC)\" securing 3 distinct user interfaces: \"Customer Storefront\", \"Vendor Management Dashboard\", and \"Super Admin Control Center\" using \"JWT\" and \"Bcrypt.js\".",
      "Designed the \"Customer Portal\" featuring dynamic storefront browsing, global state management via \"Redux Toolkit\", secure checkout powered by \"Stripe API\", and automated transaction emails via \"Nodemailer\".",
      "Developed the \"Vendor Dashboard\" for localized store configuration, \"Cloudinary-backed\" product media handling, and real-time inventory, pricing, and variant CRUD management.",
      "Architected the \"Super Admin Panel\" with centralized analytics dashboards for tracking system-wide revenue, order volume metrics, and multi-tenant operational oversight.",
      "Optimized production infrastructure with \"MongoDB query indexing\", \"Helmet.js\" security policies, and deployed frontend/backend environments on \"Vercel\" and \"Render\"."
    ],
    github: "https://github.com/Riju-hub/NovaCommerce",
    liveDemo: "https://nova-commerce-three.vercel.app/",
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

export const ProjectDetails = [
  {
    id: "staynova",
    title: "StayNova — Hotel Discovery Platform",
    period: "Oct 2025 - Dec 2025",
    description: "A full-stack hotel catalog platform featuring dynamic listings, review workflows, and cloud asset management.",
    image: hotel_image,
    tech: ["Node.js", "Express.js", "MongoDB Atlas", "EJS", "Cloudinary", "Tailwind CSS"],
    demo: "https://delta-project-j8uf.onrender.com",
    code: "https://github.com/Riju-hub/StayNova",
    overview: "StayNova is a production-ready hotel catalog engineered with strict MVC architecture. It allows property owners to manage listings via full CRUD workflows while giving users an interactive platform to search properties, write reviews, and explore locations.",
    keyFeatures: [
      "Full-stack CRUD workflows for listing management and user reviews",
      "Session-based authentication with role-based access control (RBAC)",
      "Cloudinary API integration for asynchronous multi-image uploading and optimization",
      "MVC architecture with Express routing and MongoDB Atlas integration"
    ],
    architecture: "Built on a modular Node.js/Express backend using the Model-View-Controller pattern, rendering dynamic views via EJS and persistent data management through MongoDB Atlas."
  },
  {
  id: "zerodha-clone",
  title: "Zerodha — Stock Trading Platform",
  period: "Jan 2026 – Mar 2026",
  description: "A full-stack financial trading dashboard featuring interactive portfolio analytics, order-book execution, and stock visualization.",
  image: stock_trading,
  tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "Material UI", "JWT"],
  demo: "https://zerodha-frontend-sable.vercel.app/",
  code: "https://github.com/Riju-hub/Zerodha",
  overview: "A trading dashboard engineered to simulate real-time stock tracking, portfolio management, buy/sell trade executions, and position analytics with low-latency API integration.",
  keyFeatures: [
    "Interactive holdings and real-time portfolio tracking dashboard",
    "Simulated Market and Limit order execution with automated balance validation",
    "Secure JWT-based user authentication and route protection",
    "Financial data visualizations built with Material UI and Tailwind CSS"
  ],
  architecture: "Architected on the MERN stack using a RESTful backend API layer to process order transactions and MongoDB Atlas to manage user balances and holdings state."
},
  {
  id: "meetify",
  title: "Meetify — Real-Time Video Platform",
  period: "Mar 2026 – Apr 2026",
  description: "A low-latency WebRTC video conferencing application featuring peer-to-peer streaming, screen sharing, and real-time chat.",
  image: video_call,
  tech: ["React.js", "WebRTC", "Socket.io", "Node.js", "Express.js", "MongoDB Atlas"],
  demo: "https://meetify-frontend-48uw.onrender.com",
  code: "https://github.com/Riju-hub/Meetify",
  overview: "Meetify is a real-time communications application engineered for high-performance video meetings. It combines WebRTC peer-to-peer data channels with a custom Socket.io signaling server to deliver ultra-low latency video, screen sharing, and in-room messaging.",
  keyFeatures: [
    "Peer-to-peer low-latency video and audio streaming via WebRTC",
    "Bi-directional WebSocket signaling server built with Socket.io",
    "In-call controls for audio/video toggling and native screen sharing",
    "Optimized React state architecture maintaining a smooth 60 FPS during active streams"
  ],
  architecture: "Node.js acts as the WebRTC signaling gateway over Socket.io websockets to coordinate peer discovery and ICE candidate exchange, while media streams route directly peer-to-peer."
},
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with a clean and modern design.",
    image: portfolio,
    tech: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    demo: "https://portfolio-kohl-one-v7sfueoexw.vercel.app/",
    code: "https://github.com/Riju-hub/portfolio",
    overview: "Modern, high-performance web portfolio featuring responsive animations, project breakdowns, and direct contact integration.",
    keyFeatures: [
      "Smooth Framer Motion entrance animations and scroll triggers",
      "Fully responsive layout built with Tailwind CSS",
      "Direct email dispatch using EmailJS integration",
      "Dynamic project details routing"
    ],
    architecture: "React SPA deployed on Vercel utilizing Tailwind CSS for styling and Framer Motion for UI micro-interactions."
  },
  {
    id: "credify",
    title: "Credify - CreditWise Loan System",
    description: "A machine learning system that predicts loan approval eligibility based on applicant data.",
    image: credit,
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Supervised Learning"],
    demo: null,
    code: null,
    overview: "A supervised machine learning classification model trained on credit evaluation datasets to automate risk analysis and loan eligibility predictions.",
    keyFeatures: [
      "Feature engineering and missing data imputation pipelines",
      "Exploratory Data Analysis (EDA) evaluating credit score impact",
      "Supervised classification modeling (Logistic Regression / Random Forest)",
      "Model metric evaluation (Precision, Recall, ROC-AUC)"
    ],
    architecture: "Data processing and ML model training engineered in Python using Pandas, NumPy, and Scikit-learn."
  },
  {
    id: "smartcart",
    title: "SmartCart - E-Commerce Customer Segmentation System",
    description: "An machine learning system that segments customers based on purchasing behavior for targeted marketing.",
    image: customer,
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Unsupervised Learning"],
    demo: null,
    code: null,
    overview: "An unsupervised ML clustering solution built to analyze customer purchase history and group users into actionable marketing segments.",
    keyFeatures: [
      "K-Means clustering algorithm implementation",
      "Recency, Frequency, Monetary (RFM) feature extraction",
      "Elbow Method & Silhouette Score model validation",
      "Data visualization for customer cohort behavior"
    ],
    architecture: "Python analytics pipeline leveraging Scikit-learn for clustering and Seaborn/Matplotlib for cohort visualizations."
  }
];
