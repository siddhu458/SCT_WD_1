document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    var phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message.trim() === '') {
        alert('Please enter a message.');
        return;
    }

    alert('Form submitted successfully!');
    this.submit();
});
