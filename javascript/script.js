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