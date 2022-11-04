// 예제1. 
function weakset() {
  let visitedSet = new WeakSet();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  visitedSet.add(john); // John이 사이트를 방문합니다.
  visitedSet.add(pete); // 이어서 Pete가 사이트를 방문합니다.
  visitedSet.add(john); // 이어서 John이 다시 사이트를 방문합니다.

  // visitedSet엔 두 명의 사용자가 저장될 겁니다.

  // John의 방문 여부를 확인해보겠습니다.
  console.log(visitedSet.has(john)); // true

  // Mary의 방문 여부를 확인해보겠습니다.
  console.log(visitedSet.has(mary)); // false

  john = null; // visitedSet에서 john을 나타내는 객체가 자동으로 삭제됩니다.
}

test("run", () => {
  expect(weakset()).toBe();
});
