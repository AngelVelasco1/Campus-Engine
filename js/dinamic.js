// script llenado dinamico
// script accordion

// script servicios
let showButton1 = document.querySelector(".showButton1");
let showButton2 = document.querySelector(".showButton2");
let showButton3 = document.querySelector(".showButton3");
let showButton4 = document.querySelector(".showButton4");

let table1 = document.querySelector(".hidden-table1")
let table2 = document.querySelector(".hidden-table2")
let table3 = document.querySelector(".hidden-table3")
let table4 = document.querySelector(".hidden-table4")

let close1 = document.querySelector(".close");
let close2 = document.querySelector(".close2");

let close3 = document.querySelector(".close3");

let close4 = document.querySelector(".close4");


showButton1.addEventListener("click", (e) => {
    table1.style.display = "block";
})
showButton2.addEventListener("click", (e) => {
    table2.style.display = "block";
})
showButton3.addEventListener("click", (e) => {
    table3.style.display = "block";
})
showButton4.addEventListener("click", (e) => {
    table4.style.display = "block";
});
close1.addEventListener("click", (e) => {
    table1.style.display = "none";
})
close2.addEventListener("click", (e) => {
    table2.style.display = "none";
})
close3.addEventListener("click", (e) => {
    table3.style.display = "none";
})
close4.addEventListener("click", (e) => {
    table4.style.display = "none";
})
