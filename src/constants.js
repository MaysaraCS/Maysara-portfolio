// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import flutterLogo from './assets/tech_logo/flutter.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import laravelLogo from './assets/tech_logo/laravel.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import ble2Logo from './assets/tech_logo/BLE-2.png';
import mcpLogo from './assets/tech_logo/MCP.png';

// Experience Section Logo's
import GatesITLogo from './assets/company_logo/gates_technology_sdn_bhd_logo.jpg';


// Education Section Logo's
import UTM from './assets/education_logo/utm.png';
import Shati from './assets/education_logo/school.jpg';

// Project Section Logo's
import BFRM from './assets/work_logo/BFRM.png';
import ChatApp from './assets/work_logo/chatApp.png';
import CustomerService from './assets/work_logo/customerService.png';
import DrawingApp from './assets/work_logo/drawingApp.png';
import PrepWise from './assets/work_logo/PrepWise.png';
import ResumeBuilder from './assets/work_logo/resumeBuilder.png';
import NET from './assets/work_logo/NET.png';

// Certificate Section Logo's
import AngularCert from './assets/certificate_logo/Angular.jpg';
import AWS1Cert from './assets/certificate_logo/AWS1.png';
import AWS2Cert from './assets/certificate_logo/AWS2.png';
import Docker1Cert from './assets/certificate_logo/docker1.png';
import Docker2Cert from './assets/certificate_logo/docker2.png';
import Docker3Cert from './assets/certificate_logo/docker3.png';
import FlutterLaravelCert from './assets/certificate_logo/flutter&laravel.jpg';
import HCICert from './assets/certificate_logo/HCI.png';
import ISSCert from './assets/certificate_logo/ISS.png';
import ISS2Cert from './assets/certificate_logo/ISS2.png';
import ISS3Cert from './assets/certificate_logo/ISS3.png';
import Kubernetes1Cert from './assets/certificate_logo/Kubernetes1.png';
import LinuxCert from './assets/certificate_logo/linux.png';
import MCPCert from './assets/certificate_logo/MCP.png';
import PythonUTMCert from './assets/certificate_logo/python utm.jpg';
import PyTorchCert from './assets/certificate_logo/pytorch.jpg';
import RESMCert from './assets/certificate_logo/RESM.png';
import TALENTCert from './assets/certificate_logo/TALENT.png';
import GPA from './assets/certificate_logo/GPA.jpeg';
import Volenteer from './assets/certificate_logo/volunteer.jpeg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Flutter', logo: flutterLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Laravel', logo: laravelLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'BLE', logo: ble2Logo },
      { name: 'MCP', logo: mcpLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: GatesITLogo,
      role: "Junior Software Engineer",
      company: "GatesIT Sdn Bhd",
      date: "Sep 2024 - Feb 2025",
      desc: "Developed a full-stack mobile application using Flutter and Laravel, integrating Bluetooth Low Energy (BLE) technology to enable seamless device connectivity and enhance overall user experience. Contributed to UI/UX design to ensure intuitive navigation and visual consistency, and performed software quality assurance testing to maintain performance, reliability, and functionality standards throughout the development cycle.",
      skills: [
        "Flutter",
        "Laravel",
        "RESTful APIs",
        "figma",
        "BLE Technology",
        "MySQL",
        "IOT",
        "UI & UX",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: UTM,
      school: "Universiti Teknologi Malaysia",
      date: "Feb 2021 - Aug 2025",
      grade: "3.2 CGPA",
      desc: "I completed my Bachelor of Computer Science Software engineeringe from (UTM) , Universiti Teknologi Malaysia, where I developed a strong foundation in computing and software development. Throughout my studies, I explored diverse subjects such as Data Structures and Algorithms, Web Development, and Database Management Systems, which provided me with both theoretical knowledge and hands-on experience. My academic journey at UTM also involved working on multiple projects that translated classroom concepts into real-world software solutions, strengthening my problem-solving and technical skills.",
      degree: "Bachelor of Computer Science Software engineering (B.Comp.Sci.)",
    },
    {
      id: 1,
      img: Shati,
      school: "Al-Shati Secondary School",
      date: "Sept 2017 - Jul 2020",
      grade: "99.70%",
      desc: "I completed my secondary education at Al-Shati Secondary School with an exceptional academic record, achieving a 99.70% overall score. During my studies, I built a strong foundation in key subjects such as Mathematics, Computer Science, and Physics, which strengthened my analytical and problem-solving abilities. Beyond academics, I actively participated in science clubs and technology competitions, where I honed my teamwork, creativity, and leadership skills. My experience at Al-Shati not only shaped my academic excellence but also inspired my passion for technology, innovation, and continuous learning.",
      degree: "Secondary School Certificate (SSC)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "MERN Stack AI Resume Builder",
      description:
        "Developed an AI-powered Resume Builder using the MERN stack (MongoDB, Express.js, React, Node.js), integrated with the Gemini AI API to enhance resume content generation. Implemented user authentication, multiple customizable templates, photo upload with background removal, color selection, and full CRUD functionality. Utilized Redux for state management and Axios for API communication. The application offers a clean, user-friendly interface that allows users to effortlessly create, download, and share personalized resumes.",
      image: ResumeBuilder,
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Gemini AI"],
      github: "https://github.com/MaysaraCS/MERN-Full-Stack-AI-Resume-Builder",
      webapp: "https://github.com/MaysaraCS/MERN-Full-Stack-AI-Resume-Builder",
    },
    {
      id: 1,
      title: "PrepWise - AI Interview Preparation Assistant ",
      description:
        "Developed PrepWise, an AI-powered Interview Preparation Assistant built with the MERN stack and TypeScript, integrated with the Vapi AI API for intelligent interview simulations. Implemented Firebase for authentication and database management, enabling secure user registration and login. Designed a custom workflow in Vapi to process user input, extract data in JSON format, and generate personalized interview questions and feedback. The application provides an interactive, AI-driven experience to help users prepare effectively for interviews.",
      image: PrepWise,
      tags: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Vapi AI"],
      github: "https://github.com/MaysaraCS/AI-Voice-Agent-Interview-Platform",
      webapp: "https://ai-voice-agent-interview-platform-eight.vercel.app/sign-in",
    },
    {
      id: 2,
      title: "MERN Stack Real Time Chat Application",
      description:
        "Developed a Real-Time Chat Application using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.IO for live messaging and JWT authentication for secure user access. Implemented Axios for API communication and React Hot Toast for real-time notifications. The app allows users to register, log in, send text and image messages, and view online friends through an intuitive, responsive interface supporting full CRUD functionality.",
      image: ChatApp,
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "Axios", "JWT"],
      github: "https://github.com/MaysaraCS/MERN-Stack-Chat-App/tree/master",
      webapp: "https://mern-stack-chat-app-five.vercel.app/login",
    },
    {
      id: 3,
      title: "Customer Service",
      description:
        "Developed a Customer Service Management System using Java Spring Boot, Angular, and PostgreSQL, following the MVC architecture for clean and maintainable code. Implemented full CRUD functionality to efficiently manage customer data, including adding, updating, and deleting records. The application features a responsive Angular frontend integrated with a robust Spring Boot backend, ensuring smooth data flow and user interaction.",
      image: CustomerService,
      tags: ["Java Spring Boot", "Angular", "PostgreSQL", "MVC Architecture"],
      github: "https://github.com/MaysaraCS/Customer-Service-Java-spring-boot-Angular-postgreSQL-",
      webapp: "https://github.com/MaysaraCS/Customer-Service-Java-spring-boot-Angular-postgreSQL-",
    },
    {
      id: 4,
      title: "Beacon for Restaurant Marketing - BFRM",
      description: "Developed a BLE-powered Mobile Application using Flutter, Laravel, and MySQL to connect restaurant owners and customers through location-based offers. Integrated with an I10 beacon device, the app allows merchants to publish coupons and discounts that are automatically displayed to nearby customers when a beacon is detected. Customers receive real-time notifications, can redeem offers via QR codes, and access filtered coupons based on availability. The Laravel backend API manages authentication for both users and merchants, while admins oversee all data through a web-based Laravel dashboard, ensuring seamless system management and control.",
      image: BFRM,
      tags: ["Flutter", "Laravel", "MySQL", "BLE Technology", "IOT"],
      github: "https://www.linkedin.com/in/maysara-mohamed-241017244/details/projects/urn:li:fsd_profileProject:(ACoAADyDwZEB52LetQ_dLbe4fs8jRohwFlBUoqg,973269977)/treasury/",
      webapp: "https://www.youtube.com/watch?v=S51GwswlATs",
    },
    {
      id: 5,
      title: "JavaScript Drawing App",
      description: "Developed an interactive web-based drawing application using JavaScript, enabling users to createshapes and choose from multiple colors and brush sizes. The app features a user-friendly interface that allows for easy selection of drawing tools, color palettes, and brush thickness, providing a seamless and enjoyable drawing experience directly within the browser.",
      image: DrawingApp,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MaysaraCS/Drawing-app",
      webapp: "https://maysaracs.github.io/Drawing-app/",
    },
    {
      id: 6,
      title: "Expense Tracker .NET Application",
      description: "Developed a full-stack expense tracking web application using ASP.NET Core MVC, Entity Framework Core, and MySQL. Implemented CRUD operations, data visualization with interactive charts, and real-time dashboard analytics for income and expense management.",
      image: NET,
      tags: ["ASP.NET", "MySQL", "Entity Framework Core", "MVC Architecture"],
      github: "https://github.com/MaysaraCS/Expense-Tracker",
      webapp: "https://github.com/MaysaraCS/Expense-Tracker",
    },
  ]; 
  
  export const certificate = [
    {
      id: 0,
      title: "Learn Angular Basics",
      image: AngularCert,
    },
    {
      id: 1,
      title: "Learn AWS Basics",
      image: AWS1Cert,
    },
    {
      id: 2,
      title: "AWS Badge",
      image: AWS2Cert,
    },
    {
      id: 3,
      title: "Docker for Beginners",
      image: Docker1Cert,
    },
    {
      id: 4,
      title: "Docker Crash Course",
      image: Docker2Cert,
    },
    {
      id: 5,
      title: "Docker Labs",
      image: Docker3Cert,
    },
    {
      id: 6,
      title: "Flutter & Laravel Mobile App Development",
      image: FlutterLaravelCert,
    },
    {
      id: 7,
      title: "Human Computer Interaction",
      image: HCICert,
    },
    {
      id: 8,
      title: "Mental Health of students in UTM",
      image: ISSCert,
    },
    {
      id: 9,
      title: "Microsoft Word Workshop ",
      image: ISS2Cert,
    },
    {
      id: 10,
      title: "Final Year Project Workshop",
      image: ISS3Cert,
    },
    {
      id: 11,
      title: "Kubernetes Basics",
      image: Kubernetes1Cert,
    },
    {
      id: 12,
      title: "Linux Basics",
      image: LinuxCert,
    },
    {
      id: 13,
      title: "MCP Basics",
      image: MCPCert,
    },
    {
      id: 14,
      title: "Python WorkShop at UTM",
      image: PythonUTMCert,
    },
    {
      id: 15,
      title: "Python for deep learning using PyTorch",
      image: PyTorchCert,
    },
    {
      id: 16,
      title: "RESM Symposium Iskandar Puteri Low Carbon Monitoring and Management System",
      image: RESMCert,
    },
    {
      id: 17,
      title: "TALENT AND COMPETENCY MANAGEMENT COURSE",
      image: TALENTCert,
    },
    {
      id: 18,
      title: "Recognition of Excellence Performance in Study",
      image: GPA,
    },
    {
      id: 19,
      title: "International Egyptian Students Society Volenteer",
      image: Volenteer,
    },
  ];  