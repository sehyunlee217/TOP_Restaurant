import backgroundImg from "../images/jam_background.jpg";

console.log(backgroundImg);

function generateHomepage() {
    console.log("homepage");

    document.body.style.backgroundImage = "url('jam_background.jpg')";

    const contentLoc = document.getElementById("content");

    // Info Section ---------------------------
    const info = document.createElement("div");
    info.classList.add("container");

    // where name of restaurant will be placed
    const infoName = document.createElement("h5");
    infoName.textContent = "About Us";
    infoName.classList.add("title");
    info.appendChild(infoName);

    const aboutInfo = [
        "Welcome to Jam Café!",
        "We are an all-day breakfast and lunch cafe located in Victoria and Vancouver.  The original Jam opened on Herald St. in Victoria in the spring of 2012 and was immediately embraced by the City and it’s dining community.  As the popularity of Jam grew, we knew that we needed to expand our operations and in early 2016 we opened our second venue in downtown Vancouver on Beatty.  This was followed by our 3rd and newest addition, Jam Café Kitsilano, in the fall of 2018.",
        "Inspired by recipes from the south, like our house made cornbread, buttermilk biscuits and fried chicken we wanted to create a menu of comfort fare in a rustic-city atmosphere.  Our menu also includes a collection of family home style recipes that have been shared and passed down over generations and we’ve been very proud to be able to add these to Jam’s unique and eclectic menu. Needless to say Jam Café has options that can satisfy the most discerning of appetites.",
        "Our ever changing rustic and vintage decor adds to the warmth and welcoming atmosphere in our family-owned eatery.",
        "Our goal is always to exceed your expectations and we sincerely hope you enjoy your experience at any and all of our locations as much as we enjoyed putting it all together.",
        "We appreciate your patronage and look forward to seeing you soon!",
        "Jam Cafe"
    ];

    for (let content of aboutInfo) {
        const item = document.createElement("div");
        item.textContent = content;
        info.appendChild(item);
    }
    contentLoc.appendChild(info);

    // Hours Section ---------------------------
    const hours = document.createElement("div");
    hours.classList.add("container");

    // where name of restaurant will be placed
    const hoursName = document.createElement("h5");
    hoursName.textContent = "Hours";
    hoursName.classList.add("title");
    hours.appendChild(hoursName);

    const hoursInfo = [
        "All Jam Cafe Locations are open for indoor dining and take out service!",
        "-",
        "VICTORIA  Hours of Operation: Open 7 days a week",
        "WEEKDAYS: 8:00 - 14:30 ",
        "WEEKENDS: 8:00 - 15:00",
        "-",
        "VANCOUVER Hours of Operation: Open 7 days a week",
        "WEEKDAYS: 8:00 - 14:30 ",
        "WEEKENDS: 8:00 - 15:00",
        "-",
        "Including Most Holidays",
        "We appreciate your support and look forward to serving you!",

    ];

    for (let content of hoursInfo) {
        const item = document.createElement("div");
        item.textContent = content;
        hours.appendChild(item);
    }
    contentLoc.appendChild(hours);


}

export default generateHomepage;