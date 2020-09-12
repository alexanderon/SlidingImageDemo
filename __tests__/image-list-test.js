import 'react-native';
import {extractImageUrlWithResolution} from '../src/util/randomGenerator';

it('given-id-get-url-with-provided-width-height, extractImageUrlWithResolution() returns correct image url', () => {
  expect(extractImageUrlWithResolution(0, 200, 300)).toBe(
    'https://picsum.photos/200/300?image=0',
  );
});
