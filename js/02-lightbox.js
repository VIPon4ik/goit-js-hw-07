import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
let listHtml = "";

galleryItems.forEach((img) => {
    listHtml += `
    <li class="gallery__item">
        <a class="gallery__link" href="${img.original}">
            <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
        </a>
    </li>`;
});

galleryList.insertAdjacentHTML("afterbegin", listHtml);

const lightbox = new SimpleLightbox(".gallery__item a", {
    captionsData: 'alt',
    captionDelay: 250,
});

galleryList.addEventListener("click", (event) => {
    event.preventDefault(); 
    
    lightbox.open(() => {});
});