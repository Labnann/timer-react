import { useState } from "react";
import TimerContainer from "./TimerContainer"
import TimerManager from "./TimerInfo";

const timeManager = new TimerManager();

export default function Timers() {

    const [timers, setTimes] = useState(timeManager.getTimers());
    let next = timers.size;

  

    const onTick = (newTime, index, intervalId) => {
        const newTimers = timers.slice();
        console.log(newTimers, index)
        newTimers[index].miliseconds = newTime;
        newTimers[index].intervalId = intervalId;
        
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
                        return (
                            <li key={index}><TimerContainer
                                info={
                                    {
                                        timer,
                                        onTick
                                    }
                                }
                               
                            /></li>
                        )
                    })
                }
            </ol>

            
        </div>
    );
}




