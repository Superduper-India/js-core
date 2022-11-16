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

// 피보나치 수 계산하기
// 피보나치 수란?? 첫째와 둘째 항이 1이며, 그 뒤의 모든 항은 바로 앞 두항의 합인 수열
function practice3(num) {
  // return num <= 1 ? num : practice3(num - 1) + practice3(num - 2);

  let a = 1, b = 1;
  for (let i = 3; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// 단일 연결 리스트 출력하기 - 리스트 내 항목을 차례대로 하나씩 출력해주는 함수
function practice4(list) {
  // 반복문을 활용
  // let tmp = list;
  // while (tmp) { // "", null, undefined, 0, NaN 은 false가 반환됨
  //   console.log(tmp.value)
  //   tmp = tmp.next;
  // }

  // 재귀를 활용
  console.log(list.value);
  if (list.next) practice4(list.next);
}

// 단일 연결 리스트 역순으로 출력하기
function practice5(list) {
  // 반복문을 활용
  // let arr = [];
  // let tmp = list;

  // while (tmp) {
  //   arr.push(tmp.value);
  //   tmp = tmp.next;
  // }

  // for (let i = arr.length - 1; i >= 0; i--) {
  //   console.log(arr[i]);
  // }

  // 재귀를 활용
  if (list.next) {
    practice5(list.next);
  };

  console.log(list.value)
}

test("run", () => {
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  // expect(practice(1)).toBe(1);
  // expect(practice(2)).toBe(3);
  // expect(practice(3)).toBe(6);
  // expect(practice(4)).toBe(10);
  // expect(practice(100)).toBe(5050);

  // expect(practice2(5)).toBe(120);

  // expect(practice3(1)).toBe(1);
  // expect(practice3(2)).toBe(1);
  // expect(practice3(3)).toBe(2);
  // expect(practice3(7)).toBe(13);
  // expect(practice3(77)).toBe(5527939700884757);

  // expect(practice4(list)).toBe();
  expect(practice5(list)).toBe();
});
