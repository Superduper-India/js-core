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

// 예제4. 위크맵으로 객체를 메모리에서 삭제하면 객체에 대한 정보도 지워줄 수 있다.
function usecase1() {
  let visitsCountMap = new WeakMap(); // 맵에 사용자의 방문 횟수를 저장함

  // 사용자가 방문하면 방문 횟수를 늘려줍니다.
  function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
  }

  let john = { name: "John" };
  countUser(john); // John의 방문 횟수를 증가시킵니다.

  // John의 방문 횟수를 셀 필요가 없어지면 아래와 같이 john을 null로 덮어씁니다.
  john = null;
  console.log(visitsCountMap);
  // 맵 => Map(1) { { name: 'John' } => 1 }
  // 위크맵 => WeakMap { <items unknown> }
}

// 예제5. 위크맵은 캐싱을 사용할 때 유용하다.
// 캐싱이란? 함수를 여러번 호출해야할 때, 
// 최초호출 반환값을 저장해뒀다가 추가호출시 함수를 실행시키는 대신 저장된 값을 사용하는 것을 말한다.
function usecase2() {
  let cache = new WeakMap();

  // 연산을 수행하고 그 결과를 맵에 저장합니다.
  function process(obj) {
    if (!cache.has(obj)) {
      let result = /* 연산 수행 */ obj;
      cache.set(obj, result);
    }
    return cache.get(obj);
  }

  // 함수 process()를 호출해봅시다.
  let obj = {/* ... 객체 ... */ };
  let result1 = process(obj); // 함수를 호출합니다.
  // 동일한 함수를 두 번째 호출할 땐,
  let result2 = process(obj); // 연산을 수행할 필요 없이 맵에 저장된 결과를 가져오면 됩니다.

  // 객체가 쓸모없어지면 아래와 같이 null로 덮어씁니다.
  obj = null;

  console.log(cache);
}

test("run", () => {
  // expect(example()).toBe();
  // expect(map()).toBe();
  // expect(weakmap()).toBe();
  // expect(usecase1()).toBe();
  expect(usecase2()).toBe();
});
