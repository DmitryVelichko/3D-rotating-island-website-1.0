import { upwork, thirdweb, freelance, gnivc } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer Trainee",
        company_name: "Upwork",
        icon: upwork,
        iconBg: "#accbe1",
        date: "2019 - 2020",
        points: [
            `Took dozens of courses by FreeCodeCamp, London App Brewery, and many others.`,
            `Developed basic landing pages for Upwork clients.`
        ],
    },
    {
        title: "Web Developer",
        company_name: "Freelance",
        icon: freelance,
        iconBg: "#fbc3bc",
        date: "2020 - 2021",
        points: [
            "Developed UI and Frontend for custom web apps using React, HTML5, CSS3, JS, Bootstrap.",
            "Designed dynamic and multi-browser compatible pages.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Created reusable styled components using CSS preprocessors like SCSS.",
        ],
    },
    {
        title: "Frontend Web Developer",
        company_name: "GNIVC",
        icon: gnivc,
        iconBg: "#b7e4c7",
        date: "2021 - 2022",
        points: [
            "Developed company products as a part of a large team using React, TypeScript, SCSS, MobX, Jest, Figma, Gitea.",
            "Responsible for developing a Task Manager app for a company. Fixed bugs and сreated reusable components for the company's UI Kit with React.Implemented Figma mock-up through working with SCSS.",
            `Implemented Lazy loading to decrease the initial loading time for applications.
            Developed unit tests using Jest. Used Git version control system, Jira, Confluence, Kanban board.`,
            `Participated as a speaker in regular internal trainings for a company's developers.

            Used Agile methodology for the development life cycle and followed the Scrum framework
            
            I’m currently working with ReactJS, TypeScript, MobX, and other technologies to create complex web apps.`,
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "ThirdWeb Pro Solutions",
        icon: thirdweb,
        iconBg: "#a2d2ff",
        date: "2022 - Present",
        points: [
            "Lead a team of 5 engineers to successfully develop an NFT marketplace and 2 AI apps as a part of a remote team following Agile and Scrum methodology.",
            "Communicated with clients and team in English (C1/proficient English level).",
            "Collaborated with cross-functional teams, including UX/UI designers, developers, and product managers, to translate business requirements into user-friendly and visually appealing frontend solutions.",
            "Optimized the performance of web applications, resulting in a 30% improvement in page load times and enhancing the overall user experience.",
            "Implemented strategies to improve Lighthouse metrics resulting in a 25% increase in Lighthouse scores across 2 projects.",
            "Increased the number of unit tests from 413 to 1217 because I was tired of bugs.",
            "Tech Stack: NextJS, TypeScript, Redux, Solidity, HardHat, TailwindCSS",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Full Stack ChatGPT Clone',
        description: 'Built with React, NodeJS and ChatGPT API.',
        link: 'https://github.com/DmitryVelichko/chat-gpt-clone-react-node',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'SaaS AI Companion',
        description: 'SaaS AI Companion with Next.js 13, React, Tailwind, Prisma, Stripe. ',
        link: 'https://github.com/DmitryVelichko/ai-companion-1.0',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'GoVegan Cafe Website',
        description: 'Restaurant Landing Page of a nice cafe in Georgia.',
        link: 'https://github.com/DmitryVelichko/go-vegan-cafe-website',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Personal Portfolio Website',
        description: 'Portfolio Website to showcase some of pet projects made to hone fullstack skills.',
        link: 'https://willcodeforfood.online/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'AI Image Generator',
        description: 'Played around with Image Generating API.',
        link: 'https://github.com/DmitryVelichko/ai-image-generator',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'MetaVerse Landing Page',
        description: 'Built with NextJS, Tailwind CSS and Framer Motion.',
        link: 'https://github.com/DmitryVelichko/metaverse-lp',
    }
];