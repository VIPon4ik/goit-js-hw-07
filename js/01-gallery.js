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

let isEventListenerAdded = false;

galleryList.addEventListener('click', (event) => {
    event.preventDefault();

    const imgElem = event.target;
    const instance = basicLightbox.create(`<img src="${imgElem.dataset.source}">`);

    instance.show();

    if (!isEventListenerAdded) {
        document.addEventListener('keydown', closeOnEscape);
        isEventListenerAdded = true;
    }

    function closeOnEscape(event) {
        if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', closeOnEscape);
            isEventListenerAdded = false;
        }
    }
});
