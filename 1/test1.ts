export {};

interface Person {
  name: string;
  gender: string;
}

const person: Person = {
  name: 'js',
  gender: 'man',
};

console.log(person.age);

let a: void = undefined;

function c(): void {
  console.log('c');
}
