// 중복 없는 요소 찾아내기

// 어떻게 풀것인가?
// filter메서드 사용하기

function solution(arr) {
  const result = arr.sort().filter((item, index, arr) =>
    arr.indexOf(item) == index
  );

  return result;
};

test("run", () => {
  let arr = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  expect(solution(arr)).toEqual([":-O", "Hare", "Krishna"]);
});
