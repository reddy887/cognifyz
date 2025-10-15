// Interactive Button
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// API Fetch
const fetchButton = document.getElementById("fetchButton");
const apiData = document.getElementById("apiData");

fetchButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      apiData.innerHTML = "";
      users.forEach((user) => {
        const div = document.createElement("div");
        div.className = "col-md-4 user-card";
        div.innerHTML = `
                    <h5>${user.name}</h5>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>City:</strong> ${user.address.city}</p>
                `;
        apiData.appendChild(div);
      });
    })
    .catch((err) => {
      apiData.innerHTML = `<p class="text-danger">Error fetching data: ${err}</p>`;
    });
});

// Form Validation
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  feedback.style.color = "red";
  feedback.innerHTML = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const message = document.getElementById("message").value.trim();
  let errors = [];

  if (name.length < 3) errors.push("Name must be at least 3 characters long.");
  if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email))
    errors.push("Enter a valid email.");
  if (isNaN(age) || age < 1 || age > 120)
    errors.push("Age must be between 1 and 120.");
  if (message.length < 10)
    errors.push("Message must be at least 10 characters.");

  if (errors.length > 0) {
    feedback.innerHTML = errors.join("<br>");
  } else {
    feedback.style.color = "green";
    feedback.innerHTML = "Form submitted successfully!";
    form.reset();
  }
});
