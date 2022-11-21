// 나머지 매개변수
function example(...args) {
  let sum = 0;

  for (const arg of args) sum += arg;

  console.log(sum);
}

function example2(firstName, lastName, ...titles) {
  console.log(firstName + ' ' + lastName);
  console.log(titles[0], titles[1], titles.length);
}

function example3() {
  console.log(arguments); // { '0': 'Sunyoung', '1': 'Park' }
  console.log(arguments[0], arguments[1], arguments.length); // Sunyoung Park 2
  // console.log(arguments.map(i => { console.log(i) }))
  // TypeError: arguments.map is not a function
}

// 스프레드 문법
function example4() {
  let arr = [3, 5, 1];
  let arr2 = [8, 9, 10];
  console.log(Math.max(...arr, ...arr2, 25)); // 최댓값 25
  console.log([0, ...arr, 2, ...arr2]); //[0, 3, 5, 1, 2, 8, 9, 10]
  console.log([..."Hello"]);
  console.log(Array.from("Hello"));
}

// 배열 복사본 만들기
function example5() {
  let arr = [1, 2, 3];
  let arrCopy = [...arr];
  // 배열을 펼쳐서 각 요소를 분리후(확장), 매개변수 목록으로 만든 다음에
  // 매개변수 목록을 새로운 배열에 할당함

  // 배열 복사본의 요소가 기존 배열의 요소와 같을까?
  console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true
  // 두 배열은 같을까?
  console.log(arr === arrCopy); // false (참조가 다름)

  // 참조가 다르므로 기존 배열을 수정해도 복사본은 영향을 받지 않는다.
  arr.push(4);
  console.log(arr, arrCopy); // [ 1, 2, 3, 4 ] [ 1, 2, 3 ]
}

// 객체의 복사본 만들기
function example6() {
  let obj = { a: 1, b: 2, c: 3 };
  let objCopy = { ...obj };
  // 객체를 펼쳐서 각 요소를 분리후(확장), 매개변수 목록으로 만든 다음에
  // 매개변수 목록을 새로운 객체에 할당함 

  // 객체 복사본의 요소가 기존 객체의 요소와 같을까?
  console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
  // 두 객체는 같을까?
  console.log(obj === objCopy); // false (참조가 다름)

  // 참조가 다르므로 기존 객체를 수정해도 복사본은 영향을 받지 않는다.
  obj.d = 4;
  console.log(obj, objCopy);
  // { a: 1, b: 2, c: 3, d: 4 } { a: 1, b: 2, c: 3 }
}

// 나머지 매개변수와 스프레드 문법 사용예시(실습)
function example7() {
  // 나머지 매개변수
  const rest = (a, b, ...c) => {
    console.log(a, b, c)
  }
  rest(1, 2, 3, 4, 5, 6, 7); // 이 함수는 인수를 무한정 받을 예정입니다...

  // 스프레드 연산자
  const arr = [1, 2, 3];

  const spread = (a, b, c, ...d) => {
    console.log(a, b, c, d)
  }

  spread(...arr, 4, 5); // 이 함수의 매개변수로 arr의 요소들을 넘겨주고 싶습니다.
}

test("run", () => {
  // expect(example(1, 2, 3, 4, 5)).toBe();
  // expect(example2(
  //   "Sunyoung", "Park", "Frontend developer", "Fashion designer"
  // )).toBe();
  // expect(example3("Sunyoung", "Park")).toBe();
  // expect(example4()).toBe();
  // expect(example5()).toBe();
  // expect(example6()).toBe();
  expect(example7()).toBe();
});
