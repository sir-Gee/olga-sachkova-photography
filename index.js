function toggleMenu(){
  let item = document.getElementById('mobile-menu-item').style.display;
    if(item == 'block'){
      collapseMenu();
    }else {
      document.getElementById('mobile-menu-item').style.display = 'block';
    }
}

function collapseMenu(){
  document.getElementById('mobile-menu-item').style.display = 'none';
    
}

function changeTestimonial() {
  document.querySelector('#testimonial-img').src = 'testimonial_bg2.jpg';
  setTimeout(changeTestimonialBack, 5000);
}

function changeTestimonialBack() {
  document.querySelector('#testimonial-img').src = 'testimonial_bg1.jpg';
      setTimeout(changeTestimonial, 5000);
}


let reviews = [
  chritina = {
    name : "Christina Tsircas",
    review : "Olga is a creative, artistic individual and a wonderful photographer. She did my new author headshots and I was very satisfied with her work. It was a pleasure working with her and I would love to do so again in the future."
  },
  amy = {
    name : "Amy Baran Band",
    review : "Olga managed our family of five different personalities like the professional that she is. She delivered on numerous beautiful, unique, and most importantly \"approved by all of us\"  pictures.  I am forever grateful for her taking the time to work with my own personal vision while also enhancing the experience with her experience and expertise. \"The family from Philly area\" thanks you, Olga!!"
  },
  shirley = {
    name : "Shirley Bronstein",
    review : "Olga was very professional. Our pics turned out stunning!!! Way better than I could have ever expected. I will definitely be using her again in the future."
  },
  jeniaPena = {
    name : "Jenia Pena",
    review : "Thank you for our beautiful family pictures. You were great with the kids and we so glad we got the chance to meet you. Amazing work. Thank you again!"
  },
  ekaterinaShelukha = {
    name : "Ekaterina Shelukha",
    review : "We truly loved our experiences working with Olga! She has great communication throughout and is always ready to help with clothing ideas. Every single time our photos turned out gorgeous. She has great eye to capture your kids' emotions and moments you want. We will treasure forever such stunning pictures!"
  }
]

let counter = 0;

let myTimeOut;

function changeReview(){
  document.querySelector('#reviewer-name').innerHTML = reviews[counter].name;
  document.querySelector('#review-text').innerHTML = reviews[counter].review;
  counter++;

  if(counter == reviews.length){
    counter = 0;
  }

  myTimeOut = setTimeout(changeReview, 5000);
}

changeReview();

// let reviewText = document.getElementById('review-text');
// let testimonialImg = document.getElementById('testimonial-div');
// reviewText.addEventListener('mouseover', (event)=>{
//   event.stopPropagation();
//   clearTimeout(myTimeOut);
// });

// testimonialImg.addEventListener('mouseout', (event)=>{
//   event.stopPropagation();
//   changeReview();
// });