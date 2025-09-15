const label__id = document.querySelectorAll('label-query-id');

document.querySelectorAll('.input-query').forEach(input => {
  input.addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
    label__id.classList.add('focused');
  });
  input.addEventListener('blur', function() {
    this.parentElement.classList.remove('focused');
    label__id.classList.remove('focused');
  });
});

const form = document.getElementById('form');

form.addEventListener("submit", function(event){

  event.preventDefault();


  let isValid = true;

  const errorNameID = document.getElementById('errorName');
  const nombre = document.getElementById('name');
  console.log(nombre.value)
  if(nombre.value.trim() === ""){
    errorNameID.classList.add("active");
    isValid = false;
  }

  const errorLastNameID = document.getElementById("errorLastNameID");
  const segundoNombre = document.getElementById('lastName');
  if(segundoNombre.value.trim() === ""){
    errorLastNameID.classList.add("active");
    console.log("Si llega aqui")
    isValid = false;
  }

  const email = document.getElementById('email');
  if(email.value.trim() === ""){
    email.classList.add("error");
    email.nextElementSibling.textContent = "Please enter a valid email address";
    isValid = false;
  } else if(!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())){
    email.classList.add("error");
    email.nextElementSibling.textContent = "The email is not valid";
    isValid = false;
  }


  const constimiento = document.getElementById('input-consent');
  if(!constimiento.checked){
    constimiento.classList.add("error");
    constimiento.nextElementSibling.textContent = "To submit this form, please consent to being contacted";
    isValid = false;
  }

  if(isValid){

    form.submit();
  }

});

