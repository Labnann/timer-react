import { useState } from "react";
import { VoteCount } from "./VoteCount";


function PersonImage(props) {
    return (
        <img className="by_image" src={props.by} alt=""></img>
    )
}



export function Timer(props) {

    function formatTime(miliseconds) {
        const date = new Date(miliseconds);
        return {
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds()
        }
    }

    let mTime = props.data.timer.miliseconds;
    let index= props.data.timer.index;
    
    const formattedTime = formatTime(mTime);

    function turnOnTimer(){        
        let intervalId = window.setInterval(()=>{
            mTime = mTime<1000? 0: mTime-1000;
          
        
            props.data.onTick(mTime, index, intervalId)
        },1000);
    }

    const turnOffTimer = () =>{
       
        clearInterval(props.data.timer.intervalId);
    }




    return (
        <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>

            <div style={{
                color: "blue",
                fontWeight: "bold"
            }}>
                {props.data.timer.name}
            </div>
            <div id ={"t"+index} style={{ paddingTop: "30px" }}>
                {formattedTime.hour} : {formattedTime.minute} : {formattedTime.second}
            </div>
            <button id={"b"+index} onClick={turnOnTimer} >start</button>
            <button id={"be"+index} onClick ={turnOffTimer}>Stop</button>

        </div>
    );
}
