// 예제1. 셋은 중복을 허용하지 않는 값을 저장한다.
function example() {
  let set = new Set();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  // 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
  set.add(john);
  set.add(pete);
  set.add(mary);
  set.add(john);
  set.add(mary);

  for (let user of set) {
    console.log(user.name); // // John, Pete, Mary 순으로 출력됩니다.
  }
}

// 예제2. 셋의 값에 반복 작업하기
function example2() {
  let set = new Set(["a", "b", "c"]);
  console.log(set); // Set(3) { 'a', 'b', 'c' }

  for (let value of set) console.log(value);

  // 콜백함수에 세 개의 인수가 쓰인 이유: 맵과의 호환성을 위해
  set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain);
  });
}


test("run", () => {
  // expect(example()).toBe();
  expect(example2()).toBe();
});
