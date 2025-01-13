export const skills = [
  { name: 'HTML', level: 'Intermediate', notes: 'Used in multiple web development projects' },
  { name: 'CSS', level: 'Advanced', notes: 'Implemented responsive layouts and modern design patterns' },
  { name: 'JavaScript', level: 'Intermediate', notes: 'Developed interactive web applications' },
  { name: 'React Native', level: 'Intermediate', notes: 'Created multiple mobile applications including task management systems' },
  { name: 'TypeScript', level: 'Beginner', notes: 'Implemented type-safe features and API integrations' },
  { name: 'MongoDB', level: 'Intermediate', notes: 'Designed and implemented NoSQL database solutions' },
  { name: 'Firebase', level: 'Intermediate', notes: 'Built real-time applications and authentication systems' },
  { name: 'Node.js', level: 'Intermediate', notes: 'Developed backend services and REST APIs' },
  { name: 'Express', level: 'Intermediate', notes: 'Created robust server-side applications' },
  { name: 'Python', level: 'Beginner', notes: 'Completed WeThinkCode bootcamp with programming fundamentals' },
  { name: 'Material UI', level: 'Intermediate', notes: 'Implemented responsive component-based designs' },
  { name: 'React Redux', level: 'Intermediate', notes: 'Managed complex application state' },
  { name: 'SASS', level: 'Beginner', notes: 'Created maintainable CSS architectures' },
  { name: 'SQLite', level: 'Intermediate', notes: 'Implemented local database solutions' },
  { name: 'Framer Motion', level: 'Beginner', notes: 'Created animated user interfaces' },
  { name: 'VS Code', level: 'Advanced', notes: 'Primary development environment' },
  { name: 'PyCharm', level: 'Advanced', notes: 'Python development environment' },
  { name: 'Figma', level: 'Intermediate', notes: 'UI/UX design and prototyping' }
];

export const individualProjects = [
  {
    title: 'Hotel Application',
    description: 'A comprehensive hotel booking platform for customers to manage their reservations.',
    techStack: ['React', 'CSS', 'Firebase'],
    features: ['Hotel booking system', 'Reservation management', 'User authentication'],
    challenges: 'Implemented real-time availability updates while maintaining booking consistency across multiple users.',
    links: { github: 'https://github.com/Oscarpoco/hotel-application', demo: 'https://hotel-application-beta.vercel.app' }
  },
  {
    title: 'Hotel CMS',
    description: 'Content Management System for hotel staff to manage bookings and room inventory.',
    techStack: ['React', 'Firebase', 'CSS'],
    features: ['Booking management', 'Room inventory control', 'Staff administration'],
    challenges: 'Designed an intuitive interface for managing complex booking scenarios and room assignments.',
    links: { github: 'https://github.com/Oscarpoco/hotel-management-system', demo: 'https://hotel-management-system-iota.vercel.app' }
  },
  {
    title: 'Recording App',
    description: 'Mobile application for voice recording and note-taking.',
    techStack: ['React Native', 'Async Storage', 'Firebase'],
    features: ['User profile management', 'Voice recording', 'Note organization'],
    challenges: 'Optimized audio recording and storage for efficient mobile performance.',
    links: { github: 'https://github.com/Oscarpoco/recording-app', demo: '#' }
  },
  {
    title: 'Birthday Card Creator',
    description: 'Mobile app for designing and sharing custom birthday cards.',
    techStack: ['React Native', 'Async Storage'],
    features: ['Card template selection', 'Custom message creation', 'Social sharing'],
    challenges: 'Implemented smooth image manipulation and sharing capabilities.',
    links: { github: 'https://github.com/Oscarpoco/birthday-card', demo: '#' }
  },
  {
    title: 'Gallery App',
    description: 'Location-aware photo gallery application.',
    techStack: ['React Native', 'Async Storage', 'SQLite'],
    features: ['Photo capture with geolocation', 'Image organization', 'Location-based sorting'],
    challenges: 'Integrated device camera and location services while maintaining performance.',
    links: { github: 'https://github.com/Oscarpoco/Gallery', demo: '#' }
  },
  {
    title: 'Shopping List Mobile App',
    description: 'Mobile application for managing shopping lists and items.',
    techStack: ['React Native', 'Async Storage', 'SQLite'],
    features: ['User profiles', 'List creation and management', 'Item categorization'],
    challenges: 'Implemented offline data persistence with synchronization capabilities.',
    links: { github: 'https://github.com/Oscarpoco/shopping-list-native', demo: '#' }
  },
  {
    title: 'Shopping List Web App',
    description: 'Web-based shopping list manager with state management.',
    techStack: ['React', 'Local Storage', 'Redux', 'JSON Server'],
    features: ['User authentication', 'List sharing', 'Item tracking'],
    challenges: 'Managed complex state updates across multiple users and lists.',
    links: { github: 'https://github.com/Oscarpoco/shopping-list', demo: '#' }
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Mobile payment processing application using Paystack.',
    techStack: ['React Native', 'Paystack'],
    features: ['Secure payment processing', 'Transaction history', 'Payment verification'],
    challenges: 'Implemented secure payment flow with proper error handling.',
    links: { github: 'https://github.com/Oscarpoco/payment-gateway', demo: '#' }
  },
  {
    title: 'Employee Management System',
    description: 'Full-stack employee management platform with authentication.',
    techStack: ['React', 'Local Storage', 'Firebase Admin', 'Node', 'Express'],
    features: ['Employee records management', 'Admin dashboard', 'Role-based access control'],
    challenges: 'Implemented secure authentication and authorization system.',
    links: { github: 'https://github.com/Oscarpoco/employee-management-with-node-authentication', demo: '#' }
  },
  {
    title: 'Online Recipe App',
    description: 'Recipe sharing and management platform.',
    techStack: ['React', 'Local Storage', 'Recipe API'],
    features: ['Recipe creation', 'Search functionality', 'User collections'],
    challenges: 'Optimized recipe search and filtering for large datasets.',
    links: { github: 'https://github.com/Oscarpoco/nkombiso-online-recipe', demo: '#' }
  },
  {
    title: 'Weather App',
    description: 'Real-time weather information application.',
    techStack: ['React', 'Local Storage', 'Weather API'],
    features: ['City weather search', 'Weather forecasts', 'Location-based updates'],
    challenges: 'Implemented efficient API caching and error handling for unreliable connections.',
    links: { github: 'https://github.com/Oscarpoco/weather-application', demo: '#' }
  }
];

export const groupProjects = [
  {
    title: 'Restaurant Reservation App',
    description: 'Mobile application for customers to make and manage restaurant reservations.',
    teamMembers: ['Nhlakanipho Alson Radebe', 'Oscar Kyle Poco'],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Expo'],
    features: ['User account management', 'Table reservation system', 'Booking management'],
    collaboration: 'Implemented Agile methodology using Trello for task management and daily stand-ups for team coordination.',
    links: { github: 'https://github.com/mLab-alscar-projects/restaurant-reservation-app', demo: '#' },
    visible: false
  },
  {
    title: 'Restaurant Reservation CMS',
    description: 'Admin platform for managing restaurant reservations and user accounts.',
    teamMembers: ['Nhlakanipho Alson Radebe', 'Oscar Kyle Poco'],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Expo'],
    features: ['User management', 'Restaurant profile management', 'Reservation oversight'],
    collaboration: 'Used Git for version control and implemented code review processes for quality assurance.',
    links: { github: 'https://github.com/mLab-alscar-projects/restaurent-reservation-cms', demo: '#' },
    visible: false

  },
  {
    title: 'Restaurant Admin Registration Portal',
    description: 'Super admin application for managing restaurant administrator accounts.',
    teamMembers: ['Nhlakanipho Alson Radebe', 'Oscar Kyle Poco'],
    techStack: ['React Native', 'MongoDB', 'Expo'],
    features: ['Admin account creation', 'Access control management', 'Administrator verification'],
    collaboration: 'Utilized pair programming for complex features and maintained documentation using Notion.',
    links: { github: 'https://github.com/mLab-alscar-projects/admin-register-cms-app', demo: '#' },
    visible: false

  }
];