function example(x, n) {
  // 반복적인 사고를 통한 방법
  // let result = 1;

  // for (let i = 0; i < n; i++) {
  //   result *= x;
  // }

  // return result;

  // 재귀적인 사고를 통한 방법
  // if (n == 1) { // 1번만 곱해야한다면, (기저조건)
  //   return x; // 자기자신을 리턴한다.
  // } else {
  //   return x * example(x, n - 1);
  // }

  return (n == 1) ? x : (x * example(x, n - 1));
}

function example2(department) {
  // 재귀적 자료 구조 순회
  if (Array.isArray(department)) { // department가 배열인 경우
    return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
  } else { // department가 배열이 아닌경우
    let sum = 0;
    for (let subdep of Object.values(department)) { // obj의 값들을 배열에 저장해서 요소를 순회한다.
      console.log(subdep)
      sum += example2(subdep); // 재귀 호출로 요소를 다시 한 번 판단한다.
    }
    return sum;
  }
}

function example3() {
  // 연결 리스트
  let list = { value: 1 };
  list.next = { value: 2 };
  list.next.next = { value: 3 };
  list.next.next.next = { value: 4 };

  list = { value: "new item", next: list };
}

test("run", () => {
  let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],

    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],

      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };

  // expect(example(2, 2)).toBe(4);
  // expect(example(2, 3)).toBe(8);
  // expect(example(2, 4)).toBe(16);
  // expect(example2(company)).toBe(7700);
  expect(example3()).toBe();
});
