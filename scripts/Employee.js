class Employee {
  // #Fname;
  // #Lname;
  // #Email;
  // #Age;
  // #Address;
  // #UserName;
  // #Password;
  // #Type;
  // #Gender;
  constructor(
    _fname,
    _lname,
    _email,
    _age,
    _address,
    _username,
    _password,
    _type,
    _gender
  ) {
    this.Fname = _fname;
    this.Lname = _lname;
    this.Email = _email;
    this.Age = _age;
    this.Address = _address;
    this.UserName = _username;
    this.Password = _password;
    this.Type = _type;
    this.Gender = _gender;
  }
  // getUsername() {
  //   return this.#UserName;
  // }
  // getEmail() {
  //   return this.#Email;
  // }
  // getPassword() {
  //   return this.#Password;
  // }
  // getFname() {
  //   return this.#Fname;
  // }
  // getLname() {
  //   return this.#Lname;
  // }
  // getType() {
  //   return this.#Type;
  // }
}

export { Employee };
