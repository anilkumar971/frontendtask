document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;
  
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      password: password
    };
  
    console.log(formData);
  
    if (validateForm()) {
      alert("Form Submitted Successfully");
    }
  });
  
  function validateForm() {
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;
  
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert("Phone number must be 10 digits");
      return false;
    }
  
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return false;
    }
  
    return true;
  }
  