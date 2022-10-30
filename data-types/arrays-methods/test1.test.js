// border-left-width를 borderLeftWidth로 변경하기

// 어떻게 풀것인가?
// split메서드를 이용해 -를 기준으로 문자열을 배열에 담는다.
// map메서드를 이용해 index가 0보다 크면 item[0](첫글자)를 .toUpperCase해준다.
// slice메서드를 이용해 item.splice(0, 1);
// 그리고, join메서드를 이용해 ''를 기준으로 하나의 문자열로 합친다.

function solution(str) {
  const arr = str.split('-');
  const newArr = arr.map((item, index) => {
    if (index > 0) {
      return item[0].toUpperCase() + item.slice(1, item.length);
    } else {
      return item;
    }
  });

  return newArr.join('');
}

test("run", () => {
  expect(solution("background-color")).toBe('backgroundColor');
  expect(solution("list-style-image")).toBe('listStyleImage');
  expect(solution("-webkit-transition")).toBe('WebkitTransition');
});
