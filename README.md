Movie Search Application

This is a simple React web application that allows users to search for movies, view movie details, and add movies to their favorites list.


Installation
Clone the repository or download the source code as a ZIP file and extract it.

Open your terminal or command prompt and navigate to the project directory.

Install the required dependencies by running the following command:

bash
Copy code
npm install
Usage
To start the application, use the following command:

bash
Copy code
npm start
This will start the development server, and the application will be accessible at http://localhost:3000 in your web browser.

The application consists of three main pages:

Search Page: The default landing page where users can search for movies by title. The search results will be displayed as movie cards, and users can click on a card to view the movie details. Users can also add a movie to their favorites list by clicking the "Add to favorites" button.

Movie Details Page: When users click on a movie card, they will be redirected to the movie details page, where they can see more information about the selected movie, including its plot, actors, genre, and IMDb rating.

Favorites Page: Users can access their favorites list by clicking on the heart icon in the header. The favorites page will display all the movies they have added to their favorites list. Users can remove a movie from the favorites list by clicking the "Remove from favorites" button.

Additional Notes
The application uses the OMDB API (Open Movie Database) to fetch movie data. The API key is already included in the code for demonstration purposes. However, in a production environment, it is recommended to keep sensitive information like API keys in environment variables for security.

The application uses React Router for navigation between different pages. The useNavigate hook is used to programmatically navigate to different routes.

The number of favorite movies is displayed next to the heart icon in the header. This number is updated dynamically when the user adds or removes movies from the favorites list.

The application uses Bootstrap for basic styling. The CSS files are included in the src/styles folder.

The Loading component is provided to display a loading spinner while fetching movie details.

The user's favorite movies are stored in the browser's localStorage, so they will persist even after the user closes the browser.

The application has been tested in modern web browsers. However, for the best experience, it is recommended to use the latest versions of browsers like Chrome, Firefox, or Edge.

This application is intended for demonstration purposes and may not be suitable for production use without further enhancements, such as error handling, data validation, and security measures.

Feel free to explore the codebase to understand how different components are connected and how state and props are managed throughout the application.

That's it! With these instructions, you should be able to run the Movie Search Application locally on your machine. Happy movie searching! 🎬