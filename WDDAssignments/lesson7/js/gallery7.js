const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      };
    });
  });

  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

let daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let d = new Date();
let dayname = daynames[d.getDay()];
let monthname = months[d.getMonth()];
let year = d.getFullYear();

let fulldate = dayname + ", " + d.getDate() + " " + monthname + " " + year;

document.getElementById("currentdate").textContent = fulldate;
console.log(fulldate);

document.getElementById("year").textContent = year;

const banner = document.getElementById("eventMessage");

if (daynames[d.getDay()] == "Friday" || daynames[d.getDay()] == "Saturday") {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}

WebFont.load({
  google: {
    families: [
      'Open Sans', 'Roboto'
    ]
  }
});