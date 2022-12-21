const input = document.getElementById("input"),
      output = document.getElementById("output"),
      person = document.getElementById("person"),
      encryptBtn = document.getElementById("encrypt"),
      decryptBtn = document.getElementById("decrypt"),
      copyBtn = document.getElementById("copy")

// remove uppercase characters and accents
input.addEventListener("input", () => {
    input.value = input.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
})

const encryptKeys = [
    { "/e/g": /enter/g },
    { "/i/g": /imes/g },
    { "/a/g": /ai/g },
    { "/o/g": /ober/g },
    { "/u/g": /ufat/g }
]

// encrypt
const encrypt = text => {
    return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}

encryptBtn.addEventListener("click", () => {
    input.select()
    input.setSelectionRange(0, 99999)

    // encrypt
    output.value = encrypt(input.value)

    // clear
    input.value = ""

    // hide person
    person.parentElement.className = "hidden"

    // show output
    output.parentElement.className = "visible"

    // show copy
    copyBtn.parentElement.className = "visible"
})

// decrypt
const decrypt = text => {
    return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}

decryptBtn.addEventListener("click", () => {
    input.select()
    input.setSelectionRange(0, 99999)

    // decrypt
    output.value = decrypt(input.value)

    // clear
    input.value = ""

    // hide person
    person.parentElement.className = "hidden"

    // show output
    output.parentElement.className = "visible"

    // show copy
    copyBtn.parentElement.className = "visible"
})

// copy
copyBtn.addEventListener("click", () => {
    output.select()
    output.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(output.value)
})