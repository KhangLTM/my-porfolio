export default {
  nav: [
    {
      name: "about",
      value: "about",
    },
    {
      name: "experience",
      value: "experience",
    },
    {
      name: "project",
      value: "project",
    },
    {
      name: "contact",
      value: "contact",
    },
  ],
  hero: {
    title: "Hi, I’m Khang",
    desc: "I bring interfaces to life.",
  },
  about: {
    image: "profile.jpeg",
    desc: [
      "I'm a self-taught frontend developer with over 3 years of experience specializing in Vue.js and Nuxt.js.",
      "I leverage modern technologies like TypeScript and Docker, along with DevOps practices and SEO optimization, to build successful projects that delight customers and users",
      "My expertise in Vue.js and Nuxt.js, combined with a focus on creating dynamic and responsive user interfaces, ensures high-quality, scalable applications.",
    ],
  },

  experience: [
    {
      jobTitle: "Frontend Developer",
      companyName: "LittleLives",
      date: "October 2022 - Present",
      responsibility: [
        "Developed a comprehensive frontend school management system using TypeScript, Vue.js, and Nuxt.js to create a dynamic and responsive user interface",
        "Migrated the build system from Webpack to Vite, reducing build times and bundle sizes by 30%",
        "Implemented a frontend microservices architecture to ensure maintainable source code and facilitate easy scalability",
        "Worked closely with fellow developers to review code and provide constructive feedback, helping to improve code quality and foster a collaborative team environment",
      ],
    },
    {
      jobTitle: "Frontend Developer",
      companyName: "Azibai",
      date: "June 2021 - September 2022",
      responsibility: [
        "Developed and maintained features for a social networking platform, including user profiles, messaging, and activity feeds,...",
        "Refactored and optimized existing code to comply with Nuxt's new structure and best practices.",
        "Improved Google Lighthouse scores for performance, accessibility, best practices, and SEO by 25%.",
        "Utilized tools like Vite, ESLint, and Prettier to streamline development processes and maintain code quality.",
      ],
    },
  ],
  projects: {
    featured: [
      {
        image: "littlelives.png",
        name: "Littlelives",
        link: "https://www.littlelives.com/",
        desc: "LittleLives is a school management system for kindergartens. It manages student records, facilitates parent-teacher communication, and tracks attendance. With various modules, it's user-friendly and streamlines school administration.",
        techStack: "VUE3 NUXT2 TS TAILWIND VITE",
      },
      {
        image: "property.png",
        name: "Propertyaccess",
        link: "https://propertyaccess.ph/",
        desc: "An online real estate platform for the Philippines, featuring a comprehensive database of properties for sale and rent. It offers user-friendly search tools, detailed listings, and virtual viewings.",
        techStack: "NUXT2 TAILWIND TS",
      },
    ],
    other: [
      {
        image: "gestaltra.png",
        name: "Gestaltra",
        link: "https://gestaltra.com",
        desc: "Gestaltra enables managers to initiate 360 surveys for their own team members within minutes, without the need for lengthy setup or training.",
        techStack: "VUE2 NODEJS EXPRESS",
      },
      {
        image: "eposo.png",
        name: "Eposo",
        link: "https://eposo.ai",
        desc: "EPOSO is a Korea SaaS platform designed to solve issues like transparency, schedule delays, and issue management in IT projects.",
        techStack: "VUE3 TS AWS",
      },
      {
        image: "azibai.png",
        name: "Azibai",
        link: "https://azibai.com",
        desc: "Azibai is an e-commerce and social networking site that blends online shopping with social interaction.",
        techStack: "VUE2 NUXT2",
      },
      {
        image: "propertyjp.png",
        name: "Propertyaccessjapan.com",
        link: "https://propertyaccessjapan.com/",
        desc: "Property Access Japan is a real estate website specializing in the Japanese market.The site also offers insights and resources to help users navigate the Japanese real estate landscape.",
        techStack: "NUXT3 TAILWIND",
      },
    ],
  },
  contact: {
    desc: "I am currently seeking employment, and I would appreciate it if you could contact me with any available job opportunities.",
    sign: "Vi Khang - 2024",
  },
};
