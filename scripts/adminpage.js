let table = document.getElementsByTagName("tbody")[0];

let currentAdmin = document.cookie.split("; ");
let cookieData = currentAdmin.map((info) => {
  return info.split("=");
});

let fnameData = "";
let lnameData = "";

cookieData.forEach((info) => {
  if (info[0] == "fname") {
    fnameData = info[1];
  } else if (info[0] == "lname") {
    lnameData = info[1];
  }
});

let name = document.getElementById("name");
name.innerText = `${fnameData} ${lnameData}`;
console.log(name);

let allusers = JSON.parse(localStorage.getItem("Users"));
let attendees = JSON.parse(localStorage.getItem("Attendees"));
let late = JSON.parse(localStorage.getItem("Late"));

//*sorting tables ascending and descinding
$(":button").click(function () {
  let rows = $("tbody>tr");
  let rowsArr = [...rows];
  rowsArr.shift();
  if (this.id == "sortasc") {
    rowsArr.sort((tr1, tr2) => {
      if (tr1.children[0].innerText > tr2.children[0].innerText) {
        return 1;
      } else if (tr1.children[0].innerText < tr2.children[0].innerText) {
        return -1;
      } else {
        return 0;
      }
    });
    $.each(rowsArr, function (index, row) {
      table.append(row);
    });
  } else if (this.id == "sortdesc" && table.rows.length > 1) {
    rowsArr.sort((tr1, tr2) => {
      if (tr1.children[0].innerText > tr2.children[0].innerText) {
        return -1;
      } else if (tr1.children[0].innerText < tr2.children[0].innerText) {
        return 1;
      } else {
        return 0;
      }
    });
    $.each(rowsArr, function (index, row) {
      table.append(row);
    });
  }
});

$("#selections>.select").click(function () {
  if (this.id == "all") {
    //*to delete old row values
    for (let i = table.rows.length - 1; i >= 1; i--) {
      table.deleteRow(i);
    }

    allusers.forEach((user) => {
      $("#data").append(
        `<tr><td>${user.UserName}</td><td>${user.Fname} ${user.Lname}</td> <td>${user.Email}</td><td>${user.Address}</td><td>${user.Age}</td><td>${user.Gender}</td><td>${user.Type}</td></tr>`
      );
    });
  } else if (this.id == "full") {
    //*to delete old row values
    for (let i = table.rows.length - 1; i >= 1; i--) {
      table.deleteRow(i);
    }

    attendees.forEach((attendent) => {
      $("#data").append(
        `<tr><td>${attendent.UserName}</td><td>${attendent.Fname} ${attendent.Lname}</td> <td>${attendent.Email}</td><td>${attendent.Address}</td><td>${attendent.Age}</td><td>${attendent.Gender}</td><td>${attendent.Type}</td></tr>`
      );
    });
  } else if (this.id == "late") {
    for (let i = table.rows.length - 1; i >= 1; i--) {
      table.deleteRow(i);
    }

    late.forEach((user) => {
      $("#data").append(
        `<tr><td>${user.UserName}</td><td>${user.Fname} ${user.Lname}</td> <td>${user.Email}</td><td>${user.Address}</td><td>${user.Age}</td><td>${user.Gender}</td><td>${user.Type}</td></tr>`
      );
    });
  }
});
