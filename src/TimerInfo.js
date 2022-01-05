export default class TimerManager {

    _generateColor() {
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);
        const a = Math.random();

        return `rgba(${r},${g},${b},${a})`;
    }


    _timers =
        [
           new Timer("Timer 1", 100000),
           new Timer("Timer 2", 100000),
           new Timer("Timer 3", 100000),
           new Timer("Timer 4", 100000),
           new Timer("Timer 5", 100000)
        ]



    getTimers = () => {

        return this._timers;

    }


    push(timer){
        this._timers.push(timer);
    }

}


class Timer{
    constructor(name, timeInMs){
        this.name = name;
        this.miliseconds = timeInMs;
    }


    decreaseASecond(){
        this.miliseconds = this.miliseconds<=1000 ? 0:this.miliseconds-1000;
    }
}