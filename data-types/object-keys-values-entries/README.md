# 자료구조와 자료형 - Object.keys, values, entries

## 자문자답
* keys(), values(), entries()을 전용 메서드로 사용할 수 있는 자료구조 세 가지를 말하라.
<!-- Map, Set, Array -->
* 위 자료구조들에 **전용 메서드**를 사용하는 것과 일반 객체용 메서드의 차이 두 가지는 무엇인가?
<!-- 1/ .keys()가 아닌, Object.keys(obj)를 호출한다는 점
     2/ 반환하는 값이 이터러블 객체가 아닌, 진짜 배열이라는 점
-->
* 객체용 메서드를 활용하여 객체를 배열 전용 메서드를 적용하여 변환하는 방법은 무엇인가?
<!-- Object.entries(obj)를 사용하여 Obj->Arr 변환, 
map메서드를 활용하여 내용변경된 요소를 가진 배열을 반환, 
Object.fromEntries(Arr)를 사용하여 Arr->Obj 변환
-->
