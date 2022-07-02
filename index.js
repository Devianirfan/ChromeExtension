
let myLeads = []
let oldLeads = []
// console.log(typeof myLeads)

// // convert String to array
// myLeads = JSON.parse(myLeads)

// console.log(myLeads)
// console.log(typeof myLeads)

// myLeads.push("www.greatlead.com")
// console.log(myLeads)

// // convert array to String
// myLeads = JSON.stringify(myLeads)
// console.log(myLeads)
// console.log(typeof myLeads)



// const is a constant, can't be reassigned
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
// store the delete button
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// localStorage.clear()
// console.log(leadsFromLocalStorage)
// console.log(typeof leadsFromLocalStorage)

const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    { url: "https://www.linkedin.com/in/irfan-ramadhan-259365183/" }
]

tabBtn.addEventListener("click", function () {
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // })
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        // save the url
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        // render(tabs[0].url)
        // console.log(myLeads)
        render(myLeads)
    })

})

function render(leads) {

    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i]
        listItems += `<li>
                        <a href='${leads[i]}' target='_blank'>
                             ${leads[i]}`
        // console.log(listItems)
        // It costs more everytime we do DOM manipulation
        // ulEl.innerHTML += "<li>" + myLeads[i]

        // Another way of doing it.
        // create element
        // const li = document.createElement("li")
        // set text content
        // li.textContent = myLeads[i]
        // append to ul
        // ulEl.append(li)
    }
    // DOM manipulation has a cost, instead of doing it three times inside the for loop, it's better to use it once
    ulEl.innerHTML = listItems
}
// double click addEventListener function
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
    // ulEl.innerHTML = null
    // console.log(myLeads)
})

// localStorage.setItem("myLeads", "www.examplelead.com")
// localStorage.setItem("myLeads", "www.georgeouslead.com")

// console.log(localStorage.getItem("myLeads"))

// localStorage.clear()
// console.log(localStorage.getItem("myLeads"))


// adding an addEventListener to change onclick attribute
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // store the item into local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    // console.log(localStorage.getItem("myLeads"))
})


// truthy
// falsy
// false, 0, ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// practice 1
// let box = document.getElementById("box")
// box.addEventListener("click", function () {
//     console.log("I want to open the box!")
// })

// practice 2
// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5 - 12 days"

// shippingCost = 20
// shippingTime = "7 - 14 days"

// const fullPrice = basePrice - discount + shippingCost

// console.log("Total cost: $" + fullPrice + ". It will arrive in " + shippingTime)

// practice 3
// const container = document.getElementById("container")

// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</>"
// }

// practice 4
// const recipient = "James"
// const sender = "Irfan"

// // const email = "Hey " + recipient + "! How is it going? Cheers Fan"
// const email =
//     `Hey ${recipient}!
// How is it going?
// Cheers ${sender}`
// console.log(email)

// practice 5
// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name) {
//     welcomeEl.textContent = `${greeting}, ${name} !`
// }

// greetUser("Yo", "Nabila")

// // practice 6
// //            parameters
// function add(firstNum, secondNum) {
//     return firstNum + secondNum
// }
// //              arguments
// console.log(add(3, 4))
// console.log(add(9, 102))

// practice 7
// function getFirst(cards) {
//     return cards[0]
// }

// let cards = getFirst([10, 4, 11])
// console.log(cards)

// practice 8
// const player = "Irfan"
// const opponent = "Nabila"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// points += 30
// hasWon = true

// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// }

// practice 9
// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// function learning(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// learning(myCourses)

// practice 10
// localStorage.setItem("myCredits", "2000")
// let myCredits = localStorage.getItem("myCredits")
// localStorage.clear()
// console.log(myCredits)

// practice 11
// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 49
//     }
// ]

// const contEl = document.getElementById("container")
// contEl.addEventListener("click", function () {
//     console.log(data[0].score)
// })

// practice 12
// function generateSentence(desc, arr) {
//     let baseString = `The ${arr.length} ${desc} are `
//     const lastIndex = arr.length - 1
//     for (let i = 0; i < arr.length; i++) {
//         if (i === lastIndex) {
//             baseString += arr[i]
//         } else {
//             baseString += arr[i] + ", "
//         }
//     }
//     return baseString
// }
// const sentence = generateSentence("biggest animals", ["Elephant", "Rhino"])
// console.log(sentence)

// practice 13
// const imgs = [
//     "images/hip1.jpeg",
//     "images/hip2.jpeg",
//     "images/hip3.jpeg"
// ]

// const container = document.getElementById("container")
// function renderImages() {
//     let imgsDOM = ""
//     for (let i = 0; i < imgs.length; i++) {
//         imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
//     }
//     container.innerHTML = imgsDOM
// }
// renderImages()