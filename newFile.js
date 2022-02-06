var txt = document.getElementById("tx1")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var btn5 = document.getElementById("btn5")
var btn6 = document.getElementById("btn6")
var btn7 = document.getElementById("btn7")
var btn8 = document.getElementById("btn8")
var btn9 = document.getElementById("btn9")
var btn10 = document.getElementById("btn10")
var plus = document.getElementById("plus")
var moins = document.getElementById("moins")
var mult = document.getElementById("multilplication")
var div = document.getElementById("division")
var egale = document.getElementById("egale")
var vr = document.getElementById("vr")
var operation;
var operateura;
var operateurb;
btn1.addEventListener("click", (e) => {
    txt.value += btn1.value

})
btn2.addEventListener("click", (e) => {
    txt.value += btn2.value

})
vr.addEventListener("click", (e) => {
    txt.value += vr.value

})
btn3.addEventListener("click", (e) => {
    txt.value += btn3.value

})
btn4.addEventListener("click", (e) => {
    txt.value += btn4.value

})
btn5.addEventListener("click", (e) => {
    txt.value += btn5.value

})
btn6.addEventListener("click", (e) => {
    txt.value += btn6.value

})
btn7.addEventListener("click", (e) => {
    txt.value += btn7.value

})
btn8.addEventListener("click", (e) => {
    txt.value += btn8.value

})
btn9.addEventListener("click", (e) => {
    txt.value += btn9.value

})
btn10.addEventListener("click", (e) => {

    txt.value += btn10.value
})
plus.addEventListener("click", () => {
    txt.value += plus.value


})
moins.addEventListener("click", () => {
    txt.value += moins.value
})
mult.addEventListener("click", () => {

    txt.value += mult.value


})
div.addEventListener("click", () => {
    txt.value += div.value
})
egale.addEventListener("click", () => {
    var x = txt.value
    console.log(x)
    let y = eval(x)
    console.log(y)
    txt.value = y
})