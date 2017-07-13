const nil = {
  toString: () => 'Nil',
  __toString: () => 'Nil',
};

function List(head = nil, tail = nil) {
  const isEnd = tail === nil;

  const map = f => List(f(head), isEnd ? nil : tail.map(f));
  const concat = other => List(head, isEnd ? other : tail.concat(other));
  const push = x => concat(List(x));

  const toString = () => `List(${head}, ${tail.__toString()})`;
  const __toString = () => `${head}${isEnd ? '' : `, ${tail.__toString()}`}`;

  return { head, tail, map, concat, push, toString, __toString };
}

List.of = (x, ...xs) => List(x, !xs.length ? nil : List.of(...xs));
List.empty = List();

console.log(`${List.of(1, 2).push(3)}`);

