import { useState } from "react";
import TimerContainer from "./TimerContainer"
import TimerManager from "./TimerInfo";

const timeManager = new TimerManager();



export default function Timers() {

    const [timers, setTimes] = useState(timeManager.getTimers());
    let next = timers.size;



    function Add() {

        const addTimer = (e) => {
            e.preventDefault();
            const newTimer = {
                name: e.target[0].value,
                miliseconds: e.target[1].value * 1000
            }


            const newTimers = timers.slice();
            newTimers.push(newTimer);
            setTimes(newTimers);

        }

        return <div>
            <form id="form" onSubmit={addTimer}>
                <p>Name</p> <input type="text" name="tname"></input>
                <p>Seconds</p><input type="number" name="ttime"></input>
                <button>Add</button>
            </form>

        </div>
    }





    const onTick = (timer) => {
        let newTimers = timers.slice();
        const index = timer.index;

        if(timer.remove){
            newTimers = newTimers.splice(index);
        }


        newTimers[index].intervalId = timer.intervalId;

        console.log(timer)

        
        if (timer.miliseconds)
            newTimers[index].miliseconds = timer.miliseconds;

        

        if (timer.name)
            newTimers[index].name = timer.name;

        setTimes(newTimers);
    }


    return (
        <div
            style={{
                padding: 30
            }}
        >
            <ol className="product_list">
                {
                    timers.map((timer, index) => {
                        timer.index = index;
                        return (<>
                            <li key={index}><TimerContainer
                                info={
                                    {
                                        timer,
                                        onTick
                                    }
                                }

                            /></li>

                        </>
                        )
                    })
                }
            </ol>
            <Add />



        </div>
    );
}




