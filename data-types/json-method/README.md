# 자료구조와 자료형 - JSON과 메서드

## 자문자답
* JSON이란?
<!--javascript object notation의 약자로,
키-값쌍으로 이루어진 데이터 오브젝트를 교환하기 위해 사용하는 범용 데이터 포멧-->
* JSON.stringify(obj)메서드로 객체를 JSON으로 바꿔준 문자열을 무엇이라고 부르는가?
<!--JSON으로 인코딩된, 혹은 직렬화 된, 혹은 문자열 처리된 객체라고 부른다.-->
* JSON.stringify는 객체 뿐만아니라 원시값에도 적용할 수 있다? (o or x)
<!--o-->

## memo
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

객체안에 toString()메서드가 있는가? => 해당 메서드는 객체가 가지고 있는 정보나 값들을 문자열로 만들어 리턴하는 메소드이다.

✅ example 질문
* 위 메서드가 사용자 지정 개체에서 재정의되지 않으면 "[object type]"을 반환한다.

✅ practice2 질문
* key != "" 이여야하는 이유? 함수 최초 호출의 대상이 되는 키-값 쌍은 배제하기 위해
