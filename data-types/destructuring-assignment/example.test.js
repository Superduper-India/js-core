function example() {
  const arr = ["Bora", "Lee"] // 이름과 성을 요소로 가진 배열
  // 구조 분해 할당을 이용해
  // firstName엔 arr[0]을
  // surname엔 arr[1]을 할당하였습니다.
  let [firstName, surname] = ["Bora", "Lee"];
  console.log(firstName, surname); // Bora Lee
}

function example1() {
  // 구조 분해 할당을 이용해 요소를 생략했습니다.
  let [name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
  console.log(name, title); // Julius Consul
}

function example2() {
  let user = {
    name: "John",
    age: 30
  };

  // Object.entries(obj)메서드와 구조 분해를 조합하여 할당에 이용할 수 있습니다.
  for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
  }
}

function example3() {
  // 두 변수에 저장된 값을 교환할 때 구조 분해 할당을 사용
  let name = "sunyoung";
  let gender = "female";

  [name, gender] = [gender, name];

  console.log(name, gender); // female sunyoung
}

function example4() {
  // ...로 나머지 요소 가져오기
  let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

  console.log(name1, name2, rest[0], rest[1], rest.length);
  // Julius Caesar Consul of the Roman Republic 2
}

function example5() {
  // 기본값
  let [name = "Guest", surname = "Anonymous"] = ["Julius"];

  console.log(name);    // Julius (배열에서 받아온 값)
  console.log(surname); // Anonymous (기본값)
}

function example6() {
  let options = {
    title: "Menu"
  };

  let { width: w = 100, height: h = 200, title } = options;

  console.log(title);  // Menu
  console.log(w);      // 100
  console.log(h);      // 200
}

function example7() {
  // let없이 사용하기
  let title, width, height;

  // 에러가 발생하지 않습니다.
  ({ title, width, height } = { title: "Menu", width: 200, height: 100 });

  console.log(title); // Menu
}

function example8() {
  // 함수에 전달할 객체
  let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };

  // 똑똑한 함수는 전달받은 객체를 분해해 변수에 즉시 할당함
  function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    // title, items – 객체 options에서 가져옴
    // width, height – 기본값
    console.log(`${title} ${width} ${height}`); // My Menu 200 100
    console.log(items); // Item1, Item2
  }

  showMenu(options);
}

test("run", () => {
  // expect(example()).toBe();
  // expect(example1()).toBe();
  // expect(example2()).toBe();
  // expect(example3()).toBe();
  // expect(example4()).toBe();
  // expect(example5()).toBe();
  // expect(example6()).toBe();
  // expect(example7()).toBe();
  expect(example8()).toBe();
});
