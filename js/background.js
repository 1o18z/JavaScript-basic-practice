const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //img라는 태그 생성하고 이름은 bgImage

bgImage.src = `img/${chosenImage}`; //생성한 img 태그의 src는 img/랜덤이미지
bgImage.className = "back";
document.body.appendChild(bgImage); //body태그에 bgImage 추가

