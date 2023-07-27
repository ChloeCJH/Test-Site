const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySource = myImage.getAttribute("src");
    if (mySource === "images/cat1.jpg") {
        myImage.setAttribute("src", "images/cat2.jpg")
    } else {
        myImage.setAttribute("src", "images/cat1.jpg")
    }

};

let myButton = document.querySelector("#changeUserBTN");
let myHeading = document.querySelector("h1");

function setName() {
    const myName = prompt("What is your name?");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Cats are the best, ${myName}`;
}

if (localStorage.getItem("name")) {
    setName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Cats are the best, ${storedName}`;
}

myButton.onclick = () => {
    setName();
};