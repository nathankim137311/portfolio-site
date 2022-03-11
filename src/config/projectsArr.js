import legoCloneHome from '../assets/png/lego-clone-home.png';
import starWarsApiImg from '../assets/png/lego-star-wars-api.png';
import weatherAppImg from '../assets/png/weather-app.png';
import restaurantSiteImg from '../assets/png/korean-street.png';
import discordLogo from '../assets/png/discord_logo.png'
import todoImg from '../assets/png/todo.png'

export const projects = [
    {
        id: 1,
        title: 'Lego Shop',
        query: 'lego-clone',
        img_url: legoCloneHome,
        tech: 'MongoDB | Express | React | Node | Git | TailwindCSS',
        live_url: 'https://lego-clone.herokuapp.com/',
        github_url: 'https://github.com/nathankim137311/lego-store',
        type: 'E-COMMERCE',
        description: 'An e-commerce application that has all the features you would want!'
    },
    {
        id: 2,
        title: 'Lego Star Wars API',
        query: 'lego-star-wars-api',
        img_url: starWarsApiImg,
        tech: 'MongoDB | Express | Node | Git | Postman',
        live_url: 'https://rapidapi.com/nathankim137311/api/lego-star-wars-sets/',
        github_url: 'https://github.com/nathankim137311/lego-starwars-api',
        type: 'REST API',
        description: 'A RESTful API that serves product data from Lego.com.'
    },
    {
        id: 3,
        title: 'Weather App',
        query: 'weather-app',
        img_url: weatherAppImg,
        tech: 'HTML | SCSS | JavaScript | Git | Postman',
        live_url: 'https://nathankim137311.github.io/weather-app/',
        github_url: 'https://github.com/nathankim137311/weather-app',
        type: 'SPA',
        description: 'A simple weather app that fetches current weather forecast based on city.'
    },
    {
        id: 4, 
        title: 'Restaurant Site',
        query: 'restaurant-site',
        img_url: restaurantSiteImg,
        tech: 'HTML | SCSS | JavaScript | Git | Webpack',
        live_url: 'https://nathankim137311.github.io/restaurant-page/',
        github_url: 'https://github.com/nathankim137311/restaurant-page',
        type: 'MPA',
        description: 'A custom-designed restaurant site that utilizes Google Maps API.'
    },
    {
        id: 5,
        title: 'Smash Bot',
        query: 'smash-bot',
        img_url: discordLogo,
        tech: 'JavaScript | Node | Docker | SQL | Git | Postman',
        live_url: '',
        github_url: 'https://github.com/nathankim137311/LiquidHacksBot',
        type: 'BOT',
        description: 'A game that allows players to fight with their favorite smash characters against their friends.'
    },
    {
        id: 6,
        title: 'Todo App',
        query: 'todo-app',
        img_url: todoImg,
        tech: 'HTML | SCSS | JavaScript | Git | Webpack',
        live_url: 'https://nathankim137311.github.io/todo-app',
        github_url: 'https://github.com/nathankim137311/todo-app',
        type: 'SPA',
        description: 'An amped up Todo List dashboard. Users can perform basic CRUD operations.'
    }
]