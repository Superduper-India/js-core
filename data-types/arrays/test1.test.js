// 1. 배열과 관련된 연산
// 배열과 관련된 다섯 가지 연산을 해봅시다.

// 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
// "Rock-n-Roll"을 배열 끝에 추가합니다.
// 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
// 배열의 첫 번째 요소를 꺼내서 출력합니다.
// "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
// 단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 합니다.

function getMedium(arr, arrLength) {
  if (arrLength % 2 == 1) {
    return arr[Math.floor(arrLength / 2)] = "Classics";
  }
}

function solution() {
  const styles = ["Jazz", "Blues"];

  styles.push("Rock-n-Roll");
  getMedium(styles, styles.length);
  styles.shift();
  styles.unshift("Rap", "Reggae");

  return styles;
}

test("run", () => {
  expect(solution()).toEqual(
    ["Rap", "Reggae", "Classics", "Rock-n-Roll"]
  );
});
