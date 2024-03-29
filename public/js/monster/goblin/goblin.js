import Monster from '../monster.js';
import ACTIONS from './index.js';
import {
  DIRECTIONS,
  GRID_DIMENSIONS,
  MONSTER_ATTACK_INTERVAL,
  MONSTER_ACTIONS,
  MONSTER_HEALTH,
  MONSTER_SPEED,
} from '../../constants.js';
import {
  isColliding,
  isCollidingLeft,
  isCollidingRight,
  nextPosition,
  chase,
} from '../../helpers.js';
import sound from '../../sound/sound.js';

export default class Goblin extends Monster {
  constructor() {
    super({ actions: ACTIONS });
    this.heroCollision = false;
    this.isAttacking = false;
    this.attackInterval = null;
    this.isHit = false;
    this.health = MONSTER_HEALTH.goblin;
    this.sounds = {
      attack: sound.goblinAttack.bind(sound),
      hit: sound.goblinHit.bind(sound),
      death: sound.goblinDeath.bind(sound),
    };
  }

  attacking() {
    this.isAttacking = true;
    this.attack();

    this.attackInterval = setInterval(() => {
      this.attack();
    }, MONSTER_ATTACK_INTERVAL.goblin);
  }

  hurt() {
    if (this.isHit) return;

    if (this.health > 1) {
      this.hit();
      this.vector.y = -5;
    } else this.death();

    if (this.health > 0) this.health--;

    this.isHit = true;
  }

  loop({ blocks, miscs, hero }) {
    // Hit check
    if (
      !_.isEmpty(hero.hitbox) &&
      isColliding(hero.hitbox, this.hurtbox.vertices) &&
      !this.isHit
    ) {
      clearInterval(this.attackInterval);
      this.isAttacking = false;
      this.removeHitbox();
      this.hurt();
    }

    // Attack check
    if (
      !_.isEmpty(this.hitbox) &&
      isColliding(this.hitbox, hero.hurtbox.vertices) &&
      !hero.isHit
    ) {
      hero.hurt();
    }

    if (
      this.isHit &&
      this.action.name !== MONSTER_ACTIONS.hit &&
      this.action.name !== MONSTER_ACTIONS.death
    ) {
      this.isHit = false;
    }

    // Prevents chasing when attacking or being hit or dead
    if (
      !this.isAttacking &&
      !this.isHit &&
      this.action.name !== MONSTER_ACTIONS.death
    ) {
      chase({
        speed: MONSTER_SPEED.goblin,
        chaserVertices: this.hurtbox.vertices,
        chasedVertices: hero.hurtbox.vertices,
        vector: this.vector,
        distance: {
          x: GRID_DIMENSIONS.width * 10,
          y: GRID_DIMENSIONS.height * 4,
        },
      });
    }

    this.heroCollision =
      isCollidingLeft(this.hurtbox.vertices, hero.hurtbox.vertices) ||
      isCollidingRight(this.hurtbox.vertices, hero.hurtbox.vertices);

    // Stop moving when Colliding with the play or being hit or attacking or dead
    if (
      this.heroCollision ||
      this.isHit ||
      this.isAttacking ||
      this.action.name === MONSTER_ACTIONS.death
    )
      this.vector.x = 0;

    if (!this.heroCollision && this.action.name !== MONSTER_ACTIONS.attack) {
      this.isAttacking = false;
      clearInterval(this.attackInterval);
    }

    nextPosition({
      hurtbox: this.hurtbox.vertices,
      blocks,
      vector: this.vector,
      position: this.position,
      collision: this.collision,
      miscs,
    });

    if (this.vector.x !== 0) this.run();

    // Change directions
    if (this.vector.x > 0) this.direction = DIRECTIONS.right;
    if (this.vector.x < 0) this.direction = DIRECTIONS.left;

    if (this.collision.bottom) {
      this.vector.y = 0;

      if (this.vector.x === 0) {
        if (this.heroCollision && !this.isAttacking && !this.isHit)
          this.attacking();
        else this.idle();
      }
    }

    this.updatePosition();
    this.gravity();
  }
}
