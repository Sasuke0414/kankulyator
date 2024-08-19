const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function myFunction() {
  var x = document.getElementById("myInput");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");

  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}

function myFunction1() {
  var a = document.getElementById("myInput1");
  var b = document.getElementById("hide3");
  var c = document.getElementById("hide4");

  if (a.type === "password") {
    a.type = "text";
    b.style.display = "block";
    c.style.display = "none";
  } else {
    a.type = "password";
    b.style.display = "none";
    c.style.display = "block";
  }
}
