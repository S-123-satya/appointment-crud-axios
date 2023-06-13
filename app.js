// const axios = require('axios');
{/* <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> */}

function saveAppointment() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Create an appointment object
    var obj = {
    name: name,
    email: email,
    phone: phone
    };

            // // Check if local storage is supported by the browser
            // if (typeof(Storage) !== "undefined") {
            // // Retrieve existing appointments from local storage
            // var existingAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

            // // Add the new appointment
            // existingAppointments.push(appointment);

            // // Save the updated appointments back to local storage
            // localStorage.setItem("appointments", JSON.stringify(existingAppointments));

            // // Clear the form fields
            // document.getElementById("name").value = "";
            // document.getElementById("email").value = "";
            // document.getElementById("phone").value = "";

            // alert("Appointment saved successfully!");
            // } else {
            // alert("Sorry, your browser doesn't support local storage. Please upgrade to a modern browser.");
            // }
    axios.post("https://crudcrud.com/api/8b1db6d5262d4f4a9f186d34ec42474b/Appointment",obj)
    .then(resolve=>console.log(resolve))
    .catch(err=>{
        console.log(err);
    })
}
