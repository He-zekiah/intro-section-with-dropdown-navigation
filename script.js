const nav = document.getElementById('drop');
const box = document.getElementById('box')
const box1 =document.getElementById('box1');
const nav2 = document.getElementById('drop2');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const nav3 = document.getElementById('drop3');
const nav4 = document.getElementById('drop4');
const next = document.getElementById('next');
const menu = document.getElementById('menu');
const closed = document.getElementById('closed');
const firstArrow = document.getElementById('arrow1');
const secondArrow = document.getElementById('arrow2');
const thirdArrow = document.getElementById('arrow3');
const fourthArrow = document.getElementById('arrow4');



nav.addEventListener('click', function () {
    box.classList.toggle('show');
    firstArrow.classList.toggle('rotate');
});

nav3.addEventListener('click', function() {
    box1.classList.toggle('shows');
    thirdArrow.classList.toggle('rotate');
});

nav2.addEventListener('click', function() {
    box2.classList.toggle('hidden');
    secondArrow.classList.toggle('rotate');
});

nav4.addEventListener('click', function() {
    box3.classList.toggle('hiddens');
    fourthArrow.classList.toggle('rotate');
});

menu.addEventListener('click', function() {
    next.classList.add('open');
});

closed.addEventListener('click', function() {
    next.classList.remove('open');
});

