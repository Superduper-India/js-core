function example() {
  // global.alert('hello') // 전역 객체의 모든 프로퍼티는 직접 접근이 가능하다.
  var five = 5; // var로 선언한 전역 함수나 변수는 전역 객체의 프로퍼티가 된다.
  // console.log(global.five); // 5

  // 하지만 위의 방법은 모듈을 사용하는 모던 자바스크립트에서 지원하지 않는다.
  // 중요한 변수를 모든 곳에서 사용할 수 있게 하려면,
  // 아래와 같이 전역 객체에 직접 프로퍼티를 추가하자.
  global.currentUser = {
    name: "John"
  };

  console.log(currentUser.name); // 모든 스크립트에서 currentUser에 접근할 수 있다.
  // 지역 변수 'currentUser'가 있다면
  // 지역 변수와 충돌 없이 전역 객체 global에서 이를 명시적으로 가져올 수 있다.
  console.log(global.currentUser.name);
}

// 폴리필 사용하기
function example2() {
  if (!global.Promise) {
    console.log('구식 브라우저이다!');
    // global.Promise = ... // 모던 js에서 지원하는 기능을 직접 구현
  } else {
    console.log('멋진 최신 브라우저군요. 🤩')
  }
}

test("run", () => {
  expect(example()).toBe();
  expect(example2()).toBe();
});
