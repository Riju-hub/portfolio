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

// export const workData = [
//   {
//     role: "Web Development Intern",
//     company: "Zaalima Development Pvt. Ltd.",
//     duration: "July 2025 - Oct 2025",
//     description:
//       "Worked on developing and maintaining web applications using React, Node.js, and MongoDB. Collaborated with the team to implement new features and optimize existing code.",
//     color: "purple"
//   }
// ];

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
