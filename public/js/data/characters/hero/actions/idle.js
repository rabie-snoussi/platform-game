import { HERO_ACTIONS, HERO_IMG } from '../../../../constants.js';
import {
  getBox,
  getVerteces,
  getDimensions,
  getFrames,
} from '../helpers.js';

const name = HERO_ACTIONS.idle;

const img = 'url("' + HERO_IMG.idle + '")';

const allowedActions = [
  HERO_ACTIONS.attack,
  HERO_ACTIONS.run,
  HERO_ACTIONS.preJump,
  HERO_ACTIONS.fall,
];

const dimensions = getDimensions({ height: 16, width: 16 });

const verteces = getVerteces(dimensions);

const frames = getFrames({ dimensions, number: 4, left: 'scaleX(-1)', right: 'none' });

const effects = [];

export default {
  name,
  loop: true,
  img,
  effects,
  allowedActions,
  hurtbox: getBox(verteces),
  frames,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};