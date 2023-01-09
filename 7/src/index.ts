// * 기본 정의
interface Person {
  name: string;
  age: number;
}

const person1: Person = { name: 'js', age: 20 };
const person2: Person = { name: 'ljs', age: 'twenty' };

// // * 선택 속성
// interface Person {
//   name: string;
//   age?: number;
// }

// const person1: Person = { name: 'js', age: 20 };

// // * Read only 속성
// interface Person {
//   readonly name: string;
//   age?: number;
// }

// const person1: Person = { name: 'js' };
// person1.name = 'ljs';

// let readOnlyArr: ReadonlyArray<number> = [1,2,3];
// readOnlyArr.splice(0,1); // error
// readOnlyArr.push(4); // error
// readOnlyArr[0] = 100; // error

// // * index type
// interface Person {
//   readonly name: string;
//   [key: string]: string | number;
// }

// const p1: Person = { name: 'js', birthday: '비밀', age: 20 };

// // * 함수 타입 인터페이스
// interface Print {
//   (name: string, age: number): string;
// }
// // type Print = (name: string, age: number) => string;

// const getNameAndAge: Print = function (name, age) {
//   return `name: ${name}, age: ${age}`;
// };

// // * 인터페이스 확장
// interface Person {
//   name: string;
//   age: number;
// }

// interface Korean extends Person {
//   birth: 'KOR';
// }

// interface Korean {
//   name: string;
//   age: number;
//   birth: 'KOR';
// }

// interface Developer {
//   job: 'developer';
// }

// interface KorAndDev extends Person, Developer {}

// interface KorAndDev {
//   name: string;
//   age: number;
//   birth: 'KOR';
//   job: 'developer';
// }

// // * intersection Type
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
}

type DevJob = Person & Developer;

const nbcPerson: DevJob = {
  name: 'a',
  age: 20,
  skill: 'ts',
};
