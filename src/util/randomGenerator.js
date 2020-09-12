function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function extractImageUrlWithResolution(id, width, height) {
  return 'https://picsum.photos' + '/' + width + '/' + height + '?image=' + id;
}

export {shuffle, extractImageUrlWithResolution};
