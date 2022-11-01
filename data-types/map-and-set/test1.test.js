// 배열에서 중복 요소 제거하기

// 어떻게 풀것인가?
// 셋을 이용한다.

function solution(arr) {
  return Array.from(new Set(arr));
}

test("run", () => {
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  expect(solution(values)).toEqual(["Hare", "Krishna", ":-O"]);
});
