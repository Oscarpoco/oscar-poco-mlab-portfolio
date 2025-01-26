// Font Awesome Icons
import { FaHtml5 } from 'react-icons/fa';  // For HTML
import { FaCss3Alt } from 'react-icons/fa'; // For CSS
import { FaJs } from 'react-icons/fa';      // For JavaScript
import { FaReact } from 'react-icons/fa';   // For React/React Native
import { FaNodeJs } from 'react-icons/fa';  // For Node.js
import { FaPython } from 'react-icons/fa';  // For Python
import { FaSass } from 'react-icons/fa';    // For SASS
// import { FaCode } from 'react-icons/fa';    // For general coding
import { FaTrello } from 'react-icons/fa';  // For Trello
import { FaFigma } from 'react-icons/fa';   // For Figma
import { FaHotel } from 'react-icons/fa';   // For Hotel projects
import { FaBuilding } from 'react-icons/fa'; // For CMS projects
// import { FaMicrophone } from 'react-icons/fa'; // For Recording app
// import { FaBirthdayCake } from 'react-icons/fa'; // For Birthday card app
// import { FaImages } from 'react-icons/fa';   // For Gallery app
// import { FaShoppingCart } from 'react-icons/fa'; 
// import { FaCreditCard } from 'react-icons/fa'; 
import { FaUsers } from 'react-icons/fa';    
import { FaUtensils } from 'react-icons/fa'; 
// import { FaCloud } from 'react-icons/fa';    

// Simple Icons
import { SiTypescript } from 'react-icons/si';  
import { SiFirebase } from 'react-icons/si';   
import { SiExpress } from 'react-icons/si';     
import { SiMui } from "react-icons/si"; 
import { SiRedux } from 'react-icons/si';       
import { SiSqlite } from 'react-icons/si';     
import { SiFramer } from 'react-icons/si';      
import { VscVscode } from "react-icons/vsc";
import { SiPycharm } from 'react-icons/si';    
import { SiMongodb } from 'react-icons/si'; 

export const skills = [
  { name: 'HTML', level: 'Advanced', notes: 'Used in multiple web development projects', icon: FaHtml5 },
  { name: 'CSS', level: 'Advanced', notes: 'Implemented responsive layouts and modern design patterns', icon: FaCss3Alt },
  { name: 'JavaScript', level: 'Intermediate', notes: 'Developed interactive web applications', icon: FaJs },
  { name: 'React Native', level: 'Intermediate', notes: 'Created multiple mobile applications including restaurant management systems', icon: FaReact },
  { name: 'React', level: 'Advanced', notes: 'Created multiple web applications including Hotel management systems', icon: FaReact },
  { name: 'TypeScript', level: 'Beginner', notes: 'Implemented type-safe features and API integrations', icon: SiTypescript },
  { name: 'MongoDB', level: 'Advanced', notes: 'Designed and implemented NoSQL database solutions', icon: SiMongodb },
  { name: 'Firebase', level: 'Intermediate', notes: 'Built real-time applications and authentication systems', icon: SiFirebase },
  { name: 'Node.js', level: 'Intermediate', notes: 'Developed backend services and REST APIs', icon: FaNodeJs },
  { name: 'Express', level: 'Advanced', notes: 'Created robust server-side applications', icon: SiExpress },
  { name: 'Python', level: 'Beginner', notes: 'Completed WeThinkCode bootcamp with programming fundamentals', icon: FaPython },
  { name: 'Material UI', level: 'Intermediate', notes: 'Implemented responsive component-based designs', icon: SiMui },
  { name: 'React Redux', level: 'Intermediate', notes: 'Managed complex application state', icon: SiRedux },
  { name: 'SASS', level: 'Beginner', notes: 'Created maintainable CSS architectures', icon: FaSass },
  { name: 'SQLite', level: 'Intermediate', notes: 'Implemented local database solutions', icon: SiSqlite },
  { name: 'Framer Motion', level: 'Beginner', notes: 'Created animated user interfaces', icon: SiFramer },
  { name: 'VS Code', level: 'Advanced', notes: 'Primary development environment', icon: VscVscode },
  { name: 'PyCharm', level: 'Advanced', notes: 'Python development environment', icon: SiPycharm },
  { name: 'Figma', level: 'Intermediate', notes: 'UI/UX design and prototyping', icon: FaFigma },
  { name: 'Trello', level: 'Intermediate', notes: 'Tracking the progress when working on a project.', icon: FaTrello },
];

export const individualProjects = [
  {
    title: 'Hotel Application',
    description: 'A comprehensive hotel booking platform for customers to manage their reservations.',
    techStack: ['React', 'CSS', 'Firebase'],
    features: ['Hotel booking system', 'Reservation management', 'User authentication'],
    challenges: 'Implemented real-time availability updates while maintaining booking consistency across multiple users.',
    links: { github: 'https://github.com/Oscarpoco/hotel-application', demo: 'https://hotel-application-beta.vercel.app' },
    icon: FaHotel
  },
  {
    title: 'Hotel CMS',
    description: 'Content Management System for hotel staff to manage bookings and room inventory.',
    techStack: ['React', 'Firebase', 'CSS'],
    features: ['Booking management', 'Room inventory control', 'Staff administration'],
    challenges: 'Designed an intuitive interface for managing complex booking scenarios and room assignments.',
    links: { github: 'https://github.com/Oscarpoco/hotel-management-system', demo: 'https://hotel-management-system-iota.vercel.app' },
    icon: FaBuilding
  },
  // {
  //   title: 'Recording App',
  //   description: 'Mobile application for voice recording and note-taking.',
  //   techStack: ['React Native', 'Async Storage', 'Firebase'],
  //   features: ['User profile management', 'Voice recording', 'Note organization'],
  //   challenges: 'Optimized audio recording and storage for efficient mobile performance.',
  //   links: { github: 'https://github.com/Oscarpoco/recording-app', demo: '' },
  //   icon: FaMicrophone
  // },
  // {
  //   title: 'Birthday Card Creator',
  //   description: 'Mobile app for designing and sharing custom birthday cards.',
  //   techStack: ['React Native', 'Async Storage'],
  //   features: ['Card template selection', 'Custom message creation', 'Social sharing'],
  //   challenges: 'Implemented smooth image manipulation and sharing capabilities.',
  //   links: { github: 'https://github.com/Oscarpoco/birthday-card', demo: '' },
  //   icon: FaBirthdayCake
  // },
  // {
  //   title: 'Gallery App',
  //   description: 'Location-aware photo gallery application.',
  //   techStack: ['React Native', 'Async Storage', 'SQLite'],
  //   features: ['Photo capture with geolocation', 'Image organization', 'Location-based sorting'],
  //   challenges: 'Integrated device camera and location services while maintaining performance.',
  //   links: { github: 'https://github.com/Oscarpoco/Gallery', demo: '' },
  //   icon: FaImages
  // },
  // {
  //   title: 'Shopping List Mobile',
  //   description: 'Mobile application for managing shopping lists and items.',
  //   techStack: ['React Native', 'Async Storage', 'SQLite'],
  //   features: ['User profiles', 'List creation and management', 'Item categorization'],
  //   challenges: 'Implemented offline data persistence with synchronization capabilities.',
  //   links: { github: 'https://github.com/Oscarpoco/shopping-list-native', demo: '' },
  //   icon: FaShoppingCart
  // },
  // {
  //   title: 'Shopping List Web App',
  //   description: 'Web-based shopping list manager with state management.',
  //   techStack: ['React', 'Local Storage', 'Redux', 'JSON Server'],
  //   features: ['User authentication', 'List sharing', 'Item tracking'],
  //   challenges: 'Managed complex state updates across multiple users and lists.',
  //   links: { github: 'https://github.com/Oscarpoco/shopping-list', demo: '' },
  //   icon: FaShoppingCart
  // },
  // {
  //   title: 'Payment Gateway',
  //   description: 'Mobile payment processing application using Paystack.',
  //   techStack: ['React Native', 'Paystack'],
  //   features: ['Secure payment processing', 'Transaction history', 'Payment verification'],
  //   challenges: 'Implemented secure payment flow with proper error handling.',
  //   links: { github: 'https://github.com/Oscarpoco/payment-gateway', demo: '' },
  //   icon: FaCreditCard
  // },
  // {
  //   title: 'Employee Management',
  //   description: 'Full-stack employee management platform with authentication.',
  //   techStack: ['React', 'Local Storage', 'Firebase Admin', 'Node', 'Express'],
  //   features: ['Employee records management', 'Admin dashboard', 'Role-based access control'],
  //   challenges: 'Implemented secure authentication and authorization system.',
  //   links: { github: 'https://github.com/Oscarpoco/employee-management-with-node-authentication', demo: '' },
  //   icon: FaUsers
  // },
  // {
  //   title: 'Online Recipe App',
  //   description: 'Recipe sharing and management platform.',
  //   techStack: ['React', 'Local Storage', 'Recipe API'],
  //   features: ['Recipe creation', 'Search functionality', 'User collections'],
  //   challenges: 'Optimized recipe search and filtering for large datasets.',
  //   links: { github: 'https://github.com/Oscarpoco/nkombiso-online-recipe', demo: '' },
  //   icon: FaUtensils
  // },
  // {
  //   title: 'Weather App',
  //   description: 'Real-time weather information application.',
  //   techStack: ['React', 'Local Storage', 'Weather API'],
  //   features: ['City weather search', 'Weather forecasts', 'Location-based updates'],
  //   challenges: 'Implemented efficient API caching and error handling for unreliable connections.',
  //   links: { github: 'https://github.com/Oscarpoco/weather-application', demo: 'weather-application-phi-livid.vercel.app' },
  //   icon: FaCloud
  // }
];

export const groupProjects = [
  {
    title: 'Restaurant Reservation App',
    description: 'Mobile application for customers to make and manage restaurant reservations.',
    teamMembers: ['Nhlakanipho Alson Radebe', 'Oscar Kyle Poco'],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Expo'],
    features: ['User account management', 'Table reservation system', 'Booking management'],
    collaboration: 'Implemented Agile methodology using Trello for task management and daily stand-ups for team coordination.',
    links: { github: 'https://github.com/mLab-alscar-projects/restaurant-reservation-app', demo: '' },
    visible: false,
    icon: FaUtensils
  },
  {
    title: 'Restaurant Reservation CMS',
    description: 'Admin platform for managing restaurant reservations and user accounts.',
    teamMembers: ['Nhlakanipho Alson Radebe', 'Oscar Kyle Poco'],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Expo'],
    features: ['User management', 'Restaurant profile management', 'Reservation oversight'],
    collaboration: 'Used Git for version control and implemented code review processes for quality assurance.',
    links: { github: 'https://github.com/mLab-alscar-projects/restaurent-reservation-cms', demo: '' },
    visible: false,
    icon: FaBuilding
  },
  {
    title: 'Restaurant Admin Registration Portal',
    description: 'Super admin application for managing restaurant administrator accounts.',
    teamMembers: ['Nhlakanipho Alson Radebe', 'Oscar Kyle Poco'],
    techStack: ['React Native', 'MongoDB', 'Expo'],
    features: ['Admin account creation', 'Access control management', 'Administrator verification'],
    collaboration: 'Utilized pair programming for complex features and maintained documentation using Notion.',
    links: { github: 'https://github.com/mLab-alscar-projects/admin-register-cms-app', demo: '' },
    visible: false,
    icon: FaUsers
  }
];