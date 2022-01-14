let loginForm = document.querySelector("form");
console.log(loginForm);
loginForm.onsubmit = function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let flag = false;

  let users = JSON.parse(localStorage.getItem("Users"));
  users.forEach((user) => {
    if (user.UserName == username && user.Password == password) {
      flag = true;
      createCookie(user);
      if (user.Type == "Security") {
        location.href = "attendance.html";
      } else {
        location.href = "userhome.html";
      }
    }
  });

  let admins = JSON.parse(localStorage.getItem("Admins"));
  admins.forEach((admin) => {
    if (admin.UserName == username && admin.Password == password) {
      flag = true;
      createCookie(admin);
      location.href = "adminpage.html";
    }
  });

  if (flag == false) {
    document.getElementById("again").style.display = "block";
  }
  return false; //*prevent the default form action of refreshing
};

function createCookie(user) {
  let now = new Date();

  now.setTime(now.getTime() + 8 * 3600 * 1000);
  document.cookie = "username=" + user.UserName;
  document.cookie = "fname=" + user.Fname;
  document.cookie = "lname=" + user.Lname;
  document.cookie = "type=" + user.Type;
  document.cookie = "gender=" + user.Gender;
  document.cookie = "expires=" + now.toUTCString() + ";";
}
