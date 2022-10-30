// 평균 나이 구하기

// 어떻게 풀것인가?
// arr에 forEach메서드를 적용한다.
// sum =0 초깃값을 설정해놓고 sum += obj.age; 해준다.
// 최종적으로 sum/arr.length 해준다.

function solution(arr) {
  let sum = 0;

  arr.forEach(obj => {
    sum += obj.age;
  });

  return sum / arr.length;
};

test("run", () => {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  let arr = [pete, john, mary];

  expect(solution(arr)).toEqual(28);
});
