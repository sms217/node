// 
                   
//호출스택
    function first(){
    second();
    console.log('첫 번째');
    }

    function second(){
    third();
    console.log('두 번째');
    }

    function third(){
    console.log('세 번째');
    }

    first();
    

//setTimeout
function run(){
    console.log("3초가 지났습니다!");
}
console.log('시작');
setTimeout(run,3000);
console.log('끝');

//실행순서 익히기

// 블로킹 방식의 코드
  function longRunningTask() {
          //오래걸리는 작업
          console.log('작업 끝');
  }

  console.log('시작');
  longRunningTask();
  console.log('다음 작업'); // 작업 끝 이 출력되기전까지는 오랜기간 실행 안됨
  
  //논 블로킹방식의 코드
  function longRunningTask2(){
      //오래 걸리는 작업
      console.log('작업 끝');
  }
  console.log('시작');
  setTimeout(longRunningTask2,0);
  //setTimeout(콜백함수, 0); - 논 블로킹으로 만들기 위해 사용하는 기법 중 하나
  console.log('다음 작업');
