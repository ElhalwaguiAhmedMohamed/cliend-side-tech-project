let currentUser = document.cookie.split("; ");
let cookieData = currentUser.map((info) => {
  return info.split("=");
});
console.log(cookieData);
let fnameData = "";
let lnameData = "";
let typeData = "";
let genderData = "";

cookieData.forEach((info) => {
  if (info[0] == "fname") {
    fnameData = info[1];
  } else if (info[0] == "lname") {
    lnameData = info[1];
  } else if (info[0] == "type") {
    typeData = info[1];
  } else if (info[0] == "gender") {
    genderData = info[1];
  }
});
console.log(fnameData, lnameData, typeData, genderData);

let username = document.getElementById("name");
username.innerText = `${fnameData} ${lnameData}`;

let type = document.getElementById("type");
type.innerText = typeData;

if (genderData == "male") {
  document.getElementById("userimg").src = "./extra/male.png";
} else {
  document.getElementById("userimg").src = "./extra/female.png";
}
