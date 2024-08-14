const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');

let desyNumber = 1;
const start = document.querySelectorAll('.start');
const length = start.length;

// start dots

const bottom = document.querySelector('.bottom');

for(let i=0; i<length; i++){
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');

buttons[0].style.backgroundColor = 'black';

const resetBg = ()=>{
    buttons.forEach((button) =>{
        button.style.backgroundColor='grey';
        button.addEventListener('mouseover',stopSlideShow);
        button.addEventListener('mouseout',startSlideShow);
    });
};


console.log(`Client width: ${1000}px`);



buttons.forEach((button,i) =>{
    button.addEventListener('click',()=>{
        resetBg();
            slider.style.transform = `translateX(-${i*1000}px)`;
            desyNumber = i+1;
            button.style.backgroundColor = 'black';
        });
});

const changeColor = () =>{
    resetBg();
    buttons[desyNumber-1].style.backgroundColor = 'black';
};


// end dots



right.addEventListener('click',()=>{
    if(desyNumber < length){    
        slider.style.transform = `translateX(-${desyNumber*1000}px)`;
        desyNumber++;
    }else{
        slider.style.transform = `translateX(0px)`;
        desyNumber = 1;
    }
    changeColor();
});

left.addEventListener('click',()=>{
    if(desyNumber > 1){
        slider.style.transform = `translateX(-${(desyNumber-2)*1000}px)`;
        desyNumber--;
    }else{
        slider.style.transform = `translateX(-${(length-1)*1000}px)`;
        desyNumber = length;
    }
    changeColor();
});

// animation added

let slideInterval;

const startSlideShow = () =>{
    slideInterval = setInterval(()=>{
        if(desyNumber < length){    
            slider.style.transform = `translateX(-${desyNumber*1000}px)`;
            desyNumber++;
        }else{
            slider.style.transform = `translateX(0px)`;
            desyNumber = 1;
        }
        changeColor();
    },3000);
};

const stopSlideShow = ()=>{
    clearInterval(slideInterval);
};

startSlideShow();

slider.addEventListener('mouseover',stopSlideShow);
slider.addEventListener('mouseout',startSlideShow);
right.addEventListener('mouseover',stopSlideShow);
right.addEventListener('mouseout',startSlideShow);
left.addEventListener('mouseover',stopSlideShow);
left.addEventListener('mouseout',startSlideShow);


//    Practice   Puirpose  
// tab-icons making clickable      

// const icons = document.querySelector('.iconss2');
// function myFunction() {

// const container = document.querySelector('.container');
// const navigation = document.getElementById('navigation-container');
//      // Get the DIV element
//     if(container.classList.contains("hidden")){
//         container.classList.remove("hidden");
//         navigation.style.borderBottom = '2px solid blue';
//         return
//     }
//     // Remove mystyle class from DIV
//     // document.getElementById("navigation-container").style.borderRight = "none";
//     container.classList.add("hidden"); // Add newone class to DIV
//     navigation.style.borderBottom = '';
//   }

// icons.addEventListener('click',()=>{
//     myFunction()
// })



//  **** Starting of our client of navyug company ****


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider1 = document.querySelector('.slider1');


let count = 1;
const ourClient1 = document.querySelectorAll('.ourClient1');
const size = ourClient1.length;


const number = document.querySelector('.number');
const counting = document.querySelectorAll('.number');

counting[0].style.color = 'blue';

const resetDg = ()=>{
    counting.forEach((number) =>{
        number.style.color='grey';
    });
};

counting.forEach((number,i) =>{
    number.addEventListener('click',()=>{
        resetDg();
        slider1.style.transform = `translateX(-${i*440}px)`;
        count = i+1;
        number.style.color = 'blue';
    });
});

const changeColour = () =>{
    resetDg();
    counting[count-1].style.color = 'blue';
};


next.addEventListener('click',()=>{
    if(count < size){    
        slider1.style.transform = `translateX(-${count*440}px)`;
        count++;
    }else{
        slider1.style.transform = `translateX(0px)`;
        count = 1;
    }
    changeColour();
});


prev.addEventListener('click',()=>{
    if(count > 1){
        slider1.style.transform = `translateX(-${(count-2)*440}px)`;
        count--;
    }else{
        slider1.style.transform = `translateX(-${(size-1)*440}px)`;
        count = size;
    }
    changeColour();
});



//  ***** Starting of testimonials of navyug company ***** 



const left1 = document.querySelector('.left1');
const right1 = document.querySelector('.right1');
const slider2 = document.querySelector('.slider2');


let count1 = 1;
const child = document.querySelectorAll('.child');
const size1 = child.length;


const bottom2 = document.querySelector('.bottom2');

for(let i=0; i<size1; i++){
    const div1 = document.createElement('div1');
    div1.className = 'button1';
    bottom2.appendChild(div1);
}

const buttons1 = document.querySelectorAll('.button1');

buttons1[0].style.backgroundColor = 'white';


const resetFg = ()=>{
    buttons1.forEach((button1) =>{
        button1.style.backgroundColor='grey';
    });
};

buttons1.forEach((button1,i) =>{
    button1.addEventListener('click',()=>{
        resetFg();
        slider2.style.transform = `translateX(-${i*615}px)`;
        count1 = i+1;
        button1.style.backgroundColor = 'white';
    });
});

const changeColor1 = () =>{
    resetFg();
    buttons1[count1-1].style.backgroundColor = 'white';
};


right1.addEventListener('click',()=>{
    if(count1 < size1){    
        slider2.style.transform = `translateX(-${count1*615}px)`;
        count1++;
    }else{
        slider2.style.transform = `translateX(0px)`;
        count1 = 1;
    }
    changeColor1();
});


left1.addEventListener('click',()=>{
    if(count1 > 1){
        slider2.style.transform = `translateX(-${(count1-2)*615}px)`;
        count1--;
    }else{
        slider2.style.transform = `translateX(-${(size1-1)*615}px)`;
        count1 = size1;
    }
    changeColor1();
});


// *****   Ending of testimonial of navyug company     *****



//  *****  Insights   ***** //




const left2 = document.querySelector('.left2');
const right2 = document.querySelector('.right2');
const sliderContent = document.querySelector('.slider-content');


let count2 = 1;
const mover = document.querySelectorAll('.mover');
const size2 = mover.length;


const bottom3 = document.querySelector('.bottom3');

for(let i=0; i<size2; i++){
    const div2 = document.createElement('div2');
    div2.className = 'button2';
    bottom3.appendChild(div2);
}

const buttons2 = document.querySelectorAll('.button2');

buttons2[0].style.backgroundColor = 'white';


const resetHg = ()=>{
    buttons2.forEach((button2) =>{
        button2.style.backgroundColor='grey';
    });
};

buttons2.forEach((button2,i) =>{
    button2.addEventListener('click',()=>{
        resetHg();
        sliderContent.style.transform = `translateX(-${i*850}px)`;
        count2 = i+1;
        button2.style.backgroundColor = 'white';
    });
});

const changeColor2 = () =>{
    resetHg();
    buttons2[count2-1].style.backgroundColor = 'white';
};


right2.addEventListener('click',()=>{
    if(count2 < size2){    
        sliderContent.style.transform = `translateX(-${(count2)*850}px)`;
        count2++;
    }else{
        sliderContent.style.transform = `translateX(0px)`;
        count2 = 1;
    }
    changeColor2();
});


left2.addEventListener('click',()=>{
    if(count2 > 1){
        sliderContent.style.transform = `translateX(-${(count2-2)*850}px)`;
        count2--;
    }else{
        sliderContent.style.transform = `translateX(-${(size2-1)*850}px)`;
        count2 = size2;
    }
    changeColor2();
});



let slideInterval1;

const startSlideShow1 = () =>{
    slideInterval1 = setInterval(()=>{
        if(count2 < size2){    
            sliderContent.style.transform = `translateX(-${(count2)*850}px)`;
            count2++;
        }else{
            sliderContent.style.transform = `translateX(0px)`;
            count2 = 1;
        }
        changeColor2();
    },3000);
};

const stopSlideShow1 = ()=>{
    clearInterval(slideInterval1);
};

startSlideShow1();

sliderContent.addEventListener('mouseover',stopSlideShow1);
sliderContent.addEventListener('mouseout',startSlideShow1);
right2.addEventListener('mouseover',stopSlideShow1);
right2.addEventListener('mouseout',startSlideShow1);
left2.addEventListener('mouseover',stopSlideShow1);
left2.addEventListener('mouseout',startSlideShow1);









// $(document).ready(function() {
//     $('.link-c-menu').on('click', function(e) {
//         console.log('Working');
//         if (!$('.c-menu-list').is(':visible')) {
//             $('.c-menu-list').fadeIn();
//             $('.menu-bar-icon').addClass('menu-active');
//         } else {
//             $('.c-menu-list').fadeOut();
//             $('.menu-bar-icon').removeClass('menu-active');
//         }
//         e.preventDefault()
//     });
//     $(window).on('resize', function() {
//         var win = $(this); //this = window
//         // if (win.height() >= 820) { /* ... */ }
//         if (win.width() >= 900) {
//             $('.c-menu-list').css('display', 'flex');
//         } else {
//             $('.c-menu-list').css('display', 'none');
//         }
//     });
// });