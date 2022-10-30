// 객체 매핑하기

// 어떻게 풀것인가?
// users을 맵핑한다. 
// 템플릿 리터럴을 활용하여 `${user.name} ${user.surname}`

function solution(users) {
  return users.map(user => {
    return {
      fullName: `${user.name} ${user.surname}`,
      id: user.id,
    }
  });
}

test("run", () => {
  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };
  let users = [john, pete, mary];

  expect(solution(users)).toEqual([
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ]);
});
