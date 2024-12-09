var page = window.location.pathname.split("/").pop().split(".")[0];
var aux = window.location.pathname.split("/");
var to_build = (aux.includes('src') || aux.includes('docs') ?'../':'./');
var root = window.location.pathname.split("/")
if (!aux.includes("src")) {
  page = "dashboard";
}

if (document.querySelector("[dropdown-trigger]")) {
  loadJS(to_build + "assets/js/dropdown.js", true);
}
// if (document.querySelector("[navbar-main]") || document.querySelector("[navbar-profile]")) {
//   if (document.querySelector("aside")) {
//     loadJS(to_build + "assets/js/sidenav-burger.js", true);
//   }
// }

function loadJS(FILE_URL, async) {
  let dynamicScript = document.createElement("script");

  dynamicScript.setAttribute("src", FILE_URL);
  dynamicScript.setAttribute("type", "text/javascript");
  dynamicScript.setAttribute("async", async);

  document.head.appendChild(dynamicScript);
}


