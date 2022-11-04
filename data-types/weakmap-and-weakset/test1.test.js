// '읽음'상태인 메시지 저장하기 => Todo 다시풀기

// 어떻게 풀것인가?
// arr을 forEach로 obj를 WeakSet을 이용하여 .add({})해준다.
// .has({})해주어 true면 

function test1(arr) {
  const readMsg = new WeakSet();
  arr
  readMsg.set(key, value);
}

test("run", () => {
  let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

  expect(test1(messages)).toEqual(
    [
      { text: "How goes?", from: "John" },
      { text: "See you soon", from: "Alice" }
    ]
  );
});
