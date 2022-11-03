// 예제1. 자료구조의 참조를 null로 덮어쓰면 도달할 수 없지만,
// 요소를 null로 덮어쓰면 도달할 수 있다.
function example() {
  let john = { name: "John" };
  // console.log(john.name);  // 위 객체는 john이라는 참조를 통해 접근할 수 있다.
  // john = null; // 하지만 참조를 null로 덮어쓰게되면 더 이상 객체에 도달할 수 없게 되어 객체가 메모리에서 삭제된다.
  // console.log(john.name); // TypeError: Cannot read properties of null (reading 'name')

  let array = [john];
  john = null; // 참조를 null로 덮어씀

  console.log(array[0]); // john객체는 배열의 요소인 john객체는 가비지 컬렉터의 대상이 되지 않았다.
}

// 예제2. 맵도 마찬가지로 요소를 null로 덮어써도 도달할 수 있다.
function map() {
  let john = { name: "John" };
  let map = new Map();
  map.set(john, "...");
  john = null; // 참조를 null로 덮어씀

  // john을 나타내는 객체는 맵 안에 저장되어있습니다.
  // map.keys()를 이용하면 해당 객체를 얻는 것도 가능합니다.
  for (let obj of map.keys()) {
    console.log(map.size);
    console.log(JSON.stringify(obj));
  }
}

// 예제3. 위크맵은 객체키만 받는다, 그리고 요소의 참조를 덮어쓰면 도달할 수 없게된다.
function weakmap() {
  let weakMap = new WeakMap();
  let obj = {};

  weakMap.set(obj, "ok"); //정상적으로 동작합니다(객체 키).

  // 문자열("test")은 키로 사용할 수 없습니다.
  // weakMap.set("test", "Whoops"); // Error: Invalid value used as weak map key

  console.log(weakMap.get(obj)); // "ok"
  obj = null; // 참조를 덮어씀
  // john을 나타내는 객체는 이제 메모리에서 지워집니다!
  console.log(weakMap.get(obj)); // undefined
}

test("run", () => {
  // expect(example()).toBe();
  // expect(map()).toBe();
  expect(weakmap()).toBe();
});
