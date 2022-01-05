import { useState } from "react";
import { VoteCount } from "./VoteCount";


function PersonImage(props) {
    return (
        <img className="by_image" src={props.by} alt=""></img>
    )
}



export function Timer(props) {

    console.log(props)

    function formatTime(miliseconds) {
        const date = new Date(miliseconds);
        return {
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds()
        }
    }

    const [isEditing, setEditing] = useState(false);


    let mTime = props.data.timer.miliseconds;
    let index = props.data.timer.index;

    const formattedTime = formatTime(mTime);

    function turnOnTimer() {
        
        let intervalId = window.setInterval(() => {
            mTime = mTime < 1000 ? 0 : mTime - 1000;
            props.data.onTick({ miliseconds: mTime, index: props.data.timer.index, intervalId })
        }, 1000);
    }

    const turnOffTimer = () => {

        clearInterval(props.data.timer.intervalId);
    }


    function Edit() {
        if (!isEditing) return <></>;

        const edit = (e) => {
            e.preventDefault();
            props.data.onTick({
                name: e.target[0].value,
                index: props.data.timer.index,
                miliseconds: e.target[1].value*1000,
                intervalId: props.data.timer.intervalId
            })

        }

        return (
            <>
                <form id="form" onSubmit={edit}>
                    <p>Name</p> <input type="text" name="tname"></input>
                    <p>Seconds</p><input type="number" name="ttime"></input>
                    <button>Set</button>
                
                </form>
                <button onClick= {()=>{
                    props.data.onTick ({remove:true, index:props.data.timer.index});
                }}>Delete</button>


            </>
        )
    }




    return (
        <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>

            <div style={{
                color: "blue",
                fontWeight: "bold"
            }}>
                {props.data.timer.name}
            </div>
            <div id={"t" + index} style={{ paddingTop: "30px" }}>
                {formattedTime.hour} : {formattedTime.minute} : {formattedTime.second}
            </div>
            <button id={"b" + index} onClick={turnOnTimer} >start</button>
            <button id={"be" + index} onClick={turnOffTimer}>Stop</button>

            <button onClick={() => { setEditing(true) }}>Edit</button>
            <Edit />




        </div>
    );
}
