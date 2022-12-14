# 자료구조와 자료형 - iterable 객체

## 자문자답
* **이터러블**과 **유사배열**은 각각 무엇을 뜻하는지 정확히 설명하라.
<!-- 이터러블이란 for...in 반복문을 사용할 수 있도록 Symbol.iterator 메서드를 구현한 객체를 말한다. 유사배열은 인덱스 및 length프로퍼티를 가진 객체를 말한다. -->
* 이터러블의 관점에서 배열과 문자열은 무엇인가?
<!-- 내장 이터러블이다. -->
* 이터러블 개념을 사용하여 객체에 **for...of 반복문을 적용**하는 코드를 작성하라.
<!-- Symbol.iterator 메서드를 구현하여 이터레이터(next메서드가 있는 객체)를 반환하도록 한다. -->
* 이터레이터를 명시적으로 호출하는 코드를 작성하라.
```
let str = "Hello";

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if(result.done) break;
  console.log(result.value);
}
```
* 이터러블과 유사 배열을 진짜 배열로 만들어서 **배열 메서드를 적용**하는 방법은 무엇인가?
<!-- Array.from(이터러블 or 유사 배열) -->
