let neptunCode = sessionStorage.getItem("neptunCode");

if (!neptunCode) {
  neptunCode = prompt("Add meg a Neptun kódodat:");
  sessionStorage.setItem("neptunCode", neptunCode);
}

const NEPTUN_CODE = neptunCode;

function loadNavigation() {
  fetch("nav.html")
    .then((res) => res.text())
    .then((navHtml) => {
      const body = document.querySelector("body");
      body.insertAdjacentHTML("afterbegin", navHtml);
    })
    .catch((err) => console.error(err));
}

loadNavigation();
