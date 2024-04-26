const items  = document.querySelectorAll('.slide')
let counter = 0;
let boolean = true;

items.forEach((item,index) => {
    item.style.left = `${index * 100}%`
})

const slide = () => {
    items.forEach((item) => {
      item.style.transform = `translateX(-${counter * 100}%)`;
    });
}

//next slide
const next = () => {
    counter = counter !== items.length - 1 ? counter +1 : counter;
    slide();
}

//prev slide
const prev = () => {
     counter = counter !== 0 ? counter - 1 : counter;
     slide();
}

// the images will change afetr every 6 seconds

var autoUpdate = setInterval(()=>{
    counter !== items.length - 1 && boolean ? next() : prev(); 
    if(counter === 0){
        boolean = true;
    }  
    if(counter === items.length - 1){
        boolean = false
    }
}, 6000);


// the order will be reversed in the end
