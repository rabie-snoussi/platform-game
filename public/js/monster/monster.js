import { DIRECTIONS, ACCELERATION, MONSTER_ACTIONS } from '../constants.js';
import {
  cloneWithElements,
  nextPosition,
  createElement,
  addBoxEffect,
} from '../helpers.js';

export default class Monster {
  constructor({ actions }) {
    this.isDead = false;
    this.frameCounter = 0;
    this.element = null;
    this.direction = DIRECTIONS.left;
    this.actions = actions;
    this.action = this.actions.idle;
    this.effects = [];
    this.imgPosition = { x: 0, y: 0 };
    this.collision = {
      top: false,
      bottom: false,
      right: false,
      left: false,
    };
    this.hitbox = {};
    this.isHitboxVisible = false;
    this.vector = { x: 0, y: 0 };
    this.hurtbox = {
      element: null,
      vertices: {
        a: {
          x: 0,
          y: 0,
        },
        b: {
          x: 0,
          y: 0,
        },
        c: {
          x: 0,
          y: 0,
        },
        d: {
          x: 0,
          y: 0,
        },
      },
    };
    this.position = {
      x: 0,
      y: 0,
    };
    this.sounds = null;
  }

  idle() {
    if (this.action.name === MONSTER_ACTIONS.death) return;
    if (this.action.name === MONSTER_ACTIONS.idle) return;
    if (
      !this.action.loop &&
      this.action.frames[this.direction].length > this.frameCounter
    )
      return;

    this.action = this.actions.idle;
    this.frameCounter = 0;

    this.insertEffects();
  }

  hit() {
    if (this.action.name === MONSTER_ACTIONS.death) return;
    if (this.action.name === MONSTER_ACTIONS.hit) return;

    this.action = this.actions.hit;
    this.frameCounter = 0;

    this.insertEffects();
    this.sounds.hit();
  }

  run() {
    if (this.action.name === MONSTER_ACTIONS.death) return;
    if (this.action.name === MONSTER_ACTIONS.run) return;
    if (
      !this.action.loop &&
      this.action.frames[this.direction].length > this.frameCounter
    )
      return;

    this.action = this.actions.run;
    this.frameCounter = 0;

    this.insertEffects();
  }

  attack() {
    if (this.action.name === MONSTER_ACTIONS.death) return;
    if (this.action.name === MONSTER_ACTIONS.attack) return;

    this.action = this.actions.attack;
    this.frameCounter = 0;

    this.insertEffects();
    this.sounds.attack();
  }

  death() {
    if (this.action.name === MONSTER_ACTIONS.death) return;

    this.action = this.actions.death;
    this.frameCounter = 0;

    this.insertEffects();
    this.sounds.death();
  }

  insertEffects() {
    this.effects = cloneWithElements({
      actionEffects: this.action.effects,
      position: this.position,
      direction: this.direction,
      effects: this.effects,
      showHitbox: this.isHitboxVisible,
      borderColor: 'yellow',
      bgColor: 'rgba(255,255,0,0.25)',
    });
  }

  removeHitbox() {
    this.effects?.map((item) => item.elements?.hitbox?.remove());
  }

  playEffects() {
    this.effects?.forEach((item, i) => {
      if (!_.isEmpty(item.frames?.[item.character.direction])) {
        const frame = item.frames[item.character.direction].shift();
        const effectElement = item.elements.effect;

        effectElement.style.visibility = 'visible';

        effectElement.style.transform = frame.transform;
        effectElement.style.backgroundPositionX = frame.backgroundPositionX;

        if (!item.frames[item.character.direction].length)
          effectElement.remove();
      }
      if (!_.isEmpty(item.hitbox?.[item.character.direction])) {
        const getHitbox = item.hitbox[item.character.direction].shift();
        const hitbox = getHitbox(item.character.position);
        const hitboxElement = item.elements.hitbox;

        hitboxElement.style.visibility = 'visible';

        hitboxElement.style.width = hitbox.dimensions.width;
        hitboxElement.style.height = hitbox.dimensions.height;

        hitboxElement.style.top = hitbox.position.top;
        hitboxElement.style.left = hitbox.position.left;

        this.hitbox = hitbox.vertices;

        if (!item.hitbox[item.character.direction].length) {
          hitboxElement.remove();
          this.hitbox = {};
        }
      }

      if (
        _.isEmpty(item.frames?.[item.character.direction]) &&
        _.isEmpty(item.hitbox?.[item.character.direction])
      )
        this.effects.splice(i, 1);
    });
  }

  updatePosition() {
    if (this.action.img === this.element.style.backgroundImage)
      this.imgPosition = this.action.getPosition(this.position)[this.direction];

    this.element.style.top = this.imgPosition.y + 'px';
    this.element.style.left = this.imgPosition.x + 'px';

    this.updateHurtbox();
  }

  updateHurtbox() {
    this.hurtbox.vertices = this.action.getHurtbox(this.position).vertices;

    this.hurtbox.element.style.top = this.action.getHurtbox(
      this.position
    ).position.top;
    this.hurtbox.element.style.left = this.action.getHurtbox(
      this.position
    ).position.left;

    this.hurtbox.element.style.width = this.action.getHurtbox(
      this.position
    ).dimensions.width;
    this.hurtbox.element.style.height = this.action.getHurtbox(
      this.position
    ).dimensions.height;
  }

  updateFrame() {
    this.element.style.backgroundImage = this.action.img;

    this.element.style.height = this.action.dimensions.height + 'px';
    this.element.style.width = this.action.dimensions.width + 'px';

    const frame = this.action.frames[this.direction][this.frameCounter];

    this.element.style.backgroundPositionX = frame.backgroundPositionX;
    this.element.style.transform = frame.transform;

    this.updatePosition();
  }

  die() {
    this.health = 0;
    this.death();
  }

  gravity() {
    this.vector.y += ACCELERATION;
  }

  destroy() {
    this.element.remove();
    this.hurtbox.element.remove();
    this.hitbox = {};
    this.removeHitbox();
  }

  update() {
    if (this.frameCounter >= this.action.frames[this.direction].length) {
      if (this.action.name === MONSTER_ACTIONS.death)
        return (this.isDead = true);
      if (this.action.name !== MONSTER_ACTIONS.death) this.frameCounter = 0;
    }

    this.playEffects();
    this.updateFrame();
    this.frameCounter++;
  }

  loop() {
    nextPosition({
      hurtbox: this.hurtbox.vertices,
      blocks: this.blocksVertices,
      vector: this.vector,
      position: this.position,
      collision: this.collision,
      miscs: this.miscs,
    });

    if (this.collision.bottom) {
      this.vector.y = 0;

      if (this.vector.x === 0) this.idle();
    }

    this.updatePosition();
    this.gravity();
  }

  showHurtbox() {
    addBoxEffect({
      element: this.hurtbox.element,
      borderColor: 'red',
      bgColor: 'rgba(255,0,0,0.25)',
    });
  }

  hideHurtbox() {
    this.hurtbox.element.style.border = 'none';
    this.hurtbox.element.style.background = 'none';
  }

  showHitbox() {
    this.isHitboxVisible = true;

    this.effects.map((effect) => {
      addBoxEffect({
        element: effect.elements.hitbox,
        borderColor: 'yellow',
        bgColor: 'rgba(255,255,0,0.25)',
      });
    });
  }

  hideHitbox() {
    this.isHitboxVisible = false;

    this.effects.map((effect) => {
      effect.elements.hitbox.style.border = 'none';
      effect.elements.hitbox.style.background = 'none';
    });
  }

  spawn({ position }) {
    this.element = createElement({
      position,
      dimensions: this.action.dimensions,
      img: this.action.img,
    });

    this.hurtbox.element = document.createElement('div');
    this.hurtbox.element.style.position = 'absolute';

    document.getElementById('monsters').appendChild(this.element);
    document.getElementById('monsters').appendChild(this.hurtbox.element);

    this.position = { ...position };
  }
}
