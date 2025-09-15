document
  .querySelectorAll(
    ".errorName, .errorLastName, .errorEmail, .errorQuery, .errorMessage, .errorConsent"
  )
  .forEach((e) => (e.style.display = "none"));

const label__id = document.querySelectorAll("label-query-id");

document.querySelectorAll(".input-query").forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.classList.add("focused");
    label__id.classList.add("focused");
  });
  input.addEventListener("blur", function () {
    this.parentElement.classList.remove("focused");
    label__id.classList.remove("focused");
  });
});

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  const errorNameID = document.getElementById("errorName__id");
  const nombre = document.getElementById("name");
  if (nombre.value.trim() === "") {
    errorNameID.style.display = "block";
    isValid = false;
  } else {
    errorNameID.style.display = "none";
  }

  const errorLastNameID = document.getElementById("errorLastName__id");
  const segundoNombre = document.getElementById("lastName");
  if (segundoNombre.value.trim() === "") {
    errorLastNameID.style.display = "block";
    isValid = false;
  } else {
    errorLastNameID.style.display = "none";
  }

  const errorEmail = document.getElementById("errorEmail__id");
  const email = document.getElementById("email");
  if (email.value.trim() === "") {
    errorEmail.style.display = "block";
    isValid = false;
  } else if (
    !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())
  ) {
    errorEmail.style.display = "block";
    isValid = false;
  } else {
    errorEmail.style.display = "none";
  }

  const errorQuery = document.getElementById("errorQuery__id");
  const queryChecked = document.querySelector(
    'input[name="queryType"]:checked'
  );
  if (!queryChecked) {
    errorQuery.style.display = "block";
    isValid = false;
  } else {
    errorQuery.style.display = "none";
  }

  const errorTextArea = document.getElementById("errorMessage__id");
  const textArea = document.getElementById("message-id");
  if (textArea.value.trim() === "") {
    errorTextArea.style.display = "block";
    isValid = false;
  } else {
    errorTextArea.style.display = "none";
  }

  const errorConsent = document.getElementById("errorConsent__id");
  const constimiento = document.querySelector(".input-consent");
  if (!constimiento.checked) {
    errorConsent.style.display = "block";
    isValid = false;
  } else {
    errorConsent.style.display = "none";
  }

  if (isValid) {
    const mensaje = document.getElementById("sent-container__id");
    mensaje.style.display = "block";
    setTimeout(() => {
      mensaje.style.display = "none";
      setTimeout(() => form.submit(), 1000)
    }, 3000);
  }
});


//Si hay error mostrando que falta esa informacion y se clickea el input, quita el error
document.getElementById("name").addEventListener("input", () => {
  document.getElementById("errorName__id").style.display = "none";
});
document.getElementById("lastName").addEventListener("input", () => {
  document.getElementById("errorLastName__id").style.display = "none";
});
document.getElementById("email").addEventListener("input", () => {
  document.getElementById("errorEmail__id").style.display = "none";
});
document.getElementById("message-id").addEventListener("input", () => {
  document.getElementById("errorMessage__id").style.display = "none";
});
document.querySelectorAll('input[name="queryType"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    document.getElementById("errorQuery__id").style.display = "none";
  });
});
document.querySelector(".input-consent").addEventListener("change", () => {
  document.getElementById("errorConsent__id").style.display = "none";
});
