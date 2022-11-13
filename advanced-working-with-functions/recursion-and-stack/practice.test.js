// 주어진 숫자까지의 모든 숫자 더하기
function practice(num) {
  // for 반복문 사용하기
  // let sum = 0;
  // for (let i = 1; i <= num; i++) {
  //   sum += i;
  // }
  // return sum;

  // 재귀 사용하기
  if (num === 1) return num; // 기저조건
  return num + practice(num - 1);

  // 등차수열의 합공식 사용하기
  // return num * (num + 1) / 2;
}

// 팩토리얼 계산하기
function practice2(num) {
  // if (num === 1) return num; // 기저조건
  // return num * practice2(num - 1);

  // 리팩터링
  return num ? num * practice2(num - 1) : 1;
}

function practice3(num) {
  console.log(num)
}

test("run", () => {
  expect(practice(1)).toBe(1);
  expect(practice(2)).toBe(3);
  expect(practice(3)).toBe(6);
  expect(practice(4)).toBe(10);
  expect(practice(100)).toBe(5050);

  expect(practice2(5)).toBe(120);

  expect(practice3(3)).toBe(2);
});
