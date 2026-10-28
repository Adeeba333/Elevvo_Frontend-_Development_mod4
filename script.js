// The API address.
// TO TEST THE ERROR MESSAGE: change "users" to "userss" (extra "s") and refresh the page.
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Grab the elements from the HTML
const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("error");
const userContainer = document.getElementById("user-container");

// Fetch the users from the API
async function fetchUsers() {
    try {
        const response = await fetch(API_URL);

    // fetch() does NOT throw an error for a wrong URL (404), so we check it ourselves
    if (!response.ok) {
        throw new Error("Server responded with status " + response.status);
    }

    const users = await response.json();
    renderUsers(users);
} catch (error) {
    console.error(error);
    errorElement.textContent = "Sorry, we could not load the users. Please try again later.";
    errorElement.classList.remove("hidden");
} finally {
    // Runs in both cases (success or failure): hide the loading text
    loadingElement.classList.add("hidden");
}
}

// Build one card for each user and add it to the page
function renderUsers(users) {
    users.forEach(function (user) {
        const card = document.createElement("div");
        card.classList.add("user-card");

    card.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
    `;

    userContainer.appendChild(card);
});
}

// Start everything
fetchUsers();