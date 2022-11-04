function example() {
  const id = Symbol('id');

  let user = {
    name: "John",
    age: 30,
    [id]: 123,
  };

  console.log(Object.keys(user)); // [ 'name', 'age' ] 키들이 담긴 배열을 반환한다.
  console.log(Object.values(user)); // [ 'John', 30 ] 값들이 담긴 배열을 반환한다.
  console.log(Object.entries(user)); // [ [ 'name', 'John' ], [ 'age', 30 ] ] 
  // [키, 값] 쌍을 담은 반환한다.

  for (const value of Object.values(user)) {
    console.log(value); // 일반 객체용 메서드는 키가 심볼형인 프로퍼티를 무시한다.
  }
}

function example2() {
  const prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };

  const pricesArr = Object.entries(prices); // 객체 => 배열

  const doublePrice = Object.fromEntries(
    pricesArr.map(([key, value]) => [key, value * 2])
  ); // 배열 => 객체

  console.log(doublePrice);
}

test("run", () => {
  // expect(example()).toBe();
  expect(example2()).toBe();
});
