let moon = document.querySelector(".moon");
let wrapper = document.querySelector(".wrapper");
let head_part = document.querySelector(".head_part");
let contener = document.querySelector("form");
let inp = document.querySelector("input");
let box = document.querySelector(".box");
let inf = document.querySelector(".information");
// let btn = document.getElementById("btn");
let static = document.querySelector(".statistics");
let icon = document.querySelector(".contact");
moon.addEventListener("click", () => {
  document.body.classList.toggle("body-dark");
  moon.classList.toggle("moon-dark");
  if (moon.className.split(" ")[1] == "moon-dark") {
    moon.innerHTML = `<h5 id="btndark">Light</h5> <img src="./img/sun.svg" alt="">`;
  } else {
    moon.innerHTML = `<h5 id="btndark">DARK</h5><img src="./img/moon.png" alt="" id="btnicon" />`;
  }
  console.log(moon.className);
  wrapper.classList.toggle("wrapper-dark");
  head_part.classList.toggle("head_part-dark");
  contener.classList.toggle("form-dark");
  inp.classList.toggle("input-dark");
  box.classList.toggle("box-dark");
  inf.classList.toggle("information-dark");
  icon.classList.toggle("contact-dark");
  static.classList.toggle("statistics-dark");
});
