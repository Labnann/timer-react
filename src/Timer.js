import { VoteCount } from "./VoteCount";


function PersonImage(props) {
    return (
        <img className="by_image" src={props.by} alt=""></img>
    )
}



export function Timer(props) {

    function formatTime(miliseconds){
        const date = new Date(miliseconds);
        return {
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds()
        }
    }

    const formattedTime = formatTime (props.data.timer.miliseconds);



    return (
        <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
            
            <div style={{
                color: "blue",
                fontWeight: "bold"
            }}>
                {props.data.timer.name}
            </div>
            <div style={{ paddingTop: "30px" }}>
                {formattedTime.hour} : {formattedTime.minute} : {formattedTime.second}
            </div>

        </div>
    );
}
