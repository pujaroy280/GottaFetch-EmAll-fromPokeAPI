# Gotta Fetch 'Em All! Web Application

Welcome to the "Gotta Fetch 'Em All!" web application, where you can explore information about Pokémon fetched from the Poke API: https://pokeapi.co/docs/v2.

![image](https://github.com/pujaroy280/GottaFetch-EmAll-fromPokeAPI/assets/62675121/0ccba48a-b2d4-4042-b273-1f0e92d68e86)


# Objective
The purpose of this project is to create a web application using Vite as the build tool and either Fetch or Axios for making API calls. The application will allow users to fetch and display information about Pokémon from the Poke API. The fetched data will be presented using HTML.

# Requirements
1. Set up a new web application project using Vite. Make sure to install the necessary dependencies and set up the project structure.

2. Create a separate module to handle API calls. This module should export a function to fetch Pokémon data from the Poke API. The function should use the Async/Await syntax and return the data as JSON.

3. In the main.js file, import the API call function and use it to fetch Pokémon data.

4. Display the fetched data in the HTML file. Present at least the following information for each Pokémon:

# Pokémon name
Optionally, you can make additional API calls to get more information about each Pokémon.

# Getting Started
Follow these steps to run the web application:

```bash
// Navigate to the project directory:
cd your-repo

// Install dependencies:
npm install

// Run the application:
npm run dev
```
The application will be available at http://localhost:5173/.

# Usage
- Open the web application in your preferred web browser.
- Explore the Pokémon information fetched from the Poke API.

# Notes
- Make sure you have an internet connection as the application relies on the Poke API.
- Customize the number of Pokémon to display or other settings by modifying the API call in the main.js file.
