import meowPopImg from "../assets/projects/meowpop.png";
import blogWogimg from "../assets/projects/blogwog.png";
import cattagramImg from "../assets/projects/cattagram.png";
import mentalMeImg from "../assets/projects/mentalme.png";
import weatherWatcherImg from "../assets/projects/weatherwatcher.png";
import etchASketchImg from "../assets/projects/etchasketch.png";
import oldMacsFarmImg from "../assets/projects/oldmacsfarm.png";
import catJokesImg from "../assets/projects/cat-jokes.png";
import pastdesertsImg from "../assets/projects/pastdeserts.png";
import firstlandingImg from "../assets/projects/firstlanding.png";
import discordPortfolioImg from "../assets/projects/discordportfolio.png";
// File to hold all of my projects
export interface Project {
    name: string;
    description: string;
    githubLink: string;
    liveSiteLink: string;
    image: string;
    tools: string[];
}

export const projects: Project[] = [
    {
        name: "MeowPop",
        description: "An e-commerce cat website where users can browse and purchase items. Users can also apply to become vendors and create product listings.",
        githubLink: "https://github.com/pauleenaphan/Meow-Pop",
        liveSiteLink: "https://main--meowpop.netlify.app/",
        image: meowPopImg, // Replace with the correct path to the image
        tools: ["MongoDb", "Express.js", "React", "Node.js", "Typescript", "Amazon S3"]
    },
    {
        name: "BlogWog",
        description: "A blog site where users can browse various posts. Registered users can log in to leave comments on posts.",
        githubLink: "https://github.com/pauleenaphan/blog-api",
        liveSiteLink: "https://main--blogwog.netlify.app/",
        image: blogWogimg, // Replace with the correct path to the image
        tools: ["MongoDb", "Express.js", "React", "Node.js"]
    },
    {
        name: "Mental Me",
        description: "A mental wellness mobile app that focuses on journaling. Moobie, our mascot, supports and guides users on their journaling journey.",
        githubLink: "https://github.com/pauleenaphan/MentalMe",
        liveSiteLink: "https://expo.dev/preview/update?message=fixed%20styling&updateRuntimeVersion=1.0.0&createdAt=2024-05-07T05%3A25%3A18.090Z&slug=exp&projectId=d55f227c-6164-4fc5-ac60-040c4b42bad2&group=f55c8b6c-df7a-4874-9605-f10a26a3b534",
        image: mentalMeImg, // Replace with the correct path to the image
        tools: ["React Native", "Firebase", "Expo"]
    },
    {
        name: "cat-jokes",
        description: "I created my first npm package that allows users to retrieve cat jokes. Through this project, I learned the process of creating and publishing an npm package",
        githubLink: "https://github.com/pauleenaphan/cat-jokes",
        liveSiteLink: "https://www.npmjs.com/package/cat-jokes?activeTab=readme",
        image: catJokesImg,
        tools: ["Javascript"]
    },
    {
        name: "Old Mac's Farm",
        description: "A live global chat that allows users to send messages only using the letters E, I and O",
        githubLink: "https://github.com/pauleenaphan/Old-Mac-s-Chat",
        liveSiteLink: "https://oldmacschat.netlify.app/",
        image: oldMacsFarmImg,
        tools: ["Typescript", "React", "Express.js", "Node.js", "Socket.IO"]
    },
    {
        name: "Cattagram",
        description: "A social media web app that focuses on cats. Users can view and post pictures of their cats and add other users as friends.",
        githubLink: "https://github.com/pauleenaphan/Cattagram",
        liveSiteLink: "https://cattagram.netlify.app/",
        image: cattagramImg, // Replace with the correct path to the image
        tools: ["HTML", "CSS", "React", "Javascript", "Firebase"]
    },
    {
        name: "Third Porfolio Site",
        description: "Third portfolio site as a discord profile. Mobile friend and compact",
        githubLink: "https://github.com/pauleenaphan/portfolio3.0",
        liveSiteLink: "https://pauleenaphan.netlify.app/",
        image: discordPortfolioImg,
        tools: ["Typescript", "CSS"]
    },
    {
        name: "First Landing",
        description: "A collection of landing pages that I made to help me practice and learn new frontend technologies",
        githubLink: "https://github.com/pauleenaphan/first-landing/tree/main",
        liveSiteLink: "https://firstlandings.netlify.app/",
        image: firstlandingImg,
        tools: ["React", "CSS"]
    },
    {
        name: "Past-Deserts",
        description: "A website that tracks my baking journey starting near the end of 2024.",
        githubLink: "https://github.com/pauleenaphan/past-deserts",
        liveSiteLink: "https://past-deserts.netlify.app/",
        image: pastdesertsImg,
        tools: ["React", "CSS", "Firebase"]
    },
    {
        name: "Weather Watcher",
        description: "A weather page that allows users to enter a city to find the weather conditions in that area. This project uses a weather API.",
        githubLink: "https://github.com/pauleenaphan/weather-app",
        liveSiteLink: "https://pauleenaphan.github.io/weather-app/src/index.html",
        image: weatherWatcherImg, // Replace with the correct path to the image
        tools: ["HTML", "Tailwind CSS", "Javascript", "Weather API"]
    },
    {
        name: "Etch-a-Sketch",
        description: "Users can draw on a resizable grid with the color of their choice.",
        githubLink: "https://github.com/pauleenaphan/Etch-a-Sketch",
        liveSiteLink: "https://pauleenaphan.github.io/Etch-a-Sketch/",
        image: etchASketchImg, // Replace with the correct path to the image
        tools: ["HTML", "CSS", "Javascript"]
    },
];
