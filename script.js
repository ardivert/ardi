function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Anda dapat menambahkan logika pengiriman formulir ke server di sini

  alert(
    "Form submitted!\nName: " +
      name +
      "\nEmail: " +
      email +
      "\nMessage: " +
      message
  );
}
