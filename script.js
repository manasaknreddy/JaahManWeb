
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  let bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Subject: ${subject.value}<br> Message: ${mess.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "manasaknreddy8765@gmail.com",
    Password: "DAEE544BE613ABDD2D162A67E666CB269C2E",
    To: 'manasaknreddy8765@gmail.com',
    From: "manasaknreddy8765@gmail.com",
    Subject: subject.value,
    Body: bodyMessage  // Use the concatenated bodyMessage variable here
  }).then(
    message => alert(message)
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});




