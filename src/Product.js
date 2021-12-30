import { ProductImage } from "./ProductImage";
import { Timer } from "./ProductDescription";


export default function Product(props) {


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
