// function getText(text: any): any {
//   return text;
// }

// getText('hi'); // 'hi'
// getText(10); // 10
// getText(true); // true

// function getText<T>(text: T): T {
//   return text;
// }

// getText<string>('hi');
// getText<number>(10);
// getText<boolean>(true);

// function getItemArray(arr: any[], index: number): any {
//   return arr[index];
// }

// function pushItemArray(arr: any[], item: any): void {
//   arr.push(item);
// }

// function getItemArray<T>(arr: T[], index: number): T {
//   return arr[index];
// }

// function pushItemArray<T>(arr: T[], item: T): void {
//   arr.push(item);
// }

// const techStack = ['js', 'react'];
// const nums = [1, 2, 3, 4];

// getItemArray(techStack, 0); // 'js'
// pushItemArray<string>(techStack, 'ts'); // ['js', 'react', 'ts']

// // pushItemArray<number>(techStack, 123); // Error

// getItemArray(nums, 0); // 1
// pushItemArray(nums, 5); // [1, 2, 3, 4, 5];

// function printOut<T>(input: T[]): T[] {
//   console.log(input.length); // Error: T doesn't have .length
//   return input;
// }

// printOut([1, 2, 3]);

// interface LengthWise {
//   length: number;
// }

// function printOut<T extends LengthWise>(input: T): T {
//   console.log(input.length);
//   return input;
// }

// printOut(10); // Error, 숫자 타입에는 `length`가 존재하지 않으므로 오류 발생
// printOut({ length: 0, value: 'hi' }); // `text.length` 코드는 객체의 속성 접근과 같이 동작하므로 오류 없음

// const arr = [1, 2, 3];
// const [n1, n2, n3] = arr;
// arr.push('a');

// const obj = { numId: 1, stringId: '1' };
// const { numId, stringId } = obj;
// console.log(numId === stringId);

// const func1 = (a = 'a', b = 1) => {
//   return `${a} ${b};`;
// };
// func1(3, 6);

// const v1: number = func1('a', 1);

// const func2 = (value: number) => {
//   if (value < 10) {
//     return value;
//   } else {
//     return `${value} is big`;
//   }
// };
