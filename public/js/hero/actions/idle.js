import { HERO_ACTIONS, HERO_IMG } from '../../constants.js';
import {
  getBox,
  createVertices,
  getFrames,
} from '../../helpers.js';


const name = HERO_ACTIONS.idle;

const img = 'url("' + HERO_IMG.idle + '")';

const dimensions = { height: 32, width: 32 };

const vertices = createVertices(dimensions);

const frames = getFrames({ dimensions, number: 4, left: 'scaleX(-1)', right: 'none' });

const effects = [];

export default {
  name,
  loop: true,
  img,
  effects,
  getHurtbox: getBox(vertices),
  frames,
  dimensions,
};
