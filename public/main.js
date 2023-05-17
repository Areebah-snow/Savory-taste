var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//testimonial

const userTexts = document.getElementsByClassName("user-text")
const userPics = document.getElementsByClassName("user-pic")

function showReview(){
  for(userPic of userPics){
    userPic.classList.remove("active-pic")
    // userPic.style.scale = '1.2'
  }
  for(userText of userTexts){
    userText.classList.remove("active-text")
  }

  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add('active-pic');
  userTexts[i].classList.add('active-text');
  // userPics[i].style.scale = '1.3'
}