import { useState } from "react";
import TimerContainer from "./TimerContainer"
import TimerManager from "./TimerInfo";

const productManager = new TimerManager();

export default function Timers() {

    const [timers, setProducts] = useState(productManager.getTimers());

  

    const onVote = (newVoteCount, index) => {
        const newTimers = timers.slice();
        newTimers[index].voteCount = newVoteCount;
        setProducts(newTimers);

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
                                        onVote
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