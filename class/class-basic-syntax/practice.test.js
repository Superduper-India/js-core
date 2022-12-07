function practice() {
  // 함수 스타일로 작성된 Clock클래스를 '클래스'문법으로 다시 작성하기.
  // function Clock({ template }) {
  //   let timer;

  //   function render() {
  //     let date = new Date();

  //     let hours = date.getHours();
  //     if (hours < 10) hours = '0' + hours;

  //     let mins = date.getMinutes();
  //     if (mins < 10) mins = '0' + mins;

  //     let secs = date.getSeconds();
  //     if (secs < 10) secs = '0' + secs;

  //     let output = template
  //       .replace('h', hours)
  //       .replace('m', mins)
  //       .replace('s', secs);

  //     console.log(output);
  //   }

  //   this.stop = function () {
  //     clearInterval(timer);
  //   };

  //   this.start = function () {
  //     render();
  //     timer = setInterval(render, 1000);
  //   };
  // }

  // let clock = new Clock({ template: 'h:m:s' });
  // clock.start();

  // 여기서부터 내코드

  class Clock {
    constructor(tmp) {

    }
  }
}

test("run", () => {
  expect(practice()).toBe();
});
