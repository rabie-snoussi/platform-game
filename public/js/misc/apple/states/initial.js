import {
  MISC_STATES,
  MISC_IMG,
} from '../../../constants.js';
import { createVertices, getVertices } from '../../../helpers.js';

const name = MISC_STATES.initial;

const img = 'url("' + MISC_IMG.apple.initial + '")';

const dimensions = { height: 16, width: 16 };

const vertices = createVertices(dimensions);

const frames = [];

export default {
  name,
  img,
  getVertices: getVertices(vertices),
  frames,
  dimensions,
};
