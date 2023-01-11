// function getItemArray(arr: any[], index: number): any {
//   return arr[index];
// }

// function pushItemArray(arr: any[], item: any): void {
//   arr.push(item);
// }

function getItemArray<T>(arr: T[], index: number): T {
  return arr[index];
}

function pushItemArray<T>(arr: T[], item: T): void {
  arr.push(item);
}

const techStack = ['js', 'react'];
const nums = [1, 2, 3, 4];

getItemArray(techStack, 0); // 'js'
pushItemArray<string>(techStack, 'ts'); // ['js', 'react', 'ts']

// pushItemArray<number>(techStack, 123); // Error

getItemArray(nums, 0); // 1
pushItemArray(nums, 5); // [1, 2, 3, 4, 5];
