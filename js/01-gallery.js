'use strict';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
let galleryHtml = '';

galleryItems.forEach((elem) => {
    galleryHtml += `
    <li class="gallery__item">
        <a class="gallery__link" href="${elem.original}">
            <img
                class="gallery__image"
                src="${elem.preview}"
                data-source="${elem.original}"
                alt="${elem.description}"
            />
        </a>
    </li>
  `;
});

galleryList.insertAdjacentHTML("afterbegin",galleryHtml);

// Opening functional

galleryList.addEventListener('click', (event) => {
    const imgElem = event.target.firstElementChild;
    const instance = basicLightbox.create(`<img src="${imgElem.href}">`);

    instance.show();
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            instance.close();
        }
    });
});
