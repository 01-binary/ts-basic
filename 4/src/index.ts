function add(n1: number, n2: number): number {
  return n1 + n2;
}

// const add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

const a = add(1, 2);
const b = add('1', 2); // Error
const c = add(10, 20, 30); // Error
const d = add(10); // Error

function printResult(num: number): void {
  console.log('Result' + num);
}

printResult(5);

function add2(n1: number, n2?: number): number {
  // ?는 나중에 추가
  if (!n2) return n1;
  return n1 + n2;
}

// function add2(n1?: number, n2: number): number { // 불가
//   if (!n2) return n1;
//   return n1 + n2;
// }

// function add2(n1: number, n2?: number, n3?: number): number {
//   if (!n2) return n1;
//   return n1 + n2;
// }

const a2 = add2(1, 2);
const b2 = add2(10, 20, 30);
const c2 = add2(10);

function add3(n1: number, n2: number = 0): number {
  if (!n2) return n1;
  return n1 + n2;
}

const a3 = add3(1, 2);
const c3 = add3(10);

function add4(n1: number, ...nums: number[]): number {
  let totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return n1 + totalOfNums;
}

const result = add4(10, 20, 30, 40);
