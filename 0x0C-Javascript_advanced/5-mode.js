function changeMode(size, weight, transform, background, color) {
  return function () {
      document.body.style.fontSize = size;
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  document.body.insertAdjacentHTML("beforeend", "<p>Welcome Holberton!</p>");

  function newButton(text, mode) {
      const button = document.createElement("button");
      button.innerHTML = text;
      document.body.appendChild(button);

      button.addEventListener("click", () => {
          mode();
        });
  }
  newButton("Spooky", spooky);
  newButton("Dark mode", darkMode);
  newButton("Scream mode", screamMode)
}

main();
