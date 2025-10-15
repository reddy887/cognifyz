// Select the button and container
const fetchButton = document.getElementById("fetchButton");
const apiData = document.getElementById("apiData");

// Function to fetch data from JSONPlaceholder
fetchButton.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      apiData.innerHTML = ""; // Clear previous content
      users.forEach((user) => {
        const userDiv = document.createElement("div");
        userDiv.style.border = "1px solid #ccc";
        userDiv.style.padding = "10px";
        userDiv.style.margin = "10px 0";
        userDiv.style.backgroundColor = "#f9f9f9";
        userDiv.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>City:</strong> ${user.address.city}</p>
                `;
        apiData.appendChild(userDiv);
      });
    })
    .catch((error) => {
      apiData.innerHTML = `<p style="color:red;">Error fetching data: ${error}</p>`;
    });
});
