function style_me() {
    document.getElementById("button-style").style.backgroundColor = "#fdff32";
    document.getElementById("button-style").style.border = "thick solid #1cb981";
    document.getElementById("button-style").style.fontFamily = "Permanent Marker";
    document.getElementById("button-style").style.borderRadius = "25px";
  }

  function scientist_name() {
    var x = document.getElementById("sciName").value
    document.getElementById("text-box").innerHTML = "Excellent choice! " + x + " is a fantastic scientist!";

  }