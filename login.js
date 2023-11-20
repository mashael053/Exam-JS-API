document.getElementById("btu").addEventListener("click", ()=> {
    document.getElementById("username").value
    document.getElementById("password").value
    if (username.value === "" || password.value === ""){
       console.log("mashael")
       alert ("Value Empty"); 
       } else {
           fetch('https://655270245c69a779032a08a1.mockapi.io/api/signup/mashael')
     .then((response) => response.json())
     .then((data) => {

        let findUser = data.find(d) = d.username = username.value 
        if(!findUser) {
            alert ("not find user")
        }
        else (password != findUser.password);{
            alert ("password wrong")
        }
        localStorage.setItem ("user", username.value)
        window.location.href = "contact.html"

        }
       )}
     })

    

    



