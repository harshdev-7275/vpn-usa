function sendMail() {
  var xhttp = new XMLHttpRequest();
  var htmlBody, user_email, user_name, user_questions, data;
  user_name = document.getElementById("name").value;
  user_email = document.getElementById("email").value;
  user_questions = document.getElementById("questions").value;
  htmlBody = `Hi the following user has some questions regarding the app: <br> <strong>Name: </strong>${user_name}<br> <strong>Email: </strong>${user_email}<br> <strong>URL: </strong>${window.location.href}<br> <strong>Questions: </strong>${user_questions}`;
  data = {
    fromEmail: "appquery@freevpnapp.org",
    subject: "Query regarding our app.",
    body: "User has the some query regarding our app.",
    htmlBody: htmlBody,
    secret: "b3h0ldTh3w0rmh0l3",
    recipients: "support@freevpnapp.org",
  };

  $.post(
    "https://dashnet3.actmobile.com/api/dataplanes/send_mail_to_recipient",
    data,
    function (result) {
      if (result == "Status : ok ") {
        document.getElementById("contactform").reset();
        document.getElementById("alertSuccess").classList.remove("hide-alert");
        setTimeout(alertSucessDisplay, 3000);
      } else {
        document.getElementById("alertDanger").classList.remove("hide-alert");
        setTimeout(alertDangerDisplay, 3000);
      }
    }
  );
}

function alertSucessDisplay() {
  document.getElementById("alertSuccess").classList.add("hide-alert");
}

function alertDangerDisplay() {
  document.getElementById("alertDanger").classList.add("hide-alert");
}
