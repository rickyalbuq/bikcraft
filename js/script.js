document.documentElement.classList.add("js");

if(window.SimpleSlide){
  new SimpleSlide ({
    slide: 'quote',
    time: 5000,
    pauseOnHover: true
  });

  new SimpleSlide({
    slide: 'portfolio',
    nav: true,
    time: 5000,
    pauseOnHover: true
  });
}

if(window.SimpleAnime){
  new SimpleAnime();
}