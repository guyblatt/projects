function generatePassword() {
  // Variables for the password options
  var length = 8,
      lowercase = "abcdefghijklmnopqrstuvwxyz",
      uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers = "0123456789",
      special = "!@#%^&*()_+";

  // Concatenate all the character sets
  var characters = lowercase + uppercase + numbers + special;

  // Initialize the password variable
  var password = "";

  // Generate a random index and use it to select a character from the characters string
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * characters.length);
    password += characters.charAt(index);
  }

  // Display the generated password
  document.getElementById("password").innerHTML = password;
}
