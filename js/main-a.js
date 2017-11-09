'use strict';
/*
// tee funktio 'showImages', joka

const showImages = () => {
      fetch('kuvat.html').then((response) => {
        return response.text();
      }).then((text) => {
        console.log(text);
        // lisää ladatun HTML-sisällön <ul> elementin sisälle
        const ul = document.querySelector('ul');
        ul.innerHTML = text;
      });
    };

showImages();
*/

// sama tehtynä funktiolla jossa ei ole kovakoodausta

const loadHTML = (url, target) => {
  // url = osoite tiedostoon joka ladataan
  fetch(url).then((response) => {
    return response.text();
  }).then((text) => {
    console.log(text);
    // lisää ladatun sisällön target parametrillä määrätyn elementin sisälle
    const element = document.querySelector(target);
    element.innerHTML = text;
  });
};

loadHTML('kuvat.html', 'ul');

document.querySelector("#lisaa").addEventListener('click', () => {
  document.querySelectorAll("p")[0].classList.add('punainen');
});

document.querySelector("#vaihda").addEventListener('click', () => {
  const p = document.querySelectorAll("p")[1];
  if (p.classList.contains('punainen')) {
    p.classList.replace('punainen', 'sininen');
  } else {
    p.classList.replace('sininen', 'punainen');
  }
});

document.querySelector("#toggle").addEventListener('click', () => {
  const p = document.querySelectorAll("p")[2];
  p.classList.toggle('vihrea');
});