import { ACCELERATION } from '../../constants.js';
import Misc from '../misc.js';
import STATES from './states/index.js';
import {
  getCenterPosition,
  isColliding,
  isCollidingBottom,
  isCollidingLeft,
  isCollidingRight,
  nextPosition,
} from '../../helpers.js';
import sound from '../../sound/sound.js';

export default class Stone extends Misc {
  constructor() {
    super({ states: STATES });
  }

  update() {}

  loop({ hero, blocks, miscs, monsters }) {
    if (!_.isEmpty(hero.hitbox) && isColliding(hero.hitbox, this.vertices)) {
      this.vector.y -= 1.25;
      if (
        getCenterPosition(this.vertices).x <
        getCenterPosition(hero.hurtbox.vertices).x
      )
        this.vector.x -= 0.5;
      else this.vector.x += 0.5;
    }
    if (isCollidingRight(this.vertices, hero.hurtbox.vertices)) {
      this.isPushed = true;
      this.vector.x = -1;
    }

    if (isCollidingLeft(this.vertices, hero.hurtbox.vertices)) {
      this.isPushed = true;
      this.vector.x = 1;
    }

    if (
      !isCollidingLeft(this.vertices, hero.hurtbox.vertices) &&
      !isCollidingRight(this.vertices, hero.hurtbox.vertices) &&
      this.collisionObj.bottom
    ) {
      this.isPushed = false;
      this.vector.x = 0;
    }

    if (
      isCollidingBottom(this.vertices, hero.hurtbox.vertices) &&
      this.vector.y > 10
    ) {
      hero.die();
    }

    monsters.map((monster) => {
      if (
        isCollidingBottom(this.vertices, monster.hurtbox.vertices) &&
        this.vector.y > 10
      )
        monster.die();
    });

    nextPosition({
      hurtbox: this.vertices,
      position: this.position,
      vector: this.vector,
      collision: this.collisionObj,
      blocks,
      miscs,
    });

    if (this.collisionObj.bottom) {
      if (this.vector.y > 1) {
        sound.stone();
      }
    }

    if (this.collisionObj.bottom) this.vector.y = 0;

    this.vertices = this.state.getVertices(this.position);

    this.element.style.top = `${this.position.y}px`;
    this.element.style.left = `${this.position.x}px`;
    this.gravity();
  }

  gravity() {
    this.vector.y += ACCELERATION;
  }
}
