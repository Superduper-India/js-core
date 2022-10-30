// 이름 매핑하기
// name의 값만 담은 새로운 배열을 만들어주는 코드를 작성하라.

// 어떻게 풀것인가?
// .map메서드를 활용해서 users배열을 순회한다.
// user.name만 리턴하게 한다.

function solution(users) {
  return users.map(user => {
    return user.name;
  });
}

test("run", () => {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  let users = [john, pete, mary];

  expect(solution(users)).toEqual(["John", "Pete", "Mary"]);
});
