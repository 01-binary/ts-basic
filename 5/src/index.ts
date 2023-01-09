//* 숫자형 이넘
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const up: Direction = Direction.Up;
// Direction = Direction.UP | Direction.Down | Direction.Left | Direction.Right
const leftOrRight: Direction.Left | Direction.Right = Direction.Left;

console.log(Direction.Up, up);
console.log(Direction[0]);
console.log(Direction[2]);

//* 문자형 이넘
enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

//* 복합 이넘 (권고하지 않음)
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES',
}
