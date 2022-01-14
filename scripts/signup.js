import { Employee } from "./Employee.js";
import { Admin } from "./admin.js";
//debugger;
console.log(4);
let login = document.getElementById("login");
let signupForm = document.getElementById("signupform");

login.addEventListener("click", function () {
  location.href = "login.html";
});

if (
  localStorage.getItem("User") == undefined &&
  localStorage.getItem("Admins") == undefined
) {
  console.log(3);
  let users = [];
  let admins = [];
  let attendees = [];
  let late = [];
  localStorage.setItem("Users", JSON.stringify(users));
  localStorage.setItem("Admins", JSON.stringify(admins));
  localStorage.setItem("Attendees", JSON.stringify(attendees));
  localStorage.setItem("Late", JSON.stringify(late));
}

signupForm.onsubmit = function signUP() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let type = document.getElementById("type").value;
  //*defferntiate between admin and employee
  let registeredFlag = false;
  let username;
  let password;
  if (email.includes("@admin")) {
    //*admin*
    username = generateRandomUsername("admin");
    password = generateRandomPassword();
    let newAdmin = new Admin(
      fname,
      lname,
      email,
      age,
      address,
      username,
      password
    );

    let admins = JSON.parse(localStorage.getItem("Admins"));
    admins.forEach((admin) => {
      if (newAdmin.Email == admin.Email) {
        registeredFlag = true;
        //currentUser = user;
        document.getElementById("again").style.display = "block";
      }
    });
    if (!registeredFlag) {
      admins.push(newAdmin);
      localStorage.setItem("Admins", JSON.stringify(admins));
      sendEmail(email, username, password);
    }
  } else {
    //*employee*
    //*generating random username and pasword for each user*

    username = generateRandomUsername(fname);
    password = generateRandomPassword();
    let newEmp = new Employee(
      fname,
      lname,
      email,
      age,
      address,
      username,
      password,
      type,
      gender
    );

    let users = JSON.parse(localStorage.getItem("Users"));

    users.forEach((user) => {
      if (newEmp.Email == user.Email) {
        registeredFlag = true;
        document.getElementById("again").style.display = "block";
      }
    });
    if (!registeredFlag) {
      users.push(newEmp);
      localStorage.setItem("Users", JSON.stringify(users));
      sendEmail(email, username, password);
    }
  }
  return false; //*to stop the form from redirecting
};

function generateRandomUsername(name) {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let usernameLength = 4;
  let username = name;
  for (let i = 0; i <= usernameLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    username += chars.substring(randomNumber, randomNumber + 1);
  }

  return username;
}

function generateRandomPassword() {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let passwordLength = 12;
  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  return password;
}

function sendEmail(email, username, password) {
  Email.send({
    SecureToken: "ee766a03-bcf9-4bc7-aad2-a9b34196ccb7",
    To: "elhalwaguimohamed141@yahoo.com",
    From: `${email}`,
    Subject: "Your username and password to login",
    Body: `username = ${username} \n password = ${password} `,
  }).then((message) => console.log("mail has been sent sucessfully"));
  location.href = "login.html";
}
//export { employees };
