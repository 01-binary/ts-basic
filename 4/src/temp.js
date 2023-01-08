function add(n1, n2) {
  return n1 + n2;
}

function add2(n1, n2) {
  if (!n2) return n1;
  return n1 + n2;
}

const a2 = add2(1, 2);
const b2 = add2(10, 20, 30);
const c2 = add2(10);

function add3(n1, n2 = 0) {
  if (!n2) return n1;
  return n1 + n2;
}

const a3 = add3(1, 2);
const b3 = add3(10, 20, 30);
const c3 = add3(10);
