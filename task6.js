// Select form and feedback container
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous feedback
  feedback.innerHTML = "";

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const message = document.getElementById("message").value.trim();

  let errors = [];

  // Name validation
  if (name.length < 3) {
    errors.push("Name must be at least 3 characters long.");
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errors.push("Please enter a valid email address.");
  }

  // Age validation
  if (isNaN(age) || age < 1 || age > 120) {
    errors.push("Please enter a valid age between 1 and 120.");
  }

  // Message validation
  if (message.length < 10) {
    errors.push("Message must be at least 10 characters long.");
  }

  // Display errors or success message
  if (errors.length > 0) {
    feedback.innerHTML = errors.join("<br>");
  } else {
    feedback.style.color = "green";
    feedback.innerHTML = "Form submitted successfully!";
    form.reset(); // Clear form fields
  }
});
