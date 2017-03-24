import { tourSagas } from './tours';

export default function* sagas() {
  yield [
    ...tourSagas
  ];
}
