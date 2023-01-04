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

//* 문자형 이넘
// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }

//* 복합 이넘 (권고하지 않음)
// enum BooleanLikeHeterogeneousEnum {
//   No = 0,
//   Yes = 'YES',
// }

//* 런타임 시점에서의 이넘 특징
// enum E {
//   X,
//   Y,
//   Z,
// }

// function getX(obj: { X: number }) {
//   return obj.X;
// }
// getX(E); // 이넘 E의 X는 숫자이기 때문에 정상 동작
