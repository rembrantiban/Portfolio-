const skills_list = document.getElementById("skills_list");
const tools_list = document.getElementById("tools_list");

function displayedSkills(){
   const skills_list = document.getElementById("skills_list");
    skills_list.style.display = "grid";
    tools_list.style.display =  "none";
  }
function displayedTools() {
  const tools_list = document.getElementById("tools_list");
  tools_list.style.display = "grid";
  skills_list.style.display = "none";
 }


function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
