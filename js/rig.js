const first = [
    "Ted, your services are the worst on the entire planet ! ",
    "I hoped to get an incredible service, I wasn't disappointed (it's a little bit ironic...) ! ",
    "What the Hell happened ? They are so irresponsible !! ",
    "That was the worst experience of my life (except the birth of my children)... "
];
const second = [
    "I paid for a premium package, called \"Fantastic Party\" but I'm still waiting for my event. ",
    "My wife and I were not satisfied at all, these weirdos are crazy ! ",
    "I don't understand how is it possible to be as dumb as them... ",
    "Who dare to pay for these guys ?? "
];
const third = [
    "I swear, this is the first and the last time I'll call them ! ",
    "They took your greenback and they'll never go back... ",
    "Why aren't these bears in jail ? This is madness ! ",
    "I spent an entire week crying and wondering why I chose them... "
];
const fourth = [
    "Don't spend any money for these bears, they'll steal your money !!",
    "Seriously, guys... Run away from these dumbs bears.",
    "The entire staff deserve to burn in hell !",
    "I'm so upset right now !! Guys ! I'll sue you !"
];
let rig = (a, b, c, d) => a[randomize(a.length)] + b[randomize(b.length)] + c[randomize(c.length)] + d[randomize(d.length)];
function randomize(b) {
    return Math.trunc(Math.random() * (b));
}
//console.log(rig(first,second,third,fourth));
const textInsultOne = document.querySelector(".text-insult-card-1");
const textInsultTwo = document.querySelector(".text-insult-card-2");
const textInsultThree = document.querySelector(".text-insult-card-3");
const textInsultFour = document.querySelector(".text-insult-card-4");
const insultButton = document.querySelector(".insult-button-container");
const dates = document.querySelectorAll(".date");
const cardsEarthquake = document.querySelectorAll(".cards-aboutUs div");
const starsCommentImg = document.querySelectorAll('.stars-comment img');


insultButton.addEventListener("click", function (e) {
    e.preventDefault()
    textInsultOne.innerHTML = rig(first, second, third, fourth);
    textInsultTwo.innerHTML = rig(first, second, third, fourth);
    textInsultThree.innerHTML = rig(first, second, third, fourth);
    textInsultFour.innerHTML = rig(first, second, third, fourth);
    let dateLocale = new Date().toLocaleString("en-EN", {
        year: "numeric",
        month: "2-digit",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });
    dates.forEach(date => {
        date.innerHTML = dateLocale;
    });

    /* Earthquake animation */
    starsCommentImg.forEach((img, index) => {
        img.src = "../assets/img/star-red.svg"
    })
    cardsEarthquake.forEach((card) => {
        card.classList.add("earthshake");
        insultButton.classList.remove("earthshake");
        setTimeout(function () {
            card.classList.remove("earthshake");
        }, 500);
    })

})


