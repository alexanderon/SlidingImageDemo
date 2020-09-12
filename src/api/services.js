const BASE_URL = 'https://picsum.photos';

const IMAGE_LIST_URL = BASE_URL + '/list';

function getAuthorImageList() {
  return fetch(IMAGE_LIST_URL);
}
export {getAuthorImageList};
