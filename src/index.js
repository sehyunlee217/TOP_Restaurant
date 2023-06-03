// Import CSS & Modules 
import "./styles/skeleton.css";
import generateContactpage from "./pages/contactPage";
import generateHomepage from './pages/homePage';
import generateMenupage from "./pages/menuPage";

// -- Navigation bar --
// Navigation bar will always be generated
// Home page will be the default page generated

function createNavbtn(item, textContent, insertLoc) {
    // variable to store which nav button user clicked
    let navSelect;

    item.textContent = textContent;
    item.addEventListener("click", () => {
        if (item.textContent == "Home") {
            generateHomepage();
        }
        else if (item.textContent == "Menu") {
            generateMenupage();
        }
        else {
            generateContactpage();
        }
    });
    insertLoc.appendChild(item);
};

// ----- generate navigation bar ------
import logo from "./images/jam_logo.png";

function generateNavbar() {
    const headerLoc = document.getElementById("header");

    // logo for restaurant
    const headerImg = document.createElement("img");
    headerImg.src = logo;
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

generateNavbar();

