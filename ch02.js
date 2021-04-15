//2. 알아두어야 할 자바 스크립트 : ES2015 + 문법 ES = ECMA Script
//클래스 기반 코드
class Human {
    constructor(type = 'human'){ //생성자, 매개변수 1개, human - 디폴트값 설정
        // let hu = new Human();, let hu2 = new Human('woman');
        this.type = type; //속성을 정의 this를 이용
    }

    static isHuman(human){//클래스 메소드 정의
        return human instanceof Human;
    }

    breathe(){//일반메소드정의
        alert('h-a-a-a-m');
    }
}

class Zero extends Human{ //상속관계 정의
    constructor(type, firstName, lastName){
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breathe();
        alert(`${this.firstName}${this.lastName}`);
    }
}

const newZero = new Zero('monster', 'go','zilla');
Human.isHuman(NewZero);

const condition = Math.random() < 0.5 ? true : false;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve("성공");
    }else reject("실패");
});

promise
    .then((message) =>{
        console.log(message);
    })
    .catch((error) =>{
        console.log(error);
    })
    .finally(() => {
        console.log("끝나면 무조건 실행");
    });
