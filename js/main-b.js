'use strict';

// Tee funktio 'showImages', joka
// lataa kuvat.json tiedoston, joka sisältää näytettävät kuvat taulukkona

// tee silmukka joka lisää merkkijonoon (string) jokaisesta kuvasta alla olevan HTML:n
/*
`<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>`
*/
// Silmukan jälkeen tulosta HTML-koodi (output) <ul>-elementin sisälle innerHTML:n avulla
/*
const showImages = () => {
  fetch('kuvat.json').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    let html = '';
    json.forEach((kuva) => {
      html += `<li>
                  <figure>
                      <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                      <figcaption>
                          <h3>${kuva.mediaTitle}</h3>
                      </figcaption>
                  </figure>
              </li>`;
    });
    const ul = document.querySelector('ul');
    ul.innerHTML = html;
  });
};

showImages();
*/

// sama tehtynä funktiolla jossa ei ole kovakoodausta
const loadJSON = (url, func) => {
  fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    func(json);
  });
};

const templateFunction = (json) => {
  let html = '';
  json.forEach((kuva) => {
    html += `<li>
            <figure>
                <a class="linkimage" href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                <figcaption>
                    <h3>${kuva.mediaTitle}</h3>
                </figcaption>
            </figure>
        </li>`;
  });
  const element = document.querySelector('ul');
  element.innerHTML = html;

  const links = document.querySelectorAll(".linkimage");
  links.forEach((link) => {
    console.log(link);
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const img = document.querySelector("#modal img");
      img.src = link.href;
      img.width = 900;
      img.height = 600;
      img.classList.add('img-responsive');
      img.classList.add('modalimage');
      document.querySelector("#modal").classList.replace('hidden', 'modal');
    });
  });
};

loadJSON('kuvat.json', templateFunction);

document.querySelector(".closeBtn").addEventListener('click', () => {
  document.querySelector("#modal").classList.replace('modal', 'hidden');
});