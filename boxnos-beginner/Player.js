class Player {
  constructor() {
    this.rescued = false; 
  }
  playTurn(warrior) {
    const space = warrior.feel(this.rescued ? "forward" : "backward");
    const health = warrior.health();
    if (space.isEmpty())
      if (health < 16) 
        if (health < this.health)
          warrior.walk(health > 6 ? "forward" : 'backward' );
        else
          warrior.rest();
      else
        warrior.walk(this.rescued ? "forward" : "backward");
    else if (space.getUnit().isBound()) {
      warrior.rescue("backward");
      this.rescued = true;
    } else if (space.getUnit().isEnemy())
      warrior.attack();
    else
      warrior.think("nothing to do.");

    this.health = warrior.health();
  }
}
