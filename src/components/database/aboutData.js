// ICONS
import { Handshake , Code, Smartphone, Users, Rocket, Brain, Puzzle, Lightbulb, Laptop } from 'lucide-react';


export const tabs = [
    { id: 'about', label: 'About Me', about: "A brief overview of who I am and my journey so far." },
    { id: 'achievements', label: 'Achievements', about: "Highlights of my accomplishments over the past three years." },
    { id: 'short', label: 'Short Term Goals', about: "My immediate objectives and what I aim to accomplish soon." },
    { id: 'long', label: 'Long Term Goals', about: "My vision for the future and the milestones I strive to achieve." },
    { id: 'aspirations', label: 'Aspirations', about: "The values and ambitions that drive and inspire me." },
    { id: 'codetribe', label: 'CodeTribe Academy', about: "An account of my experiences and growth during the Codetribe Academy training." },
    { id: 'plp', label: 'Power Learn Project Academy', about: "A reflection on my journey through the Power Learn Project Academy training." }
  ];
  

  export const tabContents = {
    about: [
      {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'Passionate about creating innovative solutions and pushing technological boundaries'
      },
      {
        icon: Brain,
        title: 'Quick Learner',
        description: 'Adaptable to new technologies with a strong foundation in multiple programming paradigms'
      },
      {
        icon: Puzzle,
        title: 'Problem Solver',
        description: 'Analytical thinker with a track record of solving complex technical challenges through coding'
      },
      {
        icon: Rocket,
        title: 'Driven by Impact',
        description: 'Motivated by opportunities to contribute to impactful projects that make a difference'
      },
    ],

    achievements: [
      {
        icon: Code,
        title: 'Web Development',
        description: 'Junior MERN Developer with expertise in building complex, scalable applications, including Content Management Systems (CMS).'
      },
      {
        icon: Laptop,
        title: 'Backend',
        description: 'Junior Backend Developer specializing in Node.js and Express, with expertise in building robust, scalable APIs and server-side applications.'
      },
      {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Junior Mobile Developer specializing in React Native and Node.js, with expertise in creating performant, scalable mobile applications.'
      }
    ],

    long: [
      {
        icon: Rocket,
        title: 'Build Scalable Platforms',
        description: 'Develop and deploy backend systems capable of supporting millions of users.'
      },
      {
        icon: Lightbulb,
        title: 'Launch a Mobile App',
        description: 'Design and release a cross-platform mobile application with React Native.'
      },
      {
        icon: Users,
        title: 'Contribute to Open Source',
        description: 'Make meaningful contributions to well-known open-source projects.'
      }
    ],

    short: [
      {
        icon: Rocket,
        title: 'Master RESTful APIs',
        description: 'Deepen knowledge in building and optimizing APIs using Node.js and Express.'
      },
      {
        icon: Lightbulb,
        title: 'Learn UI Animation',
        description: 'Implement interactive animations in React Native applications.'
      },
      {
        icon: Users,
        title: 'Network with Developers',
        description: 'Attend local and online developer meetups to grow professional connections.'
      }
    ],

    aspirations: [
      {
        icon: Rocket,
        title: 'Advance Technical Expertise',
        description: 'Become proficient in designing scalable systems and mastering emerging technologies.'
      },
      {
        icon: Lightbulb,
        title: 'Build an Impactful Portfolio',
        description: 'Create projects that showcase innovative solutions and creative design, blending functionality with aesthetics.'
      },
      {
        icon: Users,
        title: 'Empower Collaboration',
        description: 'Foster teamwork and build strong connections within tech communities to drive collective success.'
      }
    ],



    codetribe: [
      {
        icon: Code,
        title: 'Web Development',
        description: 'I have developed expertise in building complex, scalable web applications using the MERN stack, including crafting Content Management Systems (CMS) that meet real-world needs.'
      },
      {
        icon: Laptop,
        title: 'Backend',
        description: 'I have honed my skills in backend development with Node.js and Express, creating robust APIs and efficient server-side solutions tailored for scalability and performance.'
      },
      {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'I have built performant and scalable mobile applications using React Native and Node.js, delivering user-focused solutions across platforms.'
      }

    ],


    plp: [
      {
        icon: Code,
        title: 'Web Development',
        description: 'I created a functional and visually appealing website using HTML and CSS, enhancing my front-end development skills.'
      },
      {
        icon: Handshake ,
        title: 'Entrepreneurship',
        description: 'I learned the art of pitching to sponsors and effectively presenting projects to secure support and resources.'
      }
    ],


  };