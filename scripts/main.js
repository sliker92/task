// Work with Menu

const navBurger = document.getElementsByTagName('span');
const navList = document.querySelector('.header-nav');
const links = document.querySelectorAll('.header-nav-list__item');

document.querySelector('.header-nav-burger').addEventListener('click', showMenu, false);
links.forEach(link => link.addEventListener('click', closeMenu, false));

function closeMenu() {
  navBurger[0].className = 'header-nav-burger__lines';
  if (window.innerWidth < '769') {
    navList.style.display = 'none';
    console.log('dsa');
  }
}

function showMenu() {
  if (navBurger[0].className === 'header-nav-burger__lines') {
    navBurger[0].className = 'open';
    navList.style.display = 'block';
  } else {
    navBurger[0].className = 'header-nav-burger__lines';
    navList.style.display = 'none';
  }
}

// Work with slider

const imgList = ['./img/Vector_Illustration.jpg',
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-cat-captions-1563551842.jpg',
  './img/Vector_Illustration.jpg',
];

const imageBlock = document.querySelector('.agency-section-right-side');
let illustration = document.getElementById('illustration'); // current image
createSlider();
let rounds = document.querySelectorAll('.round');

function createSlider() {
  for (var i = 0; i < imgList.length; i++) {
    var round = document.createElement('span');
    round.classList = 'round' + i + ' round';
    round.style.width = 15 + 'px';
    round.style.height = 15 + 'px';
    round.style.border = 1 + 'px solid red';
    round.style.borderRadius = 50 + 'px';
    round.style.position = 'absolute';
    round.style.bottom = 0;
    round.style.left = 40 + (i * 4) + '%';
    round.addEventListener('click', nextImage, false);
    imageBlock.append(round);
  }
}

function nextImage(event) {
  event = event || window.event;
  clearRound(rounds);
  event.target.style.backgroundColor = 'red';
  illustration.src = imgList[getIndex(event.target.className)];
}

function clearRound(arr) {
  arr.forEach(elem => elem.style.backgroundColor = 'white');
}

function getIndex(string) {
  var r = /\d+/;
  return +string.match(r)[0];
}
