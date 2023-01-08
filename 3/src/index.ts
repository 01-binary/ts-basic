// * String
let str: string = 'TypeScript';

// : <- 타입 표기(Type Annotation)

str = 123; // Error
str = true; // Error
str = undefined; // Error

let fullName: string = `NBC`;
let age: number = 10;
let sentence: string = `my name is ${fullName}. I'm ${age + 1} years old`;

// * Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// * Boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

// * Array
let arr: number[] = [1, 2, 3];
let array: Array<number> = [1, 2, 3];

let arr2: string[] = ['1', '2', '3'];
let arr3: boolean[] = [true, false, true];

// * Tuple
let x: [string, number];
x = ['hi', 1];
x = [1, 'hi']; // Error
console.log(x[0], x[1]);
console.log(x[2]); // Error

x[2] = 'world'; // Error

let tuple: [string, number, boolean] = ['str', 1, false];

// * Any
let anyStr: any = 'hi';
let anyNum: any = 10;
let anyArr: any = ['a', 2, true];

let 애니: any = 4;
애니 = '애니다.';
애니 = false;

let list: any[] = [1, true, 'free'];
// let list: (number | boolean | string)[] = [1, true, "free"];

list[1] = 100;

// * Void
function c(): void {
  console.log('c');
}

// * Null, Undefined
let a: null = null;
let b: undefined = undefined;

let unionType: number | null = null;
