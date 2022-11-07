

function checkPassowrds() {

  const passwordOne = document.getElementById('passwordOne');
  const passwordTwo = document.getElementById('passwordTwo');


  if (passwordOne.value != passwordTwo.value) {
    passwordOne.classList.add("passwordMismatch");
    passwordTwo.classList.add("passwordMismatch");
    return false;
  } else {
    passwordOne.classList.remove("passwordMismatch");
    passwordTwo.classList.remove("passwordMismatch");
    return true;
  }
}

function submit(e)
{
  console.log("sdfsdf")
  e.preventDefault();
  if(checkPasswords()){
    alert("Account Created")
  }
}