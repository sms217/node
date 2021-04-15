class Counter{
    constructor(runEveryFiveTimes){
        this.counter =0;
        this.callback = runEveryFiveTimes;
    }

    increase(){
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
            this.callback(this.counter);
        }
    }
}

function printSomething(num){
    console.log(`${num}`);
};

function alertNum(num){
    alert(`${num}`);
}

const callCounter = new Counter(alertNum);


for(let i = 0; i < 11; i++)
callCounter.increase();

