function welcome(firstName, lastName) {
  const fullName = firstName.concat(" ", lastName);

  function displayFullName() {
      alert("Welcome" + " " + fullName + "!");
  }
  displayFullName()
}
