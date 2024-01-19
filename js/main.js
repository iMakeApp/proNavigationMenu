//Marker
let marker = document.querySelector('#marker');
let list = document.querySelectorAll('ul li');

// Function
function moveIndicator(e){
    marker.style.left = e.offsetLeft+'px';
    marker.style.width = e.offsetWidth+'px';
}

list.forEach(link =>{
    link.addEventListener('click', (e) => {
        moveIndicator(e.target)
    })
})

//Add active class in selected list items
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click', activeLink));