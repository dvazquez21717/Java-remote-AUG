document.querySelector('form').onsubmit = formSubmit

function formSubmit (submitEvent) {
  var formProcessed = document.querySelector('form');
  setTimeout(function afterFiveSeconds(){
      formProcessed.innerHTML = "Form Processed"
  }, 5000)
  formProcessed.innerHTML = "Form Processing";

  submitEvent.preventDefault();
}
