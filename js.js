let arrIMG = [
  "1galgal.png",
  "2pencil.png",
  "3phone.png",
  "4humburger.png",
  "5sign.png",
  "6turtlle.png",
  "7chair.png",
  "8watermelon.png",
  "9strobarry.png",
  "10flamingo.png",
  "11book.png",
  "12camera.png",
  "13glob.png",
  "14patiphone.png",
  "16house.png",
  "17orange.png",
  "18boll.png",
  "19glass.png",
  "20iceCoffee.png",
  "21chips.png",
  "22bags.png",
];
let isStart = 0,
  point = 0,
  times = 0;
let sameElement,
  same = 8,
  interval,
  count = 0,
  seconds;
let randomElementsCard1, same2;
let randomElementsCard2;
var card1;
var image;
let allImagesInCard;
let card2;
var image1;
let allImagesInCard2;

document.getElementById("buttonToStart").addEventListener("click", start);
function randomArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
function to2Arraies(arrIMG) {
  let x = length / 2;
  //הגרלת מיקום של הדאבל בכרטיס 1
  same = Math.floor(Math.random() * 10);
  sameElement = arrIMG[length / 2];
  console.log(sameElement);
  randomElementsCard1 = arrIMG.slice(0, 10);
  randomElementsCard1[same] = sameElement;
  while (same === 0) {
    same = Math.floor(Math.random() * 10);
    randomElementsCard1[same] = sameElement;
  }
  console.log(same);
  //הגרלת מיקום של הדאבל בכרטיס 2
  same2 = Math.floor(Math.random() * 8);
  randomElementsCard2 = arrIMG.slice(-9);
  randomElementsCard2[same2] = sameElement;
  while (same2 === 0) {
    same2 = Math.floor(Math.random() * 10);
    randomElementsCard2[same2] = sameElement;
  }
  console.log(same2);
  card1 = document.getElementById("card1");
  allImagesInCard = document.createElement("div");
  allImagesInCard.setAttribute("id", "allImages");
  for (let i = 1; i < randomElementsCard1.length; i++) {
    image = document.createElement("img");
    image.setAttribute("class", "cardim");
    image.setAttribute("id", "1" + i);
    image.setAttribute("src", "img/" + randomElementsCard1[i]);
    image.addEventListener("click", check);
    allImagesInCard.appendChild(image);
  }
  card1.appendChild(allImagesInCard);
  card2 = document.getElementById("card2");
  allImagesInCard2 = document.createElement("div");
  allImagesInCard2.setAttribute("id", "allImages2");
  for (let i = 1; i < randomElementsCard2.length; i++) {
    image1 = document.createElement("img");
    image1.setAttribute("class", "cardim");
    image1.setAttribute("id", "2" + i);
    image1.addEventListener("click", check);
    image1.setAttribute("src", "img/" + randomElementsCard2[i]);
    allImagesInCard2.appendChild(image1);
  }
  card2.appendChild(allImagesInCard2);
}

function start() {
  document.getElementById("buttonToStart").style.display = "none";
  startTimer();
  randomArray(arrIMG);
  to2Arraies(arrIMG);
}

function check() {
  if (event.target.id === "1" + same || event.target.id === "2" + same2) {
    document.getElementById("timer").style.display = "none";
    clearInterval(interval);
    // הוספת תמונה בגדול בצד השמאלי
    var image1 = document.createElement("img");
    image1.setAttribute("src", "img/" + sameElement);
    image1.setAttribute("id", "theSameBigElement");
    image1.style.width = "90%"; // קביעת רוחב התמונה
    inTheMiddle.appendChild(image1);
    document.getElementById("allImages").remove();
    document.getElementById("allImages2").remove();
    var im = document.createElement("img");
    im.setAttribute("src", "img/z.gif");
    im.setAttribute("id", "z1");
    card1.appendChild(im);
    var im = document.createElement("img");
    im.setAttribute("src", "img/z.gif");
    im.setAttribute("id", "z2");
    card2.appendChild(im);
    // מחיקת התמונות הקודמות
    setTimeout(() => {
      document.getElementById("z1").remove();
      document.getElementById("z2").remove();
      document.getElementById("theSameBigElement").remove();
      count++;
      if (count < 5) {
        start();
      } else {
        image1.setAttribute("src", "img/win.gif");
        image1.setAttribute("id", "theSameBigElement");
        image1.style.width = "80%"; // קביעת רוחב התמונה
        inTheMiddle.appendChild(image1);
      }
    }, 2000);
  }
}
function startTimer() {
  document.getElementById("timer").style.display = "block";
  seconds = 10;
  document.getElementById("timer").innerHTML = seconds;
  interval = setInterval(countDown, 1000);
}
function countDown() {
  if (seconds === 0) {
    document.getElementById("timer").innerHTML = "TIME OVER";
    clearInterval(interval);
  } else {
    seconds = Number(document.getElementById("timer").innerHTML);
    seconds--;
    document.getElementById("timer").innerHTML = seconds;
  }
}
