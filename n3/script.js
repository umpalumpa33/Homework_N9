user_input = prompt("შეიყვანე სახელი: ");
if (user_input == "Admin") {
  password_input = prompt("შეიყვანე პაროლი: ");
  if (password_input == "TheMaster") {
    alert("Welcome");
  } else if (password_input == null || password_input == "") {
    alert("Canceled");
  } else if (password_input != "TheMaster") {
    alert("Wrong Password");
  }
} else if (user_input == null || user_input == "") {
  alert("Canceled");
} else if (user_input != "Admin") {
  alert("I don't know you");
}
