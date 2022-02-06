let txt = document.getElementById("tx1")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")
let btn10 = document.getElementById("btn10")
let plus = document.getElementById("plus")
let moins = document.getElementById("moins")
let mult = document.getElementById("multilplication")
let div = document.getElementById("division")
let egale = document.getElementById("egale")
let vr = document.getElementById("vr")
let cl = document.getElementById("clear")
let clatb = document.getElementById("cleartab")
let operation;
let operateura;
let operateurb;
let tab = [];
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
    operateura = txt.value

    operation = "+"
    txt.value = ""

})
moins.addEventListener("click", () => {
    operateura = txt.value

    operation = "-"
    txt.value = ""

})
mult.addEventListener("click", () => {
    operateura = txt.value

    operation = "*"
    txt.value = ""

})
div.addEventListener("click", () => {
    operateura = txt.value

    operation = "/"
    txt.value = ""

})

function calcul(op, ops) {
    switch (operation) {
        case "+":
            return parseFloat(op) + parseFloat(ops)
        case "-":
            return parseFloat(op) - parseFloat(ops)
        case "*":
            return parseFloat(op) * parseFloat(ops)
        case "/":
            return (parseFloat(op) / parseFloat(ops)).toFixed(2)
    }
}

egale.addEventListener("click", () => {
    operateurb = txt.value
    console.log(operateurb)
    txt.value = ""
    txt.value = calcul(operateura, operateurb)
    tab.push(txt.value)



})
cl.addEventListener("click", () => {
    txt.value = ""

})
clatb.addEventListener("click", () => {
    tab.slice(2, 3)

})