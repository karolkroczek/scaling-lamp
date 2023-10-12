function isEmailValid(email) {
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  
  return emailPattern.test(email);
}


const dismissButton = document.querySelector("#dismiss-button");
const subscribeButton = document.querySelector("#subscribe-button");
const emailInput = document.querySelector("#email-input");
const inputContainer = document.querySelector(".input-container");

const mainContainer = document.querySelector(".main-container");
const successMessage = document.querySelector(".success-message");

dismissButton.addEventListener("click",()=>{
  successMessage.classList.toggle("hidden");
  mainContainer.classList.toggle("hidden");
})



subscribeButton.addEventListener("click",()=>{
  if(isEmailValid(emailInput.value)){
    successMessage.classList.toggle("hidden");
    mainContainer.classList.toggle("hidden");
    inputContainer.classList.remove("email-input-error");
  }
  else{
    inputContainer.classList.add("email-input-error");
  }
})