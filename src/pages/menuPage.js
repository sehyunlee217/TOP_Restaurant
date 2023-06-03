import menu1_img from "../images/jam_menu1.png";
import menu2_img from "../images/jam_menu2.png";

function Menu(parentNode, imgURL) {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    parentNode.appendChild(menu);

    const img = document.createElement("img");
    menu.appendChild(img);
    img.src = imgURL;
    return menu;
}

function generateMenupage() {
    console.log("menupage");

    const contentLoc = document.getElementById("content");

    // holds 2 menu png divs
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu_container");

    // div each holds a menu page
    const menu1 = Menu(menuContainer, menu1_img);
    const menu2 = Menu(menuContainer, menu2_img);

    // add menu container to content class
    contentLoc.appendChild(menuContainer);



}

export default generateMenupage;