// 예제1. 맵은 키에 다양한 자료형을 허용한다.
function example() {
  let map = new Map();

  // key를 이용해 value를 저장
  map.set('1', 'str1'); // 문자형 키
  map.set(1, 'num1'); // 숫자형 키
  map.set(true, 'bool1'); // 불린형 키

  // 객체는 키를 문자형으로 변환한다는 걸 기억하고 계신가요?
  // 맵은 키의 타입을 변환시키지 않고 그대로 유지합니다. 따라서 아래의 코드는 출력되는 값이 다릅니다.
  console.log(map.get(1)); // 'num1'
  console.log(map.get('1')); // 'str1'

  console.log(map.size); // 3
}

// 예제2. ⭐️ 맵은 키로 객체를 허용한다.
function example2() {
  let john = {
    name: "John",
    age: "19",
  };

  for (let name in john) {
    console.log(typeof name) // string
  }

  let visitsCountMap = new Map();

  visitsCountMap.set(john, 123);

  console.log(visitsCountMap, visitsCountMap.get(john));
}

// 예제3. 객체엔 객체 키를 사용할 수는 없다.
function example3() {
  let john = { name: "John" };

  let visitsCountMap = {};

  // visitsCountMap은 객체기 때문에 모든 키를 문자형으로 변환시킨다.
  // 이 과정에서 john은 문자형으로 변환되어 '[object Object]'가 된다.
  visitsCountMap[john] = 123;
  console.log(visitsCountMap); // { '[object Object]': 123 }
}

// 예제4. map.set은 호출할 때마다 맵 자신이 반환된다. 이를 이용해 체이닝할 수 있다.
function example4() {
  const map = new Map();

  map.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1');

  console.log(map); // Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }
}

// 예제5. 맵의 요소에 반복 작업하기 ⭐️ 객체와 다르게 맵은 삽입순서를 기억한다.
function example5() {
  // 각 요소가 키-값 쌍인 배열로 새로운 맵을 만듦
  let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
  ]);
  console.log(recipeMap); // Map(3) { 'cucumber' => 500, 'tomatoes' => 350, 'onion' => 50 }

  // 키(vegetable)를 대상으로 순회하기
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }

  // 값(amount)를 대상으로 순회하기
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }

  // [키, 값] 쌍을 대상으로 순회하기
  for (let entry of recipeMap) { // recipeMap.entries()와 동일
    console.log(entry); // [ 'cucumber', 500 ] ...
  }

  // 맵은 배열과 유사하게 내장메서드 forEach를 지원, 각 (키, 값) 쌍을 대상으로 함수를 실행
  recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 ...
  });
}

// 예제6. 객체 => 키-값쌍을 요소로 갖는 배열 => 새로운 맵
function example6() {
  let obj = {
    name: "John",
    age: 30,
  };

  let map = new Map(Object.entries(obj));
  console.log(map); // Map(2) { 'name' => 'John', 'age' => 30 }
}

// 예제7. 맵 => 키-값쌍을 요소로 갖는 배열 => 객체
function example7() {
  let map = new Map();
  map.set('banana', 1)
    .set('orange', 2)
    .set('meat', 4);

  console.log(map.entries()); // { [ 'banana', 1 ], [ 'orange', 2 ], [ 'meat', 4 ] }

  // let obj = Object.fromEntries(map); 동일한 결과값을 얻습니다.
  let obj = Object.fromEntries(map.entries());

  console.log(obj); // { banana: 1, orange: 2, meat: 4 }
}

test("run", () => {
  //expect(example()).toBe();
  // expect(example2()).toBe();
  // expect(example3()).toBe();
  // expect(example4()).toBe();
  // expect(example5()).toBe();
  // expect(example6()).toBe();
  expect(example7()).toBe();
});
