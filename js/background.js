const mainimage = document.getElementById("mainimg");

const images = [
    "bl1.jpeg",
    "bl2.jpeg",
    "bl3.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //img라는 태그 생성하고 이름은 bgImage

bgImage.src = `img/${chosenImage}`; //생성한 img 태그의 src는 img/랜덤이미지
bgImage.className = "back";
document.body.appendChild(bgImage); //body태그에 bgImage 추가
