// 애너그램 걸러내기

// 어떻게 풀것인가?
// a: arr의 요소를 글자단위로 분해해서 알파벳 순서대로 정렬해야한다.
// new Map()메서드로 맵을 만든다.
// map.set(key, value) => a를 key값으로, value값을 해당하는 단어 하나만 저장한다.

function solution(arr) {
  const map = new Map();

  arr.forEach((word) => {
    const sorted = word.split('').sort().join('').toLowerCase();
    map.set(sorted, word);
  });

  return Array.from(map.values());
}

test("run", () => {
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

  expect(solution(arr)).toStrictEqual(["PAN", "hectares", "era"]);
  // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.
});
