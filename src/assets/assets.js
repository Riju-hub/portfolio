import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaChartBar, FaBrain, FaChartLine } from 'react-icons/fa';

import profileImg from '../assets/bhabasindhu_image.png';
import hotel_image from '../assets/hotel_image.webp';
import stock_trading from '../assets/stock_trading.png';
import portfolio from '../assets/portfolio.png';
import video_call from '../assets/video_call.avif';
import credit from '../assets/credit.jpg';
import customer from '../assets/customer.webp'
import nova_commerce from '../assets/novacommerce.png';
import rankresume_ai from '../assets/rankresume_ai.png';
import resumeiq from '../assets/resumeiq.png';

export const assets = {
    profileImg,
}

export const aboutInfo = [
  {
    id: 'problem-solver',
    icon: FaLightbulb,
    title: 'Problem Solver',
    subtitle: 'Algorithmic & Logical Thinking',
    description: 'Deconstructing complex engineering challenges into clean, scalable software architectures and functional machine learning solutions.',
    color: 'text-amber-400',
    borderColor: 'hover:border-amber-500/40',
    bgGlow: 'group-hover:bg-amber-500/10',
    badge: 'Core Skill'
  },
  {
    id: 'full-stack',
    icon: FaCode,
    title: 'Full-Stack Developer',
    subtitle: 'MERN & Modern Web Ecosystem',
    description: 'Crafting performant web platforms with React, Node.js, Express, and MongoDB with clean component isolation.',
    color: 'text-pink-400',
    borderColor: 'hover:border-pink-500/40',
    bgGlow: 'group-hover:bg-pink-500/10',
    badge: 'Production Ready'
  },
  {
    id: 'ai-ml',
    icon: FaBrain,
    title: 'AI & ML Engineer',
    subtitle: 'Deep Learning & Intelligent Systems',
    description: 'Exploring neural networks, optimization techniques, and intelligent data processing to build smart applications.',
    color: 'text-blue-400',
    borderColor: 'hover:border-purple-500/40',
    bgGlow: 'group-hover:bg-purple-500/10',
    badge: 'Specialization'
  },
  {
    id: 'data-science',
    icon: FaChartLine,
    title: 'Data Analytics',
    subtitle: 'Insights & Mathematical Modeling',
    description: 'Extracting actionable insights, performing exploratory data analysis, and building predictive models using Python tools.',
    color: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/40',
    bgGlow: 'group-hover:bg-emerald-500/10',
    badge: 'Analytics'
  }
];


export const skills = [
  {
    id: 'frontend',
    category: 'web',
    title: 'Frontend Development',
    icon: FaReact,
    badge: 'Core UI',
    level: 'Advanced',
    proficiency: '92%',
    description: 'Building responsive, high-performance user interfaces with modern React paradigms and component systems.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap', 'Material UI'],
    color: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/40',
    bgGlow: 'group-hover:bg-cyan-500/10'
  },
  {
    id: 'backend',
    category: 'web',
    title: 'Backend Engineering',
    icon: FaServer,
    badge: 'Services',
    level: 'Advanced',
    proficiency: '88%',
    description: 'Architecting scalable server-side systems, RESTful APIs, and secure authentication flows.',
    tags: ['Node.js', 'Express', 'REST API', 'JWT Auth', 'Socket.io', 'MVC Architecture'],
    color: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/40',
    bgGlow: 'group-hover:bg-emerald-500/10'
  },
  {
    id: 'ai-ml',
    category: 'ai',
    title: 'AI & Machine Learning',
    icon: FaBrain,
    badge: 'Intelligence',
    level: 'Specialized',
    proficiency: '85%',
    description: 'Engineering intelligent models and neural network architectures for predictive tasks.',
    tags: ['Machine Learning', 'Deep Learning', 'PyTorch', 'Scikit-Learn', 'Neural Networks'],
    color: 'text-blue-400',
    borderColor: 'hover:border-blue-500/40',
    bgGlow: 'group-hover:bg-blue-500/10'
  },
  {
    id: 'data-science',
    category: 'ai',
    title: 'Data Science & Analytics',
    icon: FaChartBar,
    badge: 'Analytics',
    level: 'Proficient',
    proficiency: '86%',
    description: 'Extracting data insights, exploratory analysis, and statistical modeling with Python tools.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Scikit-Learn'],
    color: 'text-amber-400',
    borderColor: 'hover:border-amber-500/40',
    bgGlow: 'group-hover:bg-amber-500/10'
  },
  {
    id: 'database',
    category: 'devops',
    title: 'Database Systems',
    icon: FaDatabase,
    badge: 'Data Layer',
    level: 'Advanced',
    proficiency: '90%',
    description: 'Designing schema models and optimizing database queries for performance and data integrity.',
    tags: ['MongoDB', 'MySQL', 'Mongoose ORM', 'CRUD Operations', 'Query Indexing'],
    color: 'text-pink-400',
    borderColor: 'hover:border-pink-500/40',
    bgGlow: 'group-hover:bg-pink-500/10'
  },
  {
    id: 'deployment',
    category: 'devops',
    title: 'Cloud & Infrastructure',
    icon: FaCloud,
    badge: 'DevOps',
    level: 'Proficient',
    proficiency: '84%',
    description: 'Deploying full-stack applications, managing Git repositories, and configuring cloud environments.',
    tags: ['Render', 'Vercel', 'Git', 'GitHub', 'CI/CD Pipelines', 'Environment Config'],
    color: 'text-indigo-400',
    borderColor: 'hover:border-indigo-500/40',
    bgGlow: 'group-hover:bg-indigo-500/10'
  }
];


export const projects = [
  {
    title: "NovaEcommerce — Multi-Tenant E-Commerce SaaS",
    description: "A cloud-native multi-tenant e-commerce platform offering isolated merchant storefronts, dynamic RBAC, Stripe checkouts, and an analytics suite.",
    image: nova_commerce,
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Stripe", "Cloudinary"],
    demo: "https://nova-commerce-th.vercel.app",
    code: "https://github.com/Riju-hub/NovaCommerce",
  },
  {
    title: "RankResume AI — Candidate Ranking & ATS",
    description: "An AI-powered recruitment platform that extracts resume text and performs semantic candidate match scoring against job descriptions using Google Gemini.",
    image: rankresume_ai,
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Google Gemini", "Supabase", "Tailwind CSS"],
    demo: "https://rankresume.vercel.app/",
    code: "https://github.com/Riju-hub/RankResume-AI",
  },
  {
    title: "ResumeIQ — AI Powered ATS Platform",
    description: "An intelligent resume evaluation system computing semantic ATS match scores, dimensional category breakdowns, and AI feedback via Llama 3.",
    image: resumeiq,
    tech: ["FastAPI", "Python", "Streamlit", "spaCy", "Sentence Transformers", "Groq API", "Supabase"],
    demo: "https://resume-iq-ats-live.streamlit.app/",
    code: "https://github.com/Riju-hub/ResumeIQ",
  },
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
    tech: ["Socket.io", "React", "Node.js", "Express.js", "MongoDB"],
    demo: "https://meetify-frontend-48uw.onrender.com",
    code: "https://github.com/Riju-hub/Meetify",
  },
  {
    title: "Personal Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with a clean and modern design.",
    image: portfolio,
    tech: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    demo: "https://bhabasindhudas.vercel.app/",
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

// src/assets/assets.js

export const workData = [
  {
    companyId: "maincrafts",
    company: "Maincrafts Technology",
    role: "AI & ML Intern",
    workType: "Remote",
    duration: "Oct 2026 - Present",
    certificate: {
      type: "offer_letter",
      title: "Offer Letter",
      image: "/maincrafts_offer_letter.jpeg" // saved in public/
    },
    description:
      "Developing predictive machine learning pipelines and engineering Generative AI applications leveraging Retrieval-Augmented Generation (RAG) and high-performance API backends.",
    projects: [
      {
        id: "genai-rag-app",
        title: "Generative AI Knowledge Engine",
        tagline: "RAG-Powered LLM Assistant with FastAPI",
        highlights: [
          "Architected an enterprise **Generative AI application** utilizing **Retrieval-Augmented Generation (RAG)** to provide grounded, domain-specific contextual responses.",
          "Integrated the **Google Gemini API** for semantic comprehension, document question-answering, and contextual prompt orchestration.",
          "Engineered high-performance, asynchronous REST API endpoints using **FastAPI** to handle real-time vector queries, context retrieval, and response streaming.",
          "Built text chunking and embedding pipelines to ingest unstructured data and retrieve relevant knowledge chunks with low latency."
        ],
        techStack: ["Python", "FastAPI", "Google Gemini API", "RAG", "Vector Search", "LLMs"],
        github: null,
        liveDemo: null
      },
      {
        id: "house-price-prediction",
        title: "House Price Valuation Engine",
        tagline: "Supervised Regression & Feature Engineering Pipeline",
        highlights: [
          "Developed an end-to-end predictive machine learning model to estimate residential property valuations using **Scikit-learn**, **Pandas**, and **NumPy**.",
          "Implemented comprehensive data preprocessing pipelines, including missing value imputation, categorical encoding, and feature scaling.",
          "Trained and tuned **Linear Regression** and supervised machine learning baseline models to minimize Mean Squared Error (MSE) and maximize $R^2$ scores.",
          "Conducted Exploratory Data Analysis (EDA) and correlation matrix profiling to detect multicollinearity and extract key predictive features."
        ],
        techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Supervised Learning", "Linear Regression"],
        github: null,
        liveDemo: null
      }
    ]
  },
  {
    companyId: "zaalima",
    company: "Zaalima Development Pvt. Ltd.",
    role: "Web Development Intern",
    workType: "Remote",
    duration: "July 2026 - Oct 2026",
    certificate: {
      type: "completion",
      title: "Completion Certificate",
      image: "/zaalima_internship.jpeg" // saved in public/
    },
    description:
      "Engineered full-stack solutions and contributed to core client applications using React, Node.js, Express, MongoDB, and integrated AI services.",
    projects: [
      {
        id: "novacommerce",
        title: "NovaCommerce",
        tagline: "SaaS Multi-Tenant E-Commerce Platform",
        highlights: [
          "Built and deployed **NovaCommerce** — a SaaS **Multi-Tenant E-Commerce Platform** engineered with the **MERN Stack** (React, Redux Toolkit, Node.js, Express, MongoDB) for isolated vendor environments.",
          "Engineered **Role-Based Access Control (RBAC)** securing 3 distinct user interfaces: **Customer Storefront**, **Vendor Management Dashboard**, and **Super Admin Control Center** using **JWT** and **Bcrypt.js**.",
          "Designed the **Customer Portal** featuring dynamic storefront browsing, global state management via **Redux Toolkit**, secure checkout powered by the **Stripe API**, and automated transaction emails via **Nodemailer**.",
          "Developed the **Vendor Dashboard** for localized store configuration, **Cloudinary-backed** product media handling, and real-time inventory, pricing, and variant CRUD management.",
          "Architected the **Super Admin Panel** with centralized analytics dashboards for tracking system-wide revenue, order volume metrics, and multi-tenant operational oversight.",
          "Optimized production infrastructure with **MongoDB query indexing**, **Helmet.js** security policies, and deployed frontend/backend environments on **Vercel** and **Render**."
        ],
        techStack: ["MERN Stack", "React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT", "Bcrypt.js", "Stripe API", "Nodemailer", "Cloudinary", "Helmet.js", "Vercel", "Render"],
        github: "https://github.com/Riju-hub/NovaCommerce",
        liveDemo: "https://nova-commerce-th.vercel.app/"
      },
      {
        id: "rankresume-ai",
        title: "RankResume AI",
        tagline: "AI-Powered Applicant Tracking & Candidate Ranking Engine",
        highlights: [
          "Architected and deployed a production-ready **Applicant Tracking System (ATS)** utilizing **React 18**, **Node.js**, **Express**, and **MongoDB Atlas**.",
          "Integrated **Google Gemini API** to parse candidate PDF resumes and score qualifications semantically against job requirements.",
          "Implemented automated PDF text extraction pipelines using **Multer** and **pdf-parse** alongside secure document storage in **Supabase Storage**.",
          "Engineered a dynamic **Kanban candidate pipeline** (Applied → Screening → Interview → Offer / Rejected) with automated status update notifications dispatched via **Nodemailer**.",
          "Implemented strict **JWT authentication** and dual-role permission guards (**Candidate** vs. **Recruiter**) across frontend routes and REST API endpoints.",
          "Deployed client SPA on **Vercel** and backend containerized web services on **Render** with complete CORS and environment security."
        ],
        techStack: ["React", "Node.js", "Express", "MongoDB", "Google Gemini API", "Supabase", "Tailwind CSS", "JWT", "Bcrypt.js", "Vercel", "Render"],
        github: "https://github.com/Riju-hub/RankResume-AI",
        liveDemo: "https://rankresume.vercel.app/"
      }
    ]
  }
];

export const allProjects = workData.flatMap((exp) =>
  exp.projects.map((proj) => ({
    ...proj,
    company: exp.company,
    role: exp.role,
    workType: exp.workType,
    duration: exp.duration
  }))
);



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
    id: "nova-commerce",
    title: "NovaEcommerce — Multi-Tenant E-Commerce SaaS",
    period: "Jul 2026 – Aug 2026",
    description: "A cloud-native multi-tenant e-commerce platform offering isolated merchant storefronts, dynamic RBAC, Stripe checkouts, and an analytics suite.",
    image: nova_commerce,
    tech: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB Atlas", "Redux Toolkit", "Tailwind CSS", "Stripe API", "Cloudinary"],
    demo: "https://nova-commerce-th.vercel.app",
    code: "https://github.com/Riju-hub/NovaCommerce",
    overview: "NovaEcommerce is an enterprise-grade multi-tenant SaaS platform built to provide independent retail merchants with decentralized digital storefronts while consolidating platform governance, vendor onboarding, and metric tracking into a unified Super Admin control plane.",
    keyFeatures: [
      "Dynamic tenant isolation middleware scoping catalog queries and database operations per store boundary",
      "Tri-role authorization (Customer, Vendor, Super Admin) powered by stateless JWT authentication and bcrypt password hashing",
      "End-to-end Stripe Checkout integration with raw-body cryptographic webhook verification for automated order processing",
      "Full inventory lifecycle management featuring dynamic variants, multi-image Cloudinary CDN uploads, and low-stock alerts",
      "Interactive analytics dashboards built with Recharts displaying platform gross revenue and store-level sales metrics",
      "Automated transactional email workflows powered by Nodemailer for account verifications and order receipts"
    ],
    architecture: "React (Vite) SPA deployed on Vercel Edge CDN communicating with an Express.js REST API on Render. Utilizes MongoDB Atlas with Mongoose ODM, strict tenant-scoping middleware, and external pipelines for Stripe payments and Cloudinary asset optimization."
  },
  {
    id: "rankresume-ai",
    title: "RankResume AI — Candidate Ranking & ATS",
    period: "Aug 2026 – Oct 2026",
    description: "An AI-powered recruitment platform that extracts resume text and performs semantic candidate match scoring against job descriptions using Google Gemini.",
    image: rankresume_ai,
    tech: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB Atlas", "Google Gemini API", "Supabase Storage", "Tailwind CSS", "Framer Motion"],
    demo: "https://rankresume.vercel.app/",
    code: "https://github.com/Riju-hub/RankResume-AI",
    overview: "RankResume AI is a full-stack recruitment platform engineered to streamline hiring pipelines. It extracts structured text from candidate PDF resumes, evaluates qualifications against job criteria using Google Gemini, and delivers interactive Kanban candidate management for recruiters.",
    keyFeatures: [
      "Automated PDF resume parsing and text extraction via Multer and pdf-parse buffers",
      "Semantic candidate qualification scoring and skill-gap synthesis using the Google Gemini API",
      "Interactive recruiter pipeline featuring Kanban drag-and-drop tracking (Applied → Screening → Interview → Offer / Rejected)",
      "Secure resume document storage using Supabase Storage buckets with authenticated access policies",
      "Dual-portal architecture with role-based routing (Candidate vs. Recruiter) and protected JWT routes",
      "Transactional status updates dispatched to applicants via automated email notifications"
    ],
    architecture: "Frontend built with React 18, Vite, Material UI, and Tailwind CSS. The Node.js/Express backend handles file ingestion, coordinates with Supabase Storage and Google Gemini for evaluation, and manages job postings and pipeline states in MongoDB Atlas."
  },
  {
    id: "resumeiq",
    title: "ResumeIQ — AI Powered ATS Platform",
    period: "Sep 2026 – Oct 2026",
    description: "An intelligent resume evaluation system computing semantic ATS match scores, dimensional category breakdowns, and AI feedback via Llama 3.",
    image: resumeiq,
    tech: ["Python", "FastAPI", "Streamlit", "spaCy", "Sentence Transformers", "Groq API", "Supabase", "WeasyPrint"],
    demo: "https://resume-iq-ats-live.streamlit.app/",
    code: "https://github.com/Riju-hub/ResumeIQ",
    overview: "ResumeIQ is an NLP-driven resume optimization and scoring platform. It calculates semantic vector similarity between resumes and job descriptions, categorizes scoring across ATS criteria, and provides contextual LLM feedback to maximize applicant match rates.",
    keyFeatures: [
      "Semantic similarity scoring using Sentence Transformers (all-MiniLM-L6-v2) for contextual match evaluation",
      "Entity extraction and skill recognition pipeline implemented using spaCy (en_core_web_md)",
      "Multi-dimensional ATS scoring breakdown (keywords, formatting, content, and skill validation)",
      "Contextual resume feedback and optimization suggestions generated via Groq API (Llama 3)",
      "Exportable formatted PDF audit reports generated dynamically using WeasyPrint and Jinja2 templates",
      "User authentication and historical report persistence backed by Supabase and OAuth"
    ],
    architecture: "Asynchronous Python backend powered by FastAPI orchestrating local transformer/NLP inference pipelines and Groq LLM calls, connected to a Streamlit interactive frontend and Supabase database."
  },
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
    demo: "https://bhabasindhudas.vercel.app/",
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

export const certificationData = [
  {
    id: "samsung-ai",
    title: "Artificial Intelligence Course",
    issuer: "Samsung Innovation Campus & ESSCI",
    issueDate: "Sep 2025 - Nov 2025",
    credentialId: "SIC11836",
    image: "/samsung_certificate.jpeg",
    skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Python"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "text-cyan-400",
    borderAccent: "group-hover:border-cyan-500/50"
  },
  {
    id: "zaalima-web-dev",
    title: "Web Development Training",
    issuer: "Zaalima Development & intelleQA",
    issueDate: "Jul 2026 - Oct 2026",
    credentialId: "6d60d6a824a93d28a4e",
    image: "/zaalima_training.jpeg",
    skills: ["Full Stack Web", "Frontend & Backend", "System Architecture"],
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accentColor: "text-purple-400",
    borderAccent: "group-hover:border-purple-500/50"
  },
  {
    id: "be10x-ai-tools",
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10x",
    issueDate: "June 2026",
    credentialId: "Verified",
    image: "/be10x.jpeg",
    skills: ["Generative AI", "AI Automation", "Data Analysis", "Prompt Engineering"],
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    accentColor: "text-pink-400",
    borderAccent: "group-hover:border-pink-500/50"
  }
];