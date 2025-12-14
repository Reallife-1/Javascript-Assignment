function registerUser() {

  let fullName = prompt("Full Name");

  if (fullName.length < 10) {
    alert("Full Name must not be empty and contain at least 10 words.");
    return;
  }

  let email = prompt("Email Address");

  if (!email.includes("@")) {
    alert("Email Address must follow a valid email format (e.g. example@gmail.com).");
    return;
  }

  let password = prompt("Password");

  if (password.length < 8) {
    alert("Password must be at least 8 characters, with one uppercase letter, one number, and one special character.");
    return;
  }

  let confirmPassword = prompt("Confirm Password");

  if (password.confirmPassword) {
    alert("Confirm Password must match the Password field.");
    return;
  }

  let age = prompt("Age");

  if (age < 18) {
    alert("Age must be 18 or older.");
    return;
  }

  alert("All inputs are valid.");
}

registerUser();
