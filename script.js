function showMessage() {
    let name = document.getElementById("name").value;
    let msg = document.getElementById("message");

    if (name === "") {
        msg.innerHTML = "⚠️ Please enter your name!";
        msg.style.color = "red";
    } else {
        msg.innerHTML = "✔️ Thank you, " + name + "! I will contact you soon.";
        msg.style.color = "green";
    }
}
