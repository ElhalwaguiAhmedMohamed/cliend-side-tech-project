let attendForm = document.getElementsByTagName("form")[0];

attendForm.onsubmit = function () {
  let username = document.getElementById("username").value;
  let users = JSON.parse(localStorage.getItem("Users"));
  let attendees = JSON.parse(localStorage.getItem("Attendees"));
  let late = JSON.parse(localStorage.getItem("Late"));
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let flag = false;
  attendees.forEach((attendee, index) => {
    if (attendee.UserName == username) {
      attendees.splice(index, 1);
      late.forEach((lateEmp, index) => {
        if (lateEmp.UserName == username) {
          late.splice(index, 1);
        }
      });
      flag = true;
    }
  });
  if (flag == false) {
    //employee didn't register yet
    users.forEach((user) => {
      if (user.UserName == username) {
        if (minutes > 30 || hour > 7) {
          late.push(user);
          attendees.push(user);
          localStorage.setItem("Late", JSON.stringify(late));
          localStorage.setItem("Attendees", JSON.stringify(attendees));
        } else {
          attendees.push(user);
          localStorage.setItem("Attendees", JSON.stringify(attendees));
        }
      }
    });
  }
  localStorage.setItem("Late", JSON.stringify(late));
  localStorage.setItem("Attendees", JSON.stringify(attendees));

  return false; //* to prevent default behaviour of a form
};
