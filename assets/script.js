const mainClass = document.getElementById('mainContainer')
const randomInt = getRandomInt(2);

mainClass.style.setProperty('background', "url('../assets/main2.jpg') center no-repeat");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}