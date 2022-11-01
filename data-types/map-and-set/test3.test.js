// 반복 가능한 객체의 키

// 어떻게 풀것인가?
// map.keys()가 배열이 아니라 이터러블을 반환한다.
// 때문에 map을 배열로 변환하기 위해 Array.from()을 사용한다.

function solution() {
  let map = new Map();

  map.set("name", "John");

  let keys = map.keys();

  Array.from(keys).push("more");
}

test("run", () => {
  expect(solution()).toStrictEqual();
});
