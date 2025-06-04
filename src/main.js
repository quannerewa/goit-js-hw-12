import { getFetchImg } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



const loader = document.querySelector('.loader-js');
const form = document.querySelector('.form-js');
const input = document.querySelector('.input-js');
const gallery = document.querySelector('.gallery-js');

let searchQuery;

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  gallery.innerHTML = '';
  const searchQuery = input.value.trim();

  if (!searchQuery) {
    iziToast.show({
      message: 'Sorry, the request cannot be empty. Please try again...',
      position: 'topRight',
      closeOnClick: true,
      progressBar: false,
      messageColor: 'white',
      backgroundColor: '#ef4040',
    });
    return;
  }

  loader.style.display = 'block';

  getFetchImg(searchQuery)
    .then(data => {
      if (!data.hits.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          closeOnClick: true,
          progressBar: false,
          messageColor: 'white',
          backgroundColor: '#ef4040',
        });
        return;
      }
      console.log(data.hits);

      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      const lightBox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captions: true,
        captionsData: 'alt',
      });
      lightBox.refresh();
    })
    .catch(error =>
      iziToast.show({
        title: 'X',
        message: `${error.message}`,
        position: 'center',
        color: 'red',
      })
    )
    .finally(() => {
      event.target.reset();
      loader.style.display = 'none';
    });
}