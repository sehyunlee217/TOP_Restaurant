import vicImg from "../images/jam_herald.png";
import kitsImg from "../images/jam_kits.png";
import beatImg from "../images/jam_beatty.png";

function addImg(src, parentNode) {
    const imgDiv = document.createElement("img");
    imgDiv.src = src;
    parentNode.appendChild(imgDiv);
}


function generateContactpage() {
    console.log("contact page");

    document.body.style.backgroundImage = "url('jam_background.jpg')";

    const contentLoc = document.getElementById("content");

    // Location Section ---------------------------
    const loc = document.createElement("div");
    loc.classList.add("container");

    // where name of restaurant will be placed
    const locName = document.createElement("h5");
    locName.textContent = "Location";
    locName.classList.add("title");
    loc.appendChild(locName);

    const locGrid = document.createElement("div");
    locGrid.classList.add("locationGrid");
    loc.appendChild(locGrid);

    // Location as objects
    function location(location, address, phoneNum, email) {
        this.location = location;
        this.address = address;
        this.phoneNum = phoneNum;
        this.email = email;
    };

    const cafeVic = new location("Victoria", "542 Herald Street, Victoria, BC V8W 1S6", " 778-440-4489", "jamcafe@shaw.ca", "");
    const cafeBeatty = new location("Vancouver – Beatty", "556 Beatty Street, Vancouver, BC V6B 2L3", "778-379-1992", "jamcafeonbeatty@shaw.ca");
    const cafeKits = new location("Vancouver - Kitslano", "2153 West 4th Avenue,Vancouver, BC V6K 1N7", "604-423-3350", "jamcafekitsilano@shaw.ca");

    const locList = [
        cafeVic, cafeBeatty, cafeKits
    ];

    const locURLList = [
        vicImg, kitsImg, beatImg
    ];

    for (let loc of locList) {
        const newLoc = document.createElement("div");
        addImg(vicImg, newLoc);


        for (let info of Object.values(loc)) {
            let item = document.createElement("div");
            item.textContent = info;
            newLoc.appendChild(item);
        }

        locGrid.appendChild(newLoc);
    }

    contentLoc.appendChild(loc);

    document.body.classList;
}

export default generateContactpage;