import { ProductImage } from "./ProductImage";
import { Timer } from "./Timer";


export default function TimerContainer(props) {


  const backgroundColor = props.backgroundColor;


  return (
    <>
      <div className="timer_wrapper">
       
        <div className="timer">
          <Timer
            data={props.info}
          />
        </div>
      </div>

    </>
  );
}
