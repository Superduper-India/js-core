// 나이를 기준으로 객체 오름차순 정렬하기

// 어떻게 풀것인가?
// arr을 forEach로 반복작업해준다.
// person.ag에 대해서 

function solution(arr) {
  return arr.sort(function (a, b) {
    if (a.age < b.age) return -1;
  }).map(obj => {
    return obj.name;
  });
};

test("run", () => {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  let arr = [pete, john, mary];

  expect(solution(arr)).toEqual(["John", "Mary", "Pete"]);
});
