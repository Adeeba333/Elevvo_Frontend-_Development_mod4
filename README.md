# User Directory Dashboard

A dynamic User Directory Dashboard built with HTML, CSS, and JavaScript. The application fetches user profiles from the JSONPlaceholder API and displays them in organized cards with loading and error states.

##  Project Overview

The purpose of this project is to practice asynchronous JavaScript, API integration, and DOM manipulation by retrieving user information from a public API and displaying it dynamically in a web interface.

##  Features

- **API Integration:** Fetches user data from the JSONPlaceholder API.
- **Async/Await:** Handles asynchronous requests using modern JavaScript.
- **Dynamic User Cards:** Displays each user's name, email address, and company name.
- **Loading State:** Shows a loading message while user data is being retrieved.
- **Error Handling:** Uses `try/catch` to handle request failures and display an error message.
- **Responsive Layout:** Uses CSS Flexbox to arrange user cards neatly.

##  Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- JSONPlaceholder API

##  Project Structure

```text
user-directory-dashboard/
├── index.html
├── style.css
├── script.js
└── problem statement.md
```

##  Getting Started

### Prerequisites

- A modern web browser
- Visual Studio Code (recommended)
- Live Server extension (recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Adeeba333/user-directory-dashboard.git
   ```

2. Open the project folder in Visual Studio Code.

3. Run `index.html` using Live Server or open it directly in your browser.

4. Ensure you have an internet connection so the application can retrieve data from the API.

##  API Reference

**Endpoint:** `https://jsonplaceholder.typicode.com/users`

The application retrieves a list of sample users in JSON format. Each profile includes a name, email address, and company information.

##  Error Handling Test

To test the error-handling functionality:

1. Open `script.js`.
2. Temporarily change the API URL from `/users` to `/userss`.
3. Save the file and refresh the page.
4. Verify that the loading message disappears and an error message is displayed.

Restore the correct URL after testing.

##  Learning Outcomes

- Working with the Fetch API and HTTP responses.
- Understanding `async/await` and `try/catch`.
- Processing JSON data.
- Creating HTML elements dynamically with JavaScript.
- Managing loading and error states in the DOM.
- Organizing a simple frontend project.

##  Author

**Mahmuda Adeeba Tul Husna**


##  License

This project was developed for learning and internship practice. No separate license has been specified.