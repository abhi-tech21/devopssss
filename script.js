function sendMessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg").value;
  let result = document.getElementById("result");

  if (name === "" || email === "" || msg === "") {
    result.innerHTML = "⚠️ Please fill all fields.";
    result.style.color = "red";
  } else {
    result.innerHTML = "✔️ Message sent successfully!";
    result.style.color = "green";
  }
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
