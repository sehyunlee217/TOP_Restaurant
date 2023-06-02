
import logo from "../images/jam_logo.png";

console.log(logo);

function createNavbtn(item, textContent, insertLoc) {
    item.textContent = textContent;
    item.addEventListener("click", () => { console.log(item.textContent); });
    insertLoc.appendChild(item);
};


function generateNavbar() {
    console.log("Nav bar");

    const headerLoc = document.getElementById("header");

    // logo for restaurant
    const headerImg = document.createElement("img");
    headerImg.src = logo;
    console.log(headerImg);
    headerLoc.appendChild(headerImg);

    const buttonLoc = document.createElement("div");
    buttonLoc.classList.add("btns");
    headerLoc.appendChild(buttonLoc);

    // navigation bar buttons to display different pages
    const homePage = document.createElement("button");
    createNavbtn(homePage, "Home", buttonLoc);

    const menuPage = document.createElement("button");
    createNavbtn(menuPage, "Menu", buttonLoc);

    const contactPage = document.createElement("button");
    createNavbtn(contactPage, "Contact", buttonLoc);

}

export default generateNavbar;