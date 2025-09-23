let mail = document.querySelector("#email")
let pwd = document.querySelector("#password")
let btn = document.querySelector("#button")
//console.log(mail, pwd, btn)

btn.addEventListener("click", () => {
    console.log("click")
})

mail.addEventListener("input", (event) => {
    if (event.target.value.length === 0)
        mail.style.borderColor = "black"
    else if (!event.target.value.includes("@"))
        mail.style.borderColor = "red"
    else
        mail.style.borderColor = "green"
})

pwd.addEventListener("input", (event) => {
    if (event.target.value.length === 0)
        pwd.style.borderColor = "black"
    else if (event.target.value.length < 8)
        pwd.style.borderColor = "red"
    else
        pwd.style.borderColor = "green"
})