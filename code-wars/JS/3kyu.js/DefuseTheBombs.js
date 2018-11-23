// Bomb 1
Bomb.diffuse(42);
//Bomb 2
Bomb.diffuse('just keep trying');
Bomb.diffuse('just keep trying');
Bomb.diffuse('just keep trying');
Bomb.diffuse('just keep trying');
Bomb.diffuse('just keep trying');
//Bomb 3
Bomb.diffuse(BombKey);
//Bomb 4
let diffuseTheBomb = () => true;
Bomb.diffuse()
// bomb 5
Bomb.diffuse(3.14159)
// Bomb 6
Bomb.diffuse(new Date().setFullYear(new Date().getFullYear() - 4));
// Bomb 7
class c {
  get key() {
    return 43;
  }
  set key(a) {
  }
}
Bomb.diffuse(new c());
// Bomb 8
class ob {
  constructor() {
    this.num = 100;
  }
  valueOf() {
    this.num = -this.num;
    return this.num;
  }
}
Bomb.diffuse(new ob());
//Bomb 9
Math.random = () => {
  if (!this.count) {
    this.count = 0;
  }
  this.count++;

  if (this.count == 3) {
    return 0.5;
  }
  return 1;
}

Bomb.diffuse(42);
//Bomb 10
Array.prototype.valueOf = function () { return this.reduce((a, b) => a + b) }
Bomb.diffuse('eWVz')
console.log(Bomb);
