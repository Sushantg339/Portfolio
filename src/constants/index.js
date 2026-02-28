const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg"
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  }
];

const blogPosts = [
  {
    id: 1,
    date: "Jan 22, 2026",
    title:
      "How Does the Internet Work?",
    image: "/images/blog1.png",
    link: "https://medium.com/@sushant.career1/how-does-the-internet-work-ae2b181d36ea",
  },
  {
    id: 2,
    date: "Jan 27, 2026",
    title: "Run packages locally using Docker",
    image: "/images/blog2.png",
    link: "https://medium.com/@sushant.career1/run-packages-locally-using-docker-76d345275f7d",
  }
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "WebSocket", "Socket.io"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "PostMan"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Sushantg339",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://portfolio-rosy-chi-gbfp4kielv.vercel.app/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/SushantBit",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/sushant-gupta339/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Car Rental System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-30", // icon position inside Finder
      windowPosition: "top-[5vh] left-80", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Car Rental System.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Car Rental System backend is a production-grade API designed to power a secure and scalable vehicle booking platform.",
            "Rather than a basic CRUD service, it enforces real-world business rules like booking ownership, pricing limits, and authenticated access control.",
            "Think of it as the engine behind a modern car rental app—handling users, bookings, and analytics seamlessly in the background.",
            "Built with TypeScript, Express, and PostgreSQL, it emphasizes clean architecture, strong validation, and secure JWT-based authentication.",
          ],
        },
        {
          id: 2,
          name: "car-rental-github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Sushantg339/Car-Rental-System",
          position: "top-10 right-20",
        }
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Powered Real Time Chat Bot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-42 right-80",
      windowPosition: "top-[60vh] left-50",
      children: [
        {
          id: 1,
          name: "AI Powered Real Time Chat Bot.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
                "The AI-Powered Real-Time Chat App is an intelligent messaging platform that delivers context-aware conversations using Retrieval-Augmented Generation (RAG).",
                "Instead of a simple chatbot, it combines vector search and large-language-model reasoning to provide accurate answers grounded in custom knowledge sources.",
                "Think of it as a smart assistant inside a live chat—understanding context, retrieving relevant data, and responding instantly as users type.",
                "Built with React, Node.js, Socket.IO, Gemini AI, and Pinecone, it showcases real-time communication, semantic retrieval, and scalable full-stack architecture.",
          ],
        },
        {
          id: 2,
          name: "ai-chat-bot-github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Sushantg339/AI-Chatbot-Full-Stack-Project",
          position: "top-20 left-20",
        }
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Youthiapa - Reimagined",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[13vh] left-150",
      children: [
        {
          id: 1,
          name: "Youthiapa Reimagine.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Youthiapa-Reimagine is a modern e-commerce UI experience crafted to showcase clean design, smooth motion, and scalable React architecture.",
            "Rather than a static storefront, it emphasizes reusable components, responsive layouts, and fluid GSAP animations to create a polished, premium feel.",
            "Think of it as redesigning an online fashion store with performance-focused forms, seamless navigation, and consistent visuals across every device.",
            "Built with React, Context API, React Hook Form, and GSAP, it highlights advanced state management, accessible forms, and interactive frontend engineering.",
          ],
        },
        {
          id: 2,
          name: "youthiapa-reimagine.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sheryians-frontend-hackathon-projec.vercel.app/",
          position: "top-10 right-20",
        }
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-40 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/sushant.jpg",
      description: [
        "Hey! I’m Sushant 👋, a full-stack developer who enjoys building scalable apps and clean, modern web experiences that actually solve problems.",
        "I specialize in TypeScript, React, Node.js, and backend architecture—and I follow a strong DSA-driven approach to write efficient, reliable code.",
        "I’m big on structured systems, secure APIs, and UI that feels smooth, fast, and intuitive across devices.",
        "Outside of dev work, you'll usually find me solving DSA problems, refining side projects late at night, or exploring new tech that levels up my engineering skills",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};


export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };