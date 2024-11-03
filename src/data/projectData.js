const projectData = [
    {
        id: 1,
        title: "Drone Production Orchestrator",
        description: "This was a semester project where we built a software system, that orchestrates a production line by coordinating an AGV, a Warehouse and an Assembly station." +
        "The system is able to receive commands and monitor the production status. All this is done through an interface designed for the production manager.",
        image: require('../assets/dronedudes.png'),
        technologies: [
            { name: "Java", icon: require("../assets/java.png") },
            { name: "Spring", icon: require("../assets/spring-boot.png") },
            { name: "Angular", icon: require("../assets/angular.png") },
            { name: "TypeScript", icon: require("../assets/typescript.png") },
            { name: "Docker", icon: require("../assets/docker.png") },
            { name: "Tailwind CSS", icon: require("../assets/tailwind.png") },
          ],
          github: "https://github.com/DroneDudes/SEMPRO4/tree/Final-Application",
    },
    {
        id: 2,
        title: "Beer Brewing Machine",
        description: "We developed a software system for a beer brewing machine. The system is able to handle production commands, monitor the brewing status and provide a user interface for the brewmaster.",
        image: require('../assets/beerbros.png'),
        technologies: [
            { name: "Java", icon: require("../assets/java.png") },
            { name: "Spring", icon: require("../assets/spring-boot.png") },
            { name: "HTML5", icon: require("../assets/html.png") },
            { name: "CSS3", icon: require("../assets/css.png") },
            { name: "JavaScript", icon: require("../assets/javascript.png") },
            { name: "Docker", icon: require("../assets/docker.png") },
            { name: "PostgreSQL", icon: require("../assets/postgresql.png") },
          ],
          github: "https://github.com/BeerBrewersSem3/SEMPRO3/tree/EXAM-OPCUA_ErrorHandling",
    },
    {
        id: 3,
        title: "Level Up Library",
        description: "A web application where registered users can write reviews and rate games. Guests can only view the reviews and ratings. The application is built with Laravel, HTML, CSS and PostgreSQL." + 
        "The application was another semester project, but we were all tasked with building an individual extension to the application. I implemented some validation and errors handling when submitting reviews.",
        image: require('../assets/lul.png'),
        technologies: [
            { name: "Laravel", icon: require("../assets/laravel.png") },
            { name: "HTML5", icon: require("../assets/html.png") },
            { name: "CSS3", icon: require("../assets/css.png") },
            { name: "JavaScript", icon: require("../assets/javascript.png") },
            { name: "PostgreSQL", icon: require("../assets/postgresql.png") },
          ],
          github: "https://github.com/andy-the-ape/Level-Up-Library-Webtechnologies-SDU",
    },
    {
        id: 4,
        title: "Product Information Management System",
        description: "My team and I, created a product information management system for a fictional company. The PIM was part of a full e-commerse system where other groups created the other parts of the system." +
        " The system is able to add, edit, delete and view products and has a search function that can search for products based on a search query.",
        image: require('../assets/pim.png'),
        technologies: [
            { name: "Java", icon: require("../assets/java.png") },
            { name: "CSS3", icon: require("../assets/css.png") },
            { name: "PostgreSQL", icon: require("../assets/postgresql.png") },
          ],
          github: "https://gitlab.sdu.dk/f23-2-semester-project/class-4/e-commerce-prototype/-/tree/PIMToMain",
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my projects, skills, and experiences as a software engineering student. Built with modern web technologies, "+
        "it features interactive elements and a responsive design to highlight my work and achievements effectively.",
        image: require('../assets/portfolio.png'),
        technologies: [
            { name: "HTML5", icon: require("../assets/html.png") },
            { name: "CSS3", icon: require("../assets/css.png") },
            { name: "JavaScript", icon: require("../assets/javascript.png") },
            { name: "React", icon: require("../assets/react.png") },
          ],
          github: "https://gitlab.sdu.dk/f23-2-semester-project/class-4/e-commerce-prototype/-/tree/PIMToMain",
    }
];
export default projectData; 