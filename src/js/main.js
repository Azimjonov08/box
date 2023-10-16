

let elBox = document.getElementById("box")
let elInput = document.getElementById ("input")
let elInput1 = document.getElementById("input1")
let elInput2 = document.getElementById("input2")
let elInput3 = document.getElementById("input3")
let elInput4 = document.getElementById("input4")
let elInput5 = document.getElementById("input5")
let elInput6 = document.getElementById("input6")
let elInput7 = document.getElementById("input7")

elInput.addEventListener("input", function() {
    elBox.style.borderRadius = elInput.value + "px"
})

elInput1.addEventListener("input", function() {
    elBox.style.borderTopLeftRadius = elInput1.value + "px"
})

elInput2.addEventListener("input", function() {
    elBox.style.borderTopRightRadius = elInput2.value + "px"
})

elInput3.addEventListener("input", function() {
    elBox.style.borderBottomRightRadius = elInput3.value + "px"
})

elInput4.addEventListener("input", function() {
    elBox.style.borderBottomLeftRadius = elInput4.value + "px"
})

elInput5.addEventListener("input", function() {
    elBox.style.borderWidth = elInput5.value + "px"
})

elInput6.addEventListener("input", function() {
    elBox.style.backgroundColor = elInput6.value 
})

elInput7.addEventListener("input", function() {
    elBox.style.borderColor = elInput7.value 
})
