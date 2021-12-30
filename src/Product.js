import { ProductImage } from "./ProductImage";
import { ProductDescription } from "./ProductDescription";


export default function Product(props) {


  const backgroundColor = props.backgroundColor;


  return (
    <>
      <div className="timer_wrapper">
       
        <div className="timer">
          <ProductDescription
            data={props.info}
          />
        </div>
      </div>

    </>
  );
}
