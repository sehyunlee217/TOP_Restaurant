// Import CSS & Modules 
import "./styles/skeleton.css";
import generateContactpage from "./pages/contactPage";
import generateHomepage from './pages/homePage';
import generateMenupage from "./pages/menuPage";

// -- Navigation bar --
// Navigation bar will always be generated
// Home page will be the default page generated

function createNavbtn(item, textContent, insertLoc) {
    item.textContent = textContent;
    // when button is clicked, 
    item.addEventListener("click", () => {
        // clear page 
        const contentLoc = document.getElementById("content");
        contentLoc.replaceChildren();
        // remove background image
        document.body.style.backgroundImage = "";

        // load new page on click
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

    // load logo for restaurant
    const headerImg = document.createElement("img");
    headerImg.src = logo;
    headerLoc.appendChild(headerImg);

    // Create buttons to direct to each page
    const buttonLoc = document.createElement("div");
    buttonLoc.classList.add("btns");
    headerLoc.appendChild(buttonLoc);

    // ---- navigation bar buttons to display different pages ----

    // direct to home page
    const homePage = document.createElement("button");
    createNavbtn(homePage, "Home", buttonLoc);

    // direct to menu page
    const menuPage = document.createElement("button");
    createNavbtn(menuPage, "Menu", buttonLoc);

    // direct to contacts page
    const contactPage = document.createElement("button");
    createNavbtn(contactPage, "Contact", buttonLoc);
    generateHomepage();
}

// ---- Main Functionality ------

generateNavbar();

