import Collectible from "../../collectible.js";
import STATES from "./data/index.js";

export default class HealthPotion extends Collectible {
  constructor() {
    super({ states: STATES });
  }

  update() {};

  collect() {
    this.hero.hearts++;
    this.isCollected = true;
  }
}