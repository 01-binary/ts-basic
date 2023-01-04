"use strict";
//* 숫자형 이넘
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var up = Direction.Up;
// Direction = Direction.UP | Direction.Down | Direction.Left | Direction.Right
var leftOrRight = Direction.Left;
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
