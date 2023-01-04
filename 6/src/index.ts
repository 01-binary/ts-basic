import type { Hero } from './type';

export {};

//* 유니온 타입
const print = (input: string | number) => {
  //
};

//* 유니온 타입의 장점
// any를 사용하는 경우
function getAge(age: any) {
  age.toFixed(); // 에러 발생, age의 타입이 any로 추론되기 때문에 숫자 관련된 API를 작성할 때 코드가 자동 완성되지 않는다.
  return age;
}

// 유니온 타입을 사용하는 경우
// function getAge(age: number | string) {
//   if (typeof age === 'number') {
//     age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.
//     return age;
//   }
//   if (typeof age === 'string') {
//     return age;
//   }
//   return new TypeError('age must be number or string');
// }

//* Type Alias (사용자 정의 타입)

// const hero1: { name: string; power: number; height: number } = {
//   name: '슈퍼맨',
//   power: 1000,
//   height: 190,
// };

// const printHero = (hero: { name: string; power: number; height: number }) => {
//   console.log(hero.name, hero.power);
// };

// console.log(printHero(hero1));

////////

const hero1: Hero = {
  name: '슈퍼맨',
  power: 1000,
  height: 190,
};

const printHero = (hero: Hero) => {
  console.log(hero.name, hero.power);
};

console.log(printHero(hero1));
