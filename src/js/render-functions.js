import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loadMoreBtn = document.querySelector('.load-more-js');
const loader = document.querySelector('.loader-js');

export function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360" height="200" />
        </a>
        <ul class="info-list">
            <li class="info-item">
              <h3 class="item-title">Likes</h3>
              <p class="item-descr">${likes}</p>
            </li>
            <li class="info-item">
              <h3 class="item-title">Views</h3>
              <p class="item-descr">${views}</p>
            </li>
            <li class="info-item">
              <h3 class="item-title">Comments</h3>
              <p class="item-descr">${comments}</p>
            </li>
            <li class="info-item">
              <h3 class="item-title">Downloads</h3>
              <p class="item-descr">${downloads}</p>
            </li>
          </ul>
      </li>
  `
    )
    .join('');
}

export function showMessage(message) {
  iziToast.show({
    message,
    position: 'topRight',
    closeOnClick: true,
    progressBar: false,
    messageColor: 'white',
    backgroundColor: '#ef4040',
  });
}

export function showErr(error) {
  iziToast.show({
    title: 'X',
    message: `${error}`,
    position: 'center',
    color: 'red',
  });
}

export function showLoadMoreBtn() {
  loadMoreBtn.classList.replace('load-more-hidden', 'load-more');
}

export function hideLoadMoreBtn() {
  loadMoreBtn.classList.replace('load-more', 'load-more-hidden');
}

export function loaderAnimation(str) {
  loader.style.display = `${str}`;
}