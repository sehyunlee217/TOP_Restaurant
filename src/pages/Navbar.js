
import logo from "../images/jam_logo.png";

console.log(logo);

// console.log(logo);

function generateNavbar() {
    console.log("Nav bar");

    const headerLoc = document.getElementById("header");

    const headerImg = document.createElement("img");
    headerImg.src = logo;
    console.log(headerImg);

    headerLoc.appendChild(headerImg);

}

export default generateNavbar;