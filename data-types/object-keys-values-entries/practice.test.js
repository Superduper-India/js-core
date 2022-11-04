// 프로퍼티 값 더하기
// 어떻게 풀것인가?
// Object.values(obj)으로 값들만 담긴 배열을 만든다.
// 배열을 순회하여 모두 더한다. 그리고 그 값을 리턴한다.
function practice(obj) {
  let totalSalary = 0;

  const salariesArr = Object.values(obj);
  salariesArr.forEach(i => {
    totalSalary += i;
  });

  return totalSalary;
}

// 프로퍼티 개수 세기
// 어떻게 풀것인가?
// 객체용 메서드를 사용한다. 아무거나 => 배열의 길이를 리턴한다.
function practice2(obj) {
  return Object.keys(obj).length;
}

test("run", () => {
  const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  const user = {
    name: 'John',
    age: 30
  };

  // expect(practice(salaries)).toBe(650);
  expect(practice2(user)).toBe(2);
});
