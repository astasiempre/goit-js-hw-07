import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")

const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("");

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener("click", onClick)

function onClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image'));
  const largeImgUrl = event.target.dataset.source;
  openModal(largeImgUrl)
}
function openModal(url) {
  const instance = basicLightbox.create(`<img src="${url}" width="800" height="600">`);
  instance.show();
  }  
console.log(markup);
