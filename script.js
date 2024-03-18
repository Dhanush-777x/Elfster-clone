let inputCount = 4;

function validateForm(event) {
  const nameInput = document.getElementById("name");
  const nameWarning = document.getElementById("nameWarning");
  if (nameInput.value.trim() === "") {
    nameWarning.style.display = "block";
    nameInput.style.borderColor = "#ff0000";
    nameInput.focus();
    event.preventDefault();
  } else {
    nameWarning.style.display = "none";
    nameInput.style.borderColor = "teal";
  }
}

function addNewNameInput() {
  const otherNamesContainer = document.querySelector(".other-names-container");
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.placeholder = `Enter Name ${inputCount + 1}`;
  otherNamesContainer.appendChild(newInput);
  inputCount++;
}
