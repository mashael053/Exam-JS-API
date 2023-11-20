document.getElementById("btu").addEventListener("click", ()=>{
    let user= document.getElementById("user")
    let password = document.getElementById("password")
    let email = document.getElementById("email")

    let nameValid = /^[a-zA-Z ]$/ 
    let passwordValid = /^[A-Za-z]{7,}$/;
    let emailValid =  /^[a-zA-Z]+@\S.$/;

if (user.value === "" || password.value === "" || email.value===""){
    alert ("Value Empty");
  } else if (user.value != user.value.matche(nameValid)) {
    alert ("User name wrong")
  }
  else if (password.value != password.value.matche(passwordValid)) {
    alert ("password name wrong")
  }
  else if (email.value != email.value.matche(emailValid)) {
    alert ("email name wrong")
  } else {
    fetch('https://655270245c69a779032a08a1.mockapi.io/api/signup/mashael', {
        method: 'POST',
        body: JSON.stringify({
          user : user.value,
          password : password.value ,
          email : email.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then(() => {
            window.location.href = "login.html"
        });

  }
})
