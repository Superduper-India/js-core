function example() {
  // ✅ [콜백 기반 비동기 프로그래밍]
  // 무언가를 비동기적으로 수행하는 함수는 '동작이 모두 처리된 후 실행되어야하는 함수'가 들어갈 콜백을 인수로 반드시 제공해야 한다.
  // 👎 이와같은 함수는 load하려는 script가 많아지면 멸망의 피라미드나 콜백지옥같은 문제가 발생할 수 있다.

  // 아래 함수는 <script src="...">를 동적으로 만들고 이를 문서에 추가한다.
  // 1️⃣ 브라우저는 자동으로 태그에 있는 script.js로딩이 완료되면 script.js를 실행한다.

  // 두 번째 인수로 스크립트 로딩이 끝난 후 실행될 함수인 콜백(callback)함수를 추가한다. 콜백 함수는 나중에 호출할 함수를 의미한다.
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    // 아래 함수는 스크립트 로딩에 성공하면 호출된다. 첫번째 인수는 에러를 위해 null로 둔거다.
    // onload이벤트 핸들러가 비동기로 동작하기 때문에 아래 함수는 비동기 함수다.
    // 두번째 인수의 새롭게 불러온 스크립트에 있는 함수를 인자로 콜백 함수를 호출하면 원하는 대로 외부 스크립트 안의 함수를 사용할 수 있다.
    // 두번째 인수외에도 여러개의 script가 존재하는경우 인수를 무한으로 추가할 수 있다.
    script.onload = () => callback(null, script);
    // 아래 함수는 스크립트 로딩에 실패하면 호출된다.
    // 스크립트 로딩이 실패할 가능성은 언제나 있다. 그렇기 때문에 콜백 함수는 이런 에러를 핸들링할 수 있어야 한다.
    script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생했습니다.`));

    document.head.append(script);
  }

  // 2️⃣ 위 함수에서 script.js로딩은 바로 시작되지만, 실행은 loadScript함수가 끝나고 된다.
  loadScript('/my/script.js', (error, script) => {
    if (error) {
      // 에러 처리
    } else {
      // 스크립트 로딩이 성공적으로 끝났을때 케이스처리
      // 여기서 외부 스크립트 안의 함수를 사용할 수 있다.
    }
  });

  // 3️⃣ 따라서 여기 들어갈 코드들은 script.js로딩이 끝날 때까지 기다리지 않고 바로 실행된다. 즉 비동기적으로 실행된다.
}

test("run", () => {
  // expect(example()).toBe();
});
