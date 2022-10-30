// 배열 복사본을 정렬하기

// 어떻게 풀것인가?
// 배열을 전체를 복사하는 메서드....slice(0, arr.length)를 활용한다.
// 복사배열에 .sort()메서드를 적용한다.

function solution(arr) {
  const copiedArr = arr.slice(0, arr.length);
  return copiedArr.sort();
}

test("run", () => {
  expect(solution(
    ["HTML", "JavaScript", "CSS"]
  )).toEqual(
    ["CSS", "HTML", "JavaScript"]
  );
});
